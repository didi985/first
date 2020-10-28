<template>
<div>
     <!-- 粘性布局 -->
    <van-sticky>
    <!-- 头部 -->
 <div class="tad-sou">
 <van-icon name="arrow-left" @click="fan" size="0.4rem"/>
            <span>课程详情</span>
            <van-icon name="cluster-o" size="0.4rem"/>
    </div>
  </van-sticky>


    <div class="tad-box">
        <!-- 内容 -->
       <div class="tad-dan">
            <p class="tad-p1">李老师女神节地理大讲堂开课了！</p>
    
            <p class="tad-p2">
                 <font >免费</font>
            </p>
           <p class="tad-p3">
                共三课时|67人已报名
           </p>
             <p class="tad-p3">
                开课时间：2020.03.08 08:30 - 2020.03.08 10:30
           </p>
        </div>

        <!-- 教学团队 -->
         <div class="tad-tu">
             <p>教学团队</p>
             <ul>
                 <li>
                     <img src='../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png' alt="">
                     <font>李青</font>
                 </li>
                
             </ul>
            </div>

        <!-- 课程介绍 -->
             <div class="tad-tu1">
             <p>教学团队</p>
            </div>

            <!-- 课程大纲 -->
            <div class="tad-tu2">
             <p>课程大纲</p>
             <div>
             <div class="k00">
             <div class="k0">
               <div class="k1"></div>
               <div class="k2">回放</div>
               <span>第一次讲第一课时</span>
             </div>
             </div>
             <p class="k3">
               <span>李青</span>
               <span>03月21日</span>
               <span>18:00-19:00</span>
             </p>
              </div>


                 <div>
             <div class="k00">
             <div class="k0">
               <div class="k1"></div>
               <div class="k2">回放</div>
               <span>第一次讲第一课时</span>
             </div>
             </div>
             <p class="k3">
               <span>李青</span>
               <span>03月21日</span>
               <span>18:00-19:00</span>
             </p>
              </div>
            </div>


            <!-- 课程评论 -->
            <div class="tad-tu2">
             <p>课程评论</p>
             <ul>
               <li>
                 <div>
                   <img src="../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png" alt="">
                  <div>
                    <div>
                      <span>15551635763</span>
                      <span>
                        <van-icon name="star" />
                      <van-icon name="star" />
                      <van-icon name="star" />
                      <van-icon name="star" />
                      </span>
                      <span>2020-12-11 14:54</span>
                      </div>
                      <!-- <p>风格的</p> -->
                      <div>
                         <span>内容</span>
                      </div>
               
                  </div>
                 </div>
               </li>
             </ul>


              <ul>
               <li>
                 <div>
                   <img src="../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png" alt="">
                  <div>
                    <div>
                      <span>15551635763</span>
                      <span>
                        <van-icon name="star" />
                      <van-icon name="star" />
                      <van-icon name="star" />
                      <van-icon name="star" />
                      </span>
                      <span>2020-12-11 14:54</span>
                      </div>
                      <!-- <p>风格的</p> -->
                      <div>
                         <span>内容</span>
                      </div>
               
                  </div>
                 </div>
               </li>
             </ul>
             </div>

</div>
</div>
</template>

<script>
export default {
  data () {
   return {}
  },
  name: 'demo',
  props: {},
mounted () {},
  // 计算属性
  computed: {},
  watch: {},
  methods: {
      fan(){
          this.$router.push('/Course')
      }
  },
}
</script> 

<style scoped lang="scss">
.tad-sou{
    width: 100%;
    height: 0.95rem;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tad-sou .van-icon{
    font-size: 0.28rem;
    color: #595959;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
}
.tad-sou span{
font-size: 0.37rem;
    color: #595959;
    width: 6rem;
    padding-left: 2.2rem;
}

.tad-box{
    background-color: #F0F2F5
}



.tad-dan{
    background: #fff;
    border-radius: .1rem;
    padding: 0 0.28rem;
    margin-bottom: .3rem;
    position: relative;
}
.tad-dan .tad-p1{
    font-size: 0.3rem;
    color: #333;
    padding-top: 0.3rem;
    margin: 0;
     height: 0.6rem;
  line-height: 0.6rem;
}
.tad-p2{
  color: #EB6100;
  font-size: .35rem;
  margin: 0;
  height: 0.6rem;
  line-height: 0.6rem;
}
.tad-p3{
     color: #8C8C8C;
  font-size: .3rem;
  margin: 0;
  height: 0.6rem;
  line-height: 0.6rem;
}



.tad-tu{
  height: 2.89rem;
  background-color: #fff;
  padding: 0.1rem 0.2rem;
}
.tad-tu p{
    width: 7.1rem;
    height: 0.5rem;
    margin: 0;
    margin-top: 0.2rem;
    font-size: 0.3rem;
}
.tad-tu1{
    width: 7.1rem;
  height: 1.1rem;
  background-color: #fff;
  padding: 0.1rem 0.2rem;
  margin-top: 0.3rem;
}
.tad-tu1 p{
    width: 7.1rem;
    height: 0.5rem;
    margin: 0;
    margin-top: 0.2rem;
    font-size: 0.3rem;
}
.tad-tu ul{ 
    width: 7.1rem;
  height: 2.2rem;
  padding: 0.15rem 0;
      display: flex;
    flex-wrap: wrap;
}
.tad-tu li{
    width: 1.42rem;
    height: 1.8rem;
    padding: 0.15rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
}
.tad-tu img{
  width: 0.78rem;
  height: 0.78rem;
  border-radius: 50%;
}
.tad-tu font{
    font-size: .24rem;
    color: rgba(0,0,0,.45);
    padding: 0.06rem 0.16rem;
    color: #595959;
}


.tad-tu2{
    margin-top: .3rem;
    background: #fff;
    padding: .1rem .2rem;
    ul{
      width: 7.07rem;
      li{
        width: 6.67rem;
        height: 0.86rem;
        padding: 0.2rem;
        div{
          display: flex;
          justify-content: start;
          img{
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
          }
          div{
            margin-left: 0.2rem;
            width: 6.17rem;
            height: 0.86rem;
            display: flex;
            flex-wrap: wrap;
            // flex-direction: row-reverse;
           justify-content: start;
         div{
           width: 6.17rem;
           height: 0.3rem;
         }
          }
        }
      }
    }
    .k00{
      width: 6.5rem;
      padding: 0.3rem;
      padding-bottom: 0.2rem;
    }
    .k0{
       width: 6.5rem;
      height: 0.6rem;
      display: flex;
      justify-content: flex-start;
    }
    .k1{
      width: 0.15rem;
      height: 0.15rem;
      border-radius: 50%;
      background-color: #EB6100;
      margin-top: 0.17rem;
      margin-right: 0.2rem;
    }
    .k2{
        width: 0.6rem;
      height: 0.5rem;
      background-color: #EB6100;
      color: #eaeaea;
      padding: 0  0.1rem;
      border-radius: 0.05rem;
      font-size: 0.3rem;
      margin-right: 0.2rem;
    }
    span{
      font-size: 0.3rem;
      color: #595959;
    }
    .k3{
      width: 5.97rem;
      margin: 0;
      margin-left: 0.5rem;
      margin-bottom: 0.1rem;
    }
}
.tad-tu2 p{
    width: 7.1rem;
    height: 0.5rem;
    margin: 0;
    margin-top: 0.2rem;
    font-size: 0.3rem;
}
//  <!-- 课程评论 -->
</style>
