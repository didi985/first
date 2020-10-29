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
        <li v-for="(item,index) in zqd_arr" :key="index" @click="zqd_xiang(item.message_classify)">
            <p>
                <!-- <van-icon name="credit-pay"  color="#2AC8B7" size="0.88rem" id="zqd"/> -->
                <van-icon :name="item.name" color="#2AC8B7" size="0.88rem" id="zqd"/>
            </p>
            <div>
                <span>{{ item.kecheng }}</span>
                <p>{{ item.title }}</p>
            </div>
        </li>
    </ul>



  </div>
</template>

<script>
export default {
  data() {
    return {
        zqd_arr:[
            {
                name:'credit-pay',
                kecheng:'课程通知',
                title:'您报名的课程《李老师18号20号地理大课堂开课啦》已经有3天没有学习了，快去学习吧',
                message_classify:'coures'
            },
            {
                name:'credit-pay',
                kecheng:'系统通知',
                title:'暂无消息',
                message_classify:'system'

            },
            {
                name:'credit-pay',
                kecheng:'订单通知',
                title:'您的课程订单《》取消成功',
                message_classify:'order'

            },
            {
                name:'credit-pay',
                kecheng:'约课通知',
                title:'暂无消息',
                message_classify:'oto'

            },
            {
                name:'credit-pay',
                kecheng:'考试通知',
                title:'暂无消息',
                message_classify:'exam'

            },
        ]
    };
  },
  created() {

  },
  mounted() {},
  methods: {
    zqd_go() {
      this.$router.go(-1);
    },
    zqd_xiang(zqd){
        // console.log(zqd)
        this.$router.push({
            path:'/message-detail',
            query:{
                zqd
            }
        })
    }
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
