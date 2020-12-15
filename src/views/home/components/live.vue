<template>
  <div class="page">
      <ul>
          <li v-for="(item,i) in list" :key="i">
              <div>
                    {{item.forumLiveList[0].startTime}}
              </div>
              <div class="box" v-for="(data,k) in item.forumLiveList" :key="k" @click="goPlay(data)">
                <p>
                    {{data.title}}
                </p>
                <p>
                    {{data.address}}
                </p>
              </div>
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
        list:[]
    };
  },
  created() {
      this.getlist()
  },
  mounted() {

  },
  methods: {
      goPlay(item) {
        this.$router.push({
            path: '/live-view',
            query: {
            liveId: item.liveId
            }
        })
        },
      getlist(){
          this.$get({
              url:'live/get/list'
          }).then(res=>{
              this.list=res.data
          })
      }
  },
};
</script>
<style lang="scss" scoped>
ul{
    li{
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .box{
            padding-left: 20px;
        }
    }
}
</style>