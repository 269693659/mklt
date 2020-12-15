<template>
  <div class="page">
    <div>
      <van-field v-model="name" label="姓名" />
      <van-field v-model="company" label="公司名称" />
      <van-field v-model="industry" label="行业" />
      <van-field v-model="counts" label="购买数量" />
      <van-button type="primary" @click="pay">立即支付(二维码)</van-button>
      <van-button type="primary" @click="paywx">立即支付(微信)</van-button>
    </div>
    <ewm :paydata="paydata" v-if="isshow" @closeewm="closeewm"></ewm>
  </div>
</template>

<script>
import ewm from '@/views/ticket/ewm'
import {getUrlParams} from '@/unit/index'
export default {
  components: {
    ewm
  },
  data() {
    return {
      name:'name',
      company:'糖果有限公司',
      industry:'生产厂商',
      counts:1,
      payType: 0,
      paydata:{},
      isshow:false,
      openId:'',
      payRecordNo:''//支付订单
    };
  },
  computed:{
    getOpenId(){
      return this.$store.getters.openId
    }
  },
  created() {

    // if(this.getOpenId){
    //   this.openId=this.getOpenId
    // }else{
    //   this.getWXCode()
    // }
  },
  mounted() {

  },
  
  methods: {
    closeewm(){
      this.isshow=false
    },
    getWXCode(){
      let wxCode = getUrlParams('code')
      console.log('code',getUrlParams('code'));
      console.log('state',getUrlParams('state'));
      console.log('appid',getUrlParams('appid'));
      if(wxCode){
        this.getWXOpenId(wxCode)
      }else{
        console.log('走这');
        // let url = process.env.VUE_APP_REDIRECT_URI + '?userCode=' + this.$route.query.userCode || '';
        let url = location.href
        console.log(url);
        location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf4dda9dfe3d218dd&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`
      }
    },
    // 获取微信openid
    getWXOpenId(code) {
      this.$get({
        url: `/weChat/get/openId/${code}`
      }).then(res => {
        if (res.data) {
          const { openid = '' } = res.data
          this.openId = openid
          this.$store.commit('setOpenId', openid)
        }
      })
    },
    pay(){
      let url = `/pay/set/weChatPay`
      let data = {
        name:this.name,
        company:this.company,
        industry:this.industry,
        num:this.counts,
        payType:this.payType,
        tradeType: "NATIVE",
      }
      this.$post({
        url,
        data
      }).then(res=>{
        this.paydata = res.data
        this.isshow=true
      })
    },
    paywx(){
      let url = `/pay/set/weChatPay`
      let data = {
        name:this.name,
        company:this.company,
        industry:this.industry,
        num:this.counts,
        payType:this.payType,
        openId: this.openId,
      }
      this.$post({
        url,
        data
      }).then(res=>{
        console.log('微信支付');
        const { payRecordNo = '' } = res.data
        this.payRecordNo = payRecordNo
        this.onBridgeReady(res.data)
      }).catch(err=>{
        console.log(err);
      })
    },
    onBridgeReady(item){
      console.log('item.appId',item.appId);
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        {
          "appId":item.appId,     //公众号名称，由商户传入     
          "timeStamp":item.timeStamp,         //时间戳，自1970年以来的秒数     
          "nonceStr":item.nonceStr, //随机串     
          "package":item.package,   
          "signType":item.signType,         //微信签名方式：     
          "paySign":item.paySign //微信签名 
        },
        (res)=>{
          if(res.err_msg == "get_brand_wcpay_request:ok"){
            // 使用以上方式判断前端返回,微信团队郑重提示：
            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            console.log('支付成功');
            this.getWXPayState()
          }
          else if(res.err_msg == "get_brand_wcpay_request:fail"){
            console.log('支付失败');
            this.getWXPayState()
          }
          else if(res.err_msg == "get_brand_wcpay_request:cancel"){
            console.log('支付过程中用户取消');
          }
        }
      )
    },
    // 获取支付状态
    getWXPayState(){
      this.$post({
        url:`/pay/get/${this.payRecordNo}`
      }).then(res=>{

      })
    }
  }
};
</script>
<style lang="scss" scoped>
.page{
  position: relative;
}
</style>