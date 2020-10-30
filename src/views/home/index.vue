<template>
  <div class="page">
    首页
    <button @click="goticket">购票</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
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
</style>