<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="我的学习卡" left-text="" left-arrow @click-left="zqd_go()">
      <template #right>
        <span class="zqd_sp1" @click="zqd_exchange">学习卡兑换</span>
      </template>
    </van-nav-bar>
    暂无记录
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
    // 跳转学习卡兑换
    zqd_exchange(){
      this.$router.push('/exchange')
    }
  },
};
</script>

<style scoped>
.zqd_sp1 {
  font-size: 0.12rem;
}
</style>
