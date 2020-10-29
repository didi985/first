<template>
<div class="tad-body">
     <!-- 粘性布局 -->
    <van-sticky>
   <div class="tad-sou">
        <van-icon name="arrow-left" @click="fan" size="0.4rem" />
        <span>李老师16号到22号地理大课...</span>
        <van-icon name="notes-o" size="0.4rem" />
      </div>
    </van-sticky>

    <!-- 中内容 -->
    <div class="tad-zhong">
        <span>共8课时</span>
            <div></div>
          <span>以学习0%</span>
    </div>

    <!-- 底内容 -->
    <div class="tad-di">
        <div class="tad-di1">
            <div class="k0">
              <div class="k1"></div>
                <span class="k2">[回放]</span>
              <span>第一次讲第一课时</span>
            </div>
          <p class="k3">
            <span>李青</span>
            <span>03月21日</span>
            <span>18:00-19:00</span>
          </p>
             <div class="tad-zhong1">
            <div></div>
          <span>以观看0%</span>
    </div>

        </div>
    </div>

     <div class="tad-di">
        <div class="tad-di1">
            <div class="k0">
              <div class="k1"></div>
                <span class="k2">[回放]</span>
              <span>第一次讲第一课时</span>
            </div>
          <p class="k3">
            <span>李青</span>
            <span>03月21日</span>
            <span>18:00-19:00</span>
          </p>
             <div class="tad-zhong1">
            <div></div>
          <span>以观看0%</span>
    </div>

        </div>
    </div>


     <div class="tad-di">
        <div class="tad-di1">
            <div class="k0">
              <div class="k1"></div>
                <span class="k2">[回放]</span>
              <span>第一次讲第一课时</span>
            </div>
          <p class="k3">
            <span>李青</span>
            <span>03月21日</span>
            <span>18:00-19:00</span>
          </p>
             <div class="tad-zhong1">
            <div></div>
          <span>以观看0%</span>
    </div>

        </div>
    </div>


    <!-- 弹出层 -->
  <van-popup v-model="show">
      <!-- <div class="xing">
          <span>星级：</span> -->

    <van-field name="rate"  label="星级：">
  <template #input>
    <van-rate v-model="rate" />
  </template>
</van-field>


      
      <div class="nei">
           <span>内容：</span>
           <textarea type="text"></textarea>
      </div>
      <div class="fabu">
          发布
      </div>
  </van-popup>


<!-- 尾部 -->
      <div class="tad-wei">
          <p @click="showPopup">
           <van-icon name="edit"  size="0.3rem" />
             <span>写评论</span>
              </p>
       <p @click="xiangqing">
<van-icon name="apps-o" size="0.3rem" />
<span>课程详情</span>
       </p>
        <p>
<van-icon name="delete" size="0.3rem" />
<span>移除列表</span>
       </p>
      </div>

</div>
</template>

<script>
export default {
  data () {
   return {
    //    遮罩层
        show: false,
         rate: 3,
   }
  },
  name: 'demo',
  props: {},
mounted () {},
  // 计算属性
  computed: {},
  watch: {},
  methods: {
      fan(){
          this.$router.go(-1)
      },

    //   详情路由
    xiangqing(){
        this.$router.push('/course-detail')
    },

    // 弹出层
      showPopup() {
      this.show = true;
    },
  },
}
</script> 

<style scoped lang="scss">
// 弹出层
.van-popup{
    width: 6rem;
    height: 3.7rem;
    padding: 0.8rem  0.6rem 0.4rem;
    border-radius: 0.2rem;
   .xing{
       width: 6.3rem;
       height: 0.6rem;
   }
   .nei{
        width: 6.1rem;
       height: 1.6rem;
       margin-top: 0.45rem;
       display: flex;
       justify-content: flex-start;
       textarea{
        width: 5rem;
       height: 1.37rem;
       padding: 0.1rem 0rem;
       border: 1px solid #D5D5D5;
       border-radius: 0.1rem;
       font-size: 0.3rem;
       }
   }
   .fabu{
           width: 1.76rem;
           height: 0.56rem;
           border-radius: 0.1rem;
           background-color: #EB6100;
           color: #fff;
           line-height: 0.56rem;
           text-align: center;
           margin-left: 2.27rem;
           margin-top: 0.5rem;
           font-size: 0.3rem;
       }
}


.tad-body{
    position: relative;
}
// 尾部
.tad-wei{
    position: fixed;
    background-color: #fff;
    left: 0;
    bottom: 0;
    width: 7.5rem;
    height: 0.75rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p{
        width: 2.5rem;
        height: 0.74rem;
      line-height: 0.74rem;
      text-align: center;
     
      span{
          margin-left: 0.1rem;
            font-size: 0.24rem;
      }
    }
}


.tad-sou {
  width: 100%;
  height: 0.95rem;
  border-bottom: 1px solid #eaeaea;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tad-sou .van-icon {
  font-size: 0.28rem;
  color: #595959;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
}
.tad-sou span {
  font-size: 0.37rem;
  color: #595959;
  width: 6rem;
  padding-left: 0.5rem;
}
.tad-zhong{
    display: flex;
    justify-content: space-around;
    width: 7.5rem;
    height: 0.915rem;
    align-items: center;
     border-bottom: 1px solid #eaeaea;
    div{
        width: 3.65rem;
        height: 0.07rem;
        background-color: #F5F5F5;
    }
    span{
        font-size: 0.3rem;
    }
}
.tad-zhong1{
    display: flex;
    justify-content: space-around;
    width: 6.22rem;
    height: 0.24rem;
    align-items: center;
    div{
        width: 4.4rem;
        height: 0.07rem;
        background-color: #F5F5F5;
        margin-right: 0.5rem;
    }
    span{
        font-size: 0.24rem;
    }
}




.tad-di{
    .tad-di1{
        width: 6.26rem;
        height: 1.69rem;
        border: 0.03rem solid #E9E9E9;
        padding: 0.3rem;
        margin: 0.3rem; 
    }
}

  .k0 {
    width: 6.2rem;
    height: 0.6rem;
    display: flex;
    justify-content: flex-start;
  }
  .k1 {
    width: 0.15rem;
    height: 0.15rem;
    border-radius: 50%;
    background-color: #eb6100;
    margin-top: 0.17rem;
    margin-right: 0.2rem;
  }
  .k2 {
    color: #eb6100;
    padding: 0 0.1rem;
    font-size: 0.3rem;
    margin-right: 0.2rem;
  }
  span {
    font-size: 0.3rem;
    color: #595959;
  }
  .k3 {
    width: 5.97rem;
    margin: 0;
    margin-left: 0.5rem;
    margin-bottom: 0.1rem;
  }


</style>
