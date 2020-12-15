<template>
  <div class="ewm" @click="$emit('closeewm')">
      <qriously :value="paydata.code_url" :size="200"></qriously>
  </div>
</template>

<script>
import Vue from 'vue'
import VueQriously from 'vue-qriously'
Vue.use(VueQriously)

export default {
    props:{
        paydata:{
            type:Object
        }
    },
  components: {

  },
  data() {
    return {
    };
  },
  created() {

  },
  mounted() {

  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
.ewm{
        height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    background: #fff;
}
</style>