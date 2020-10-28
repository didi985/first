<template>
  <div>
    <div>
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item>
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg"
            alt=""
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg"
            alt=""
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg"
            alt=""
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg"
            alt=""
          >
        </van-swipe-item>

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

<style scoped lang="scss">
   span{
      font-size: 0.16rem;
   }
    .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

</style>



