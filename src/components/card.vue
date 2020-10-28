<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="我的学习卡" left-text="" left-arrow @click-left="zqd_go()">
      <template #right>
        <span class="zqd_sp1">学习卡兑换</span>
      </template>
    </van-nav-bar>
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
  },
};
</script>

<style scoped>
.zqd_sp1 {
  font-size: 0.12rem;
}
</style>
