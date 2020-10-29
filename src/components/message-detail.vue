<template>
  <div>
    <!-- 课程通知 -->
    <div class="zqd_div1" v-if="message == 'coures'">
      <!-- 表头 -->
      <van-nav-bar title="课程通知" left-text="" left-arrow @click-left="zqd_go()">
        <template #right>
          <!-- <span class="zqd_sp1">学习卡兑换</span> -->
        </template>
      </van-nav-bar>
      <ul class="zqd_ul">
        <li>
          <p class="zqd_p1">7月20号 13:55</p>
          <p class="zqd_p2">您报名的课程《李老师18号20号地理大课堂开课啦》已经有3天没有学习了，快去学习吧</p>
        </li>
      </ul>
    </div>

    <!-- 系统通知 -->
    <div class="zqd_div1" v-if="message == 'system'">
      <!-- 表头 -->
      <van-nav-bar title="系统通知" left-text="" left-arrow @click-left="zqd_go()">
        <template #right>
          <!-- <span class="zqd_sp1">学习卡兑换</span> -->
        </template>
      </van-nav-bar>
      暂无
    </div>

    <!-- 订单通知 -->
    <div class="zqd_div1" v-if="message == 'order'">
      <!-- 表头 -->
      <van-nav-bar title="订单通知" left-text="" left-arrow @click-left="zqd_go()">
        <template #right>
          <!-- <span class="zqd_sp1">学习卡兑换</span> -->
        </template>
      </van-nav-bar>
      <ul class="zqd_ul">
        <li>
          <p class="zqd_p1">7月20号 13:55</p>
          <p class="zqd_p2">您的订单取消成功</p>
        </li>
      </ul>
    </div>

    <!-- 约课通知 -->
    <div class="zqd_div1" v-if="message == 'oto'">
      <!-- 表头 -->
      <van-nav-bar title="约课通知" left-text="" left-arrow @click-left="zqd_go()">
        <template #right>
          <!-- <span class="zqd_sp1">学习卡兑换</span> -->
        </template>
      </van-nav-bar>
      暂无
    </div>

    <!-- 考试通知 -->
    <div class="zqd_div1" v-if="message == 'exam'">
      <!-- 表头 -->
      <van-nav-bar title="考试通知" left-text="" left-arrow @click-left="zqd_go()">
        <template #right>
          <!-- <span class="zqd_sp1">学习卡兑换</span> -->
        </template>
      </van-nav-bar>
      暂无
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  created() {},
  mounted() {
    console.log(this.$route.query.zqd);
    this.message = this.$route.query.zqd;
  },
  methods: {
    zqd_go() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
.zqd_ul {
  padding: 0 0.2rem;
  > li {
    // text-align: center;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    margin-top: 0.2rem;
    > .zqd_p1 {
      width: 1.83rem;
      height: 0.45rem;
      line-height: 0.45rem;
      text-align: center;
      background: #b7b7b7;
      color: #fff;
    }
    > .zqd_p2 {
      color: #8c8c8c;
    }
  }
}
</style>
