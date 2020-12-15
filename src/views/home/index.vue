<template>
  <div class="page">
    首页
    <button @click="goticket">{{$t('home.buyticket')}}</button>
    <div class="nav">
      <ul >
        <li v-for="(item,i) in list" :key="i">{{item.name}}</li>
      </ul>
    </div>
    <live></live>
  </div>
</template>

<script>
import live from '@/views/home/components/live'
export default {
  components: {
    live
  },
  data() {
    return {
      list:[
        {
          name:'新闻中心1'
        },
        {
          name:'新闻中心2'
        },
        {
          name:'新闻中心3'
        },
        {
          name:'新闻中心4'
        },
        {
          name:'新闻中心5'
        },
        {
          name:'新闻中心6'
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    goticket(){
      this.$router.push('/ticket/buy')
    }
  },
};
</script>
<style lang="scss" scoped>
.nav{
  width: 100%;
  overflow: scroll;
  ul{
    width: max-content;
    display: flex;
    li{
      padding: 20px;
    }
  }
}
</style>