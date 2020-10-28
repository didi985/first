<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="信息通知" left-text="" left-arrow @click-left="zqd_go()">
      <template #right>
        <!-- <span class="zqd_sp1">学习卡兑换</span> -->
      </template>
    </van-nav-bar>

    <!-- 信息下面的布局 -->
    <ul class="zqd_ul">
        <li>
            <p>
                <!-- <van-icon name="credit-pay"  color="#2AC8B7" size="0.88rem" id="zqd"/> -->
                <van-icon name="credit-pay" color="#2AC8B7" size="0.88rem" id="zqd"/>
            </p>
            <div>
                <span>课程通知</span>
                <p>您报名的课程《李老师18号20号地理大课堂开课啦》已经有3天没有学习了，快去学习吧</p>
            </div>
        </li>
        <li>
            <p>
                <van-icon name="credit-pay" color="#2AC8B7" size="0.88rem" id="zqd"/>
            </p>
            <div>
                <span>系统通知</span>
                <p>暂无消息</p>
            </div>
        </li>
        <li>
            <p>
                <van-icon name="credit-pay" color="#2AC8B7" size="0.88rem" id="zqd"/>
            </p>
            <div>
                <span>订单通知</span>
                <p>您的课程订单《》取消成功</p>
            </div>
        </li>
        <li>
            <p>
                <van-icon name="credit-pay" color="#2AC8B7" size="0.88rem" id="zqd"/>
            </p>
            <div>
                <span>约课通知</span>
                <p>暂无消息</p>
            </div>
        </li>
        <li>
            <p>
                <van-icon name="credit-pay" color="#2AC8B7" size="0.88rem" id="zqd"/>
            </p>
            <div>
                <span>考试通知</span>
                <p>暂无消息</p>
            </div>
        </li>
    </ul>



  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {

  },
  mounted() {},
  methods: {
    zqd_go() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">

.zqd_ul{
    box-sizing: border-box;
    padding: 0.15rem 0.2rem;
    >li{
        display: flex;
        border-bottom: 1px solid #efefef;
        margin-top: 0.15rem;
        >div{
            margin-left: 0.2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            >span{
                font-size: 0.2rem;
            }
            >p{
                font-size: 0.25rem;
                color: #595959;
            }
        }


    }
}
</style>
