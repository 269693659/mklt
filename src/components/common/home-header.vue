<template>
  <div class="page">
     <span @click="gologin" v-if="!token">登录 </span>
     <span v-else>个人中心   </span>
     <span @click="lang('zh')" :class="{'active':$i18n.locale =='zh'}">中文</span>
     <span @click="lang('en')" :class="{'active':$i18n.locale =='en'}">en</span>
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
    },
    lang(val){
      this.$i18n.locale = val
      document.title=this.$t('home.title')
    },
  },
};
</script>
<style lang="scss" scoped>
.page{
  height: 50px;
  line-height: 50px;
  .active{
    color: red;
  }
}
</style>