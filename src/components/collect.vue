<template>
   <div>
      <!-- 表头 -->
      <van-nav-bar title="我的收藏" left-text="" left-arrow @click-left="zqd_go()">
        <template #right>
           <!-- <span class="zqd_sp">余额明细</span> -->
        </template>
     </van-nav-bar>

         <div class="tad-dan" @click="danxiang">
            <p class="tad-p1">李老师课堂开课了快来看看</p>
            <div class="tad-sj">
              <p>
                 <van-icon name="aim" />
                03月16日 18:30 ~ 03月22日 15:00
                <van-icon name="down" />
                </p>
              <p>共8课时</p>
            </div>
            <div class="tad-tu">
              <div>
                <img src='../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png' alt="">
                <font>李青</font>
              </div>
            </div>
            <p class="tad-ren">
              <span  >134人已报名</span>
              <font >免费</font>
            </p>
        </div>


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
     zqd_go(){
        this.$router.go(-1)
     },
     danxiang(){
      this.$router.push('/Course-detail')
     }
   }
};
</script>

<style scoped>
.tad-nei {
  background-color: #f0f2f5;
  padding: 0.3rem;
}
.tad-dan {
  background: #fff;
  border-radius: 0.1rem;
  padding: 0 0.28rem;
  margin-bottom: 0.3rem;
  position: relative;
}
.tad-dan .tad-p1 {
  font-size: 0.3rem;
  color: #333;
  padding-top: 0.3rem;
  margin: 0;
}
.tad-sj {
  display: flex;
  align-items: center;
}
.tad-sj p {
  margin: 0;
  margin-top: 0.2rem;
  font-size: 0.25rem;
}
.tad-tu {
  width: 6.34rem;
  height: 1.3rem;
}
.tad-tu div {
  display: flex;
  height: 100%;
  align-items: center;
  width: 1.54rem;
}
.tad-tu img {
  width: 0.54rem;
  height: 0.54rem;
  border-radius: 50%;
}
.tad-tu font{
    font-size: .24rem;
    color: rgba(0,0,0,.45);
    margin-left: 0.17rem;
    margin-right: .2rem;

}
.tad-ren {
  border-top: 1px solid #f5f5f5;
  height: 0.87rem;
  line-height: 0.87rem;
  display: flex;
  font-size: 0.25rem;
}
.tad-ren span {
  width: 5.4rem;
  padding-right: 0.2rem;
  color: rgba(0, 0, 0, 0.45);
}
.tad-ren font {
  color: #44a426;
  font-size: 0.35rem;
}
</style>
