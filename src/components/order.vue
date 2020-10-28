<template>
    <div>
       <!-- 表头 -->
       <van-nav-bar title="课程订单" left-text="" left-arrow @click-left="zqd_go()">
         <template #right>
           <!-- <van-icon name="search" size="18" /> -->
           <!-- <van-icon name="apps-o" /> -->
         </template>
       </van-nav-bar>
       <!-- 导航栏 -->
       <van-tabs v-model="activeName">
         <van-tab title="全部订单" name="a">全部订单

            <div class="zqd_order">
                  <p class="zqd_p1">
                     <span class="zqd_sp2">订单编号：2020071713544868021</span>
                     <span class="zqd_sp3">交易完成</span>
                  </p>
                  <ul class="zqd_p2">
                     <li>李老师18号20号地理大课堂开课了</li>
                     <li class="zqd_time">时间：220.07.17  13.54</li>
                     <li class="zqd_time">实付款：0</li>
                     <li>
                        <button class="zqd_btn">加入学习</button>
                     </li>
                  </ul>
            </div>


         </van-tab>
         <van-tab title="待支付" name="b">暂无订单</van-tab>
         <van-tab title="已完成" name="c">
             <div class="zqd_order">
                  <p class="zqd_p1">
                     <span class="zqd_sp2">订单编号：2020071713544868021</span>
                     <span class="zqd_sp3">交易完成</span>
                  </p>
                  <ul class="zqd_p2">
                     <li>李老师18号20号地理大课堂开课了</li>
                     <li class="zqd_time">时间：220.07.17  13.54</li>
                     <li class="zqd_time">实付款：0</li>
                     <li>
                        <button class="zqd_btn">加入学习</button>
                     </li>
                  </ul>
            </div>
         </van-tab>

         <van-tab title="已取消" name="d">暂无订单</van-tab>

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
    created() {

    },
    mounted() {

    },
    methods: {
      zqd_go(){
         this.$router.go(-1)
      }
    }
};
</script>

<style scoped>
.zqd_order{
   width: 6.9rem;
   height: 2.7rem;
   margin-left: 0.3rem;
   box-shadow: 0px 0px 5px #f4f4f4;
   box-sizing: border-box;
   padding: 0.25rem;
}
.zqd_order>.zqd_p1{
   width: 6.3rem;
   height: 0.5rem;
   border-bottom: 1px solid #F6F6F6;
}
.zqd_order>.zqd_p1>.zqd_sp2{
   font-size: 0.14rem;
}
.zqd_order>.zqd_p1>.zqd_sp3{
   color: red;
   margin-left: 0.52rem;
}
.zqd_order>.zqd_p2{
   width: 6.3rem;
   height: 1.5rem;
}
.zqd_btn{
   width: 1.6rem;
   height: 0.6rem;
   text-align: center;
   line-height: 0.6rem;
   border: 1px solid orange;
   color: orange;
   border-radius: 0.35rem;
   background: #fff;
   margin-left: 5rem;
}
.zqd_time{
   font-size: 0.14rem;
   color: #AC9FA2;
}
</style>
