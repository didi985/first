<template>
   <div>
      <!-- 我的余额 -->
      <!-- 表头 -->
      <van-nav-bar title="我的余额" left-text="" left-arrow @click-left="zqd_go()">
         <template #right>
            <span class="zqd_sp">余额明细</span>
         </template>
      </van-nav-bar>

      <!-- 我的0余额 -->
      <p class="zqd_p">
         <span class="zqd_sp2">我的余额</span>
         <span class="zqd_sp3">0 学习币</span>
      </p>
      <!-- 充值列表 -->
      <ul class="zqd_ul">
         <li>
            <p>30000.00学习币</p>
            <p class="zqd_p2">￥30000.00</p>
         </li>
         <li>
            <p>20000.00学习币</p>
            <p class="zqd_p2">￥20000.00</p>
         </li>
         <li>
            <p>10000.00学习币</p>
            <p class="zqd_p2">￥10000.00</p>
         </li>
         <li>
            <p>8000.00学习币</p>
            <p class="zqd_p2">￥8000.00</p>
         </li>
         <li>
            <p>5000.00学习币</p>
            <p class="zqd_p2">￥5000.00</p>
         </li>
         <li>
            <p>3000.00学习币</p>
            <p class="zqd_p2">￥3000.00</p>
         </li>
         <li>
            <p>0.01学习币</p>
            <p class="zqd_p2">￥0.01</p>
         </li>
         <li>
            <p>100.00学习币</p>
            <p class="zqd_p2">￥100.00</p>
         </li>

      </ul>
      <!-- 充值说明 -->
      <p class="zqd_pp">充值说明</p>
      <p style="color: #333;">

         1、学习币是网校中专有的一种虚拟货币，大家可以用学习币购买网校内的任何虚拟商品，比如课程、辅导答疑。
         2、充值后没有使用期限,但无法提现,退款和转赠他人。
         3、如遇到无法充值、充值失败等问题,请联系客服。

      </p>

      <van-tabbar id="zqd">
         立即充值
      </van-tabbar>
   </div>
</template>

<script>
   export default {
      data() {
         return {

         };
      },
      created() {

      },
      mounted() {

      },
      methods: {
         zqd_go() {
            this.$router.go(-1)
         }
      }
   };
</script>

<style scoped>
   .zqd_sp {
      font-size: 0.12rem;
   }

   .zqd_p {
      box-sizing: border-box;
      padding: 0.2rem 0;
      height: 1rem;
      line-height: 1rem;
   }

   .zqd_p span {
      margin-left: 0.17rem;
   }

   .zqd_p>.zqd_sp2 {
      font-size: 0.12rem;
   }

   .zqd_p>.zqd_sp3 {
      color: #DC692A;
   }

   .zqd_ul {
      box-sizing: border-box;
      padding: 0.12rem 0.1rem 0 0.12rem;
      background: #eee;
   }

   .zqd_ul>li {
      box-sizing: border-box;
      padding: 0 0.12rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 1rem;
      background: #fff;
      border-radius: 0.18rem;
      margin-top: 0.5rem;
   }

   .zqd_ul>li>.zqd_p2 {
      color: #e90000;
   }

   #zqd {
      /* text-align: center; */
      display: flex;
      align-items: center;
      justify-content: center;
      background: #CCCCCC;
      color: #fff;
      font-size: 0.2rem;
   }

   .zqd_pp {
      height: 0.5rem;
      box-sizing: border-box;
      padding: 0.15rem;
   }
</style>