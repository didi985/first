<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="开通会员" left-text="" left-arrow @click-left="zqd_go()">
      <template #right> </template>
    </van-nav-bar>

    <!-- 一点信息 -->
    <div class="zqd_mess">
      <img src="../assets/logo.png" alt="" />
      <p>
        <span class="zqd_sp1">马兴龙123</span> <br />
        <span class="zqd_sp2">开通会员免费学习</span>
      </p>
    </div>
    <!-- 购买会员 -->
    <div class="zqd_mai">
      <p>
        <span>购买会员</span>
        <span class="zqd_sp3">购买会员后可免费观看会员课程</span>
      </p>
      <!-- 月季年卡 -->
      <div class="zqd_bottom">
        <div class="zqd_div1" :style="{background:a==1?'#F9F0D9':''}" @click="a=1">
          <p class="zqd_p1">季度会员</p>
          <p class="zqd_p2">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" alt="" />
            <span>40.00</span>
          </p>
        </div>
        <div class="zqd_div1" :style="{background:a==2?'#F9F0D9':''}" @click="a=2">
          <p class="zqd_p1">半年会员</p>
          <p class="zqd_p2">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" alt="" />
            <span>75.00</span>
          </p>
        </div>
        <div class="zqd_div1" :style="{background:a==3?'#F9F0D9':''}" @click="a=3">
          <p class="zqd_p1" >月会员</p>
          <p class="zqd_p2">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" alt="" />
            <span>15.00</span>
          </p>
        </div>
      </div>
    </div>
            <!-- 底部按钮 -->
         <van-button type="primary" id="zqd">立即支付</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
       a:1
    };
  },
  created() {},
  mounted() {},
  methods: {
    zqd_go() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
.zqd_mess {
  width: 100%;
  height: 1rem;
  box-sizing: border-box;
  padding: 0 0.25rem;
  display: flex;
  align-items: center;
  > img {
    width: 0.64rem;
    height: 0.64rem;
  }
  > p {
    margin-left: 0.1rem;
  }
  .zqd_sp1 {
    font-size: 0.14rem;
  }
  .zqd_sp2 {
    font-size: 0.12rem;
    color: #8c8c8c;
  }
}
.zqd_mai {
  padding: 0.8rem 0.4rem;
  height: 7.5rem;
  background: #f0f2f5;
  .zqd_sp3 {
    margin-left: 0.1rem;
    font-size: 0.12rem;
    color: #808080;
  }
}
.zqd_bottom {
   display: flex;
   justify-content: space-between;
  .zqd_div1 {
    width: 2.04rem;
    height: 2.2rem;
    border: 1px solid orange;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   .zqd_p1{
      font-weight: bolder;
      font-size: 0.16rem;
      color: #678CAF;
   }
   .zqd_p2{
      img{
         width: 0.28rem;
         height: 0.3rem;
      }
      span{
         font-size: 0.6rem;
         color: #D5A322;
      }
   }
  }
}
#zqd{
   width: 6.5rem;
   height: 1rem;
   margin-left: 0.5rem;
   border-radius: 0.5rem;
   background: linear-gradient(90deg,#eac687,#c8ae84);
}
</style>
