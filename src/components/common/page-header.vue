<template>
  <div class="page">
    <van-nav-bar
      left-text="返回"
      right-text="首页"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
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
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){
      this.$router.push('/')
    }
  },
};
</script>
<style lang="scss" scoped>
</style>