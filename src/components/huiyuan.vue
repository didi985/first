<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="会员" left-text="" left-arrow @click-left="zqd_go()">
      <template #right>
        <!-- <span class="zqd_sp1">学习卡兑换</span> -->
      </template>
    </van-nav-bar>
            <!-- 选项卡 -->
    <van-tabs v-model="active">
      <van-tab title="全部订单">全部订单</van-tab>
      <van-tab title="待支付">待支付</van-tab>
      <van-tab title="已完成">已完成</van-tab>
      <van-tab title="已取消">已取消</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
       active:0
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

<style scoped></style>
