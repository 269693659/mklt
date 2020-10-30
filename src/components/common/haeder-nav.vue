<template>
  <div class="page">
    <van-tabs color="#78A5F6" background='#427EE8' title-inactive-color="#ffffff" title-active-color="#ffffff">
      <van-tab v-for="(item,i) in list" :key="i" :title="item.name" :to="item.path" color="blue"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [
        {
          name: "首页",
          path: "/",
        },
        {
          name: "新闻",
          path: "/news",
        },
        {
          name: "新闻",
          path: "/news",
        },
        {
          name: "新闻",
          path: "/news",
        },
        {
          name: "新闻",
          path: "/news",
        },
        {
          name: "新闻",
          path: "/news",
        },
        {
          name: "新闻",
          path: "/news",
        },
        {
          name: "新闻",
          path: "/news",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
  },
};
</script>
<style lang="scss" scoped>
</style>