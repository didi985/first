<template>
  <div class="xiangqing">
    <!-- 粘性布局 -->
    <van-sticky>
      <!-- 头部 -->
      <div class="tad-sou" v-show="fll">
        <van-icon name="arrow-left" @click="fan" size="0.4rem" />
        <span>课程详情</span>
        <van-icon name="cluster-o" size="0.4rem" />
      </div>

      <div class="tad-sou" v-show="flog">
        <van-icon name="arrow-left" @click="fan" size="0.4rem" />
        
        <a class="san" @click="jie" href="#box1">课程介绍</a>
        <span class="san" @click="da">课程大纲</span>
        <span class="san" @click="ping">课程评价</span>
        <van-icon name="cluster-o" size="0.4rem" />
      </div>
    </van-sticky>

    <div class="tad-box">
      <!-- 内容 -->
      <div class="tad-dan">
        <div>
          <p class="tad-p1" >{{list.title}}</p>
        <p class="tad-p2">
           <font v-if="list.price==0">免费</font>
              <font v-if="list.price!=0" class="fk">
                <img src="../../public/img/a1f37d1be616ee3adf3baa7bb806bea3_03.jpg" alt="">
                {{list.price/100+'.00'}}</font>
        </p>
        <p class="tad-p3">共{{list.course_type}}课时|{{list.browse_num}}人已报名</p>
        <p class="tad-p3">开课时间：{{list.end_play_date | timetow}} - {{list.enter_end_date | timetow}}</p>
        </div>
      </div>

      <!-- 教学团队 -->
      <div class="tad-tu">
        <p>教学团队</p>
        <ul>
          <li>
            <img :src="list.cover_img" alt />
            <font>李青</font>
          </li>
        </ul>
      </div>

      <!-- 课程介绍 -->
      <div class="tad-tu1" id="box1">
        <p>课程介绍</p>
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
              <img src="../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png" alt />
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
              <img src="../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png" alt />
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
              <img src="../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png" alt />
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
              <img src="../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png" alt />
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
              <img src="../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png" alt />
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
              <img src="../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png" alt />
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
              <img src="../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png" alt />
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

    <div class="tad-bt" @click="xuexi">立即学习</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      //  页面滚动
      top: "",
      flog: false,
      fll: true,

      // 基本数据
      list:[]
    };
  },
  name: "demo",
  props: {},
  mounted() {
    this.fun()
    window.addEventListener("scroll", this.scrollHandle); // 绑定页面的滚动事
  },
  // 计算属性
  computed: {},
  watch: {},
  methods: {
    // 获取数据
    async fun(){
      let { data } = await this.$http.get(`/api/app/courseInfo/basis_id=${this.$route.query.id}`)
      this.list = data.data.info
      console.log(this.list)
    },


    // 返回路由
    fan() {
      this.$router.go(-1);
    },

    scrollHandle: function(e) {
      this.top = e.srcElement.scrollingElement.scrollTop; // 获取页面滚动高度
      if (this.top > 0) {
        this.flog = true;
        this.fll = false;
      } else {
        this.flog = false;
        this.fll = true;
      }
    },

    jie() {
      document.body.scrollTop = document.documentElement.scrollTop = 650;
    },
    da() {
      document.body.scrollTop = document.documentElement.scrollTop = 800;
    },
    ping() {
      document.body.scrollTop = document.documentElement.scrollTop = 1270;
    },

    // 学习页面跳转
    xuexi(){
      this.$router.push('/study-detail')
    }

  }
};
</script> 

<style scoped lang="scss">
.xiangqing {
  position: relative;
}
.tad-bt {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 7.5rem;
  height: 0.78rem;
  background-color: #eb6100;
  line-height: 0.78rem;
  text-align: center;
  color: #fff;
  font-size: 0.3rem;
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
  padding-left: 2.2rem;
}
.tad-sou .san {
  font-size: 0.3rem;
  color: #595959;
  width: 2rem;
  padding-left: 0.3rem;
}

.tad-box {
  background-color: #f0f2f5;
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
  height: 0.6rem;
  line-height: 0.6rem;
}
.tad-p2 {
  color: #eb6100;
  font-size: 0.35rem;
  margin: 0;
  height: 0.6rem;
  line-height: 0.6rem;
}
.tad-p2 .fk {
  color: #EE1F1F;
  font-size: 0.3rem;
}
.tad-p3 {
  color: #8c8c8c;
  font-size: 0.3rem;
  margin: 0;
  height: 0.6rem;
  line-height: 0.6rem;
}

.tad-tu {
  height: 2.89rem;
  background-color: #fff;
  padding: 0.1rem 0.2rem;
}
.tad-tu p {
  width: 7.1rem;
  height: 0.5rem;
  margin: 0;
  margin-top: 0.2rem;
  font-size: 0.3rem;
}
.tad-tu1 {
  width: 7.1rem;
  height: 1.1rem;
  background-color: #fff;
  padding: 0.1rem 0.2rem;
  margin-top: 0.3rem;
}
.tad-tu1 p {
  width: 7.1rem;
  height: 0.5rem;
  margin: 0;
  margin-top: 0.2rem;
  font-size: 0.3rem;
}
.tad-tu ul {
  width: 7.1rem;
  height: 2.2rem;
  padding: 0.15rem 0;
  display: flex;
  flex-wrap: wrap;
}
.tad-tu li {
  width: 1.42rem;
  height: 1.8rem;
  padding: 0.15rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
}
.tad-tu img {
  width: 0.78rem;
  height: 0.78rem;
  border-radius: 50%;
}
.tad-tu font {
  font-size: 0.24rem;
  color: rgba(0, 0, 0, 0.45);
  padding: 0.06rem 0.16rem;
  color: #595959;
}

.tad-tu2 {
  margin-top: 0.3rem;
  background: #fff;
  padding: 0.1rem 0.2rem;
  ul {
    width: 7.07rem;
    li {
      width: 6.67rem;
      height: 0.86rem;
      padding: 0.2rem;
      div {
        display: flex;
        justify-content: start;
        img {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
        }
        div {
          margin-left: 0.2rem;
          width: 6.17rem;
          height: 0.86rem;
          display: flex;
          flex-wrap: wrap;
          // flex-direction: row-reverse;
          justify-content: start;
          div {
            width: 6.17rem;
            height: 0.3rem;
          }
        }
      }
    }
  }
  .k00 {
    width: 6.5rem;
    padding: 0.3rem;
    padding-bottom: 0.2rem;
  }
  .k0 {
    width: 6.5rem;
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
    width: 0.6rem;
    height: 0.5rem;
    background-color: #eb6100;
    color: #eaeaea;
    padding: 0 0.1rem;
    border-radius: 0.05rem;
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
}
.tad-tu2 p {
  width: 7.1rem;
  height: 0.5rem;
  margin: 0;
  margin-top: 0.2rem;
  font-size: 0.3rem;
}
//  <!-- 课程评论 -->
</style>
