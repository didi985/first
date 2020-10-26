<template>
  <div class="box">
      <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000" :show-indicators='false'>
                <van-swipe-item><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20193KAjU2cB6h1569839562.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019LnKumseuhw1569839569.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20193KAjU2cB6h1569839562.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20197Cxc53hktC1569839552.jpg" alt=""></van-swipe-item>
            </van-swipe>
      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.banner{
    height: 4.3rem;
}
.my-swipe .van-swipe-item {
  height: 4.3rem;
  img{
      height: 4.3rem;
  }
}
</style>
