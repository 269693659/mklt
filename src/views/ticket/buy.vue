<template>
  <div class="page">
      购票
      <br>
      <ul>
          <li v-for="item in ticketList" :key="item.id">
              <p>名称{{item.name}}</p>
              <p>价格：{{item.price}}</p>
              <button v-if="item.buyNum >item.totalNum ">已售罄</button>
              <button v-else @click="gobuy">购票</button>
          </li>
      </ul>

  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
        ticketList:[]
    };
  },
  created() {
      
  },
  mounted() {
      this.getTicket()
  },
  methods: {
      getTicket(){
          this.$get({
              url:'ticket/get'
          }).then(res=>{
              this.ticketList=res.data
          })
      },
      gobuy(){
          this.$router.push('/ticket/pay')
      }
  },
};
</script>
<style lang="scss" scoped>
li{
    border-bottom: 1px solid #ccc;
}
</style>