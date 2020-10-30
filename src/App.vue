<template>
  <div id="app">
    <home-haeder v-if="showheaderNav"></home-haeder>
    <haeder-nav v-if="showheaderNav"></haeder-nav>
    <page-haeder v-if="!showheaderNav"></page-haeder>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  computed:{
    showheaderNav(){
      return this.$route.meta.showheaderNav=='true'?true:false
    }
  },
}
</script>

<style lang="scss">
</style>
