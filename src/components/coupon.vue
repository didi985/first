<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="我的优惠券" left-text="" left-arrow @click-left="zqd_go()">
      <template #right>
        <!-- <van-icon name="search" size="18" /> -->
        <!-- <van-icon name="apps-o" /> -->
      </template>
    </van-nav-bar>
    <!-- 导航栏 -->
    <van-tabs v-model="activeName">
      <van-tab title="未使用" name="a">暂无优惠券</van-tab>
      <van-tab title="已使用" name="b">暂无优惠券</van-tab>
      <van-tab title="已过期" name="c">暂无优惠券</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'a',
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
