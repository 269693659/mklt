<template>
  <div class="page">
     <span @click="gologin" v-if="!token">登录 </span>
     <span v-else>个人中心   </span>
     <span>中文   </span>
     <span>en</span>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
    };
  },
  created() {
  },
  computed:{
    token(){
      return this.$store.getters.token
    }
  },
  mounted() {

  },
  methods: {
    gologin(){
      this.$router.push('/login')
    }
  },
};
</script>
<style lang="scss" scoped>
.page{
  height: 50px;
  line-height: 50px;
}
</style>