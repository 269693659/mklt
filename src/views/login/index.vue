<template>
  <div class="page">
      <span>用户名</span>
      <input type="text" v-model="username">
      <br>
      <span>验证码</span>
      <input type="text" v-model="password">
      <span @click="getcode">获取验证码</span>
      <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
        username:'',
        password:'',
    };
  },
  created() {

  },
  mounted() {

  },
  methods: {
      login(){
          let data = {
            mobile:this.username,
            verificationCode:this.password,
          }
          this.$post({
            url:'user/login',
            data
          }).then(res=>{
            this.$store.commit('setToken',res.data.token)
            this.$store.commit('userInfo',res.data)
            let red = decodeURIComponent(this.$route.query.redirect) || '/'
            this.$router.replace(red)
          })
      },
      getcode(){
        this.$post({
          url:'user/get/code/'+this.username
        })
      }
  },
};
</script>
<style lang="scss" scoped>
</style>