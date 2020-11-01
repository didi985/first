<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="设置" left-text="" left-arrow @click-left="zqd_go()">
      <template #right>
        <!-- <span class="zqd_sp1">学习卡兑换</span> -->
      </template>
    </van-nav-bar>
         <!-- 设置密码 -->
    <van-nav-bar title="" left-text="设置密码" @click-left="$router.push('/set-pass')">
      <template #right>
         <van-icon name="arrow" />
      </template>
    </van-nav-bar>

     <!-- 底部按钮 -->
    <van-button type="primary" id="zqd" @click="tuichu">退出登录</van-button>
  </div>
</template>




<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    zqd_go() {
      this.$router.go(-1);
    },
    tuichu(){
      localStorage.removeItem('token')
      this.$router.push('/index')
    },
  },
};
</script>

<style scoped>
#zqd {
  width: 6.5rem;
  height: 1rem;
  margin-left: 0.5rem;
  margin-top: 5rem;
  border-radius: 0.2rem;
  /* background: linear-gradient(90deg,#eac687,#c8ae84); */
  background: #EB6100;
}
</style>
