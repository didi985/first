<template>

    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg" alt="">
            </van-swipe-item>

        </van-swipe>

    </div>
  </div>
</template>

<script>

    export default {
        data() {
            return {

            };
        },
        created() {

        },
        mounted() {

        },
        methods: {

        }
    };
</script>

<style scoped lang="scss">

    .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 0.2rem;
    /* line-height: 1.5rem; */
    height: 4rem;
    text-align: center;
    background-color: #39a9ed;
  }
  .van-swipe-item>img{
      /* width: 100%; */
      width: 7.5rem;
      height: 4rem;

  }
</style>

</script>

<style lang="scss">
.banner {
  height: 4.3rem;
}
.my-swipe .van-swipe-item {
  height: 4.3rem;

}
</style>

