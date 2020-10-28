<template>
  <div class="zb_oto">
    <van-sticky>
      <header>
        <div class="back" @click="$router.go(-1)">
          <van-icon name="arrow-left" />
        </div>
        <h3>一对一辅导</h3>
        <div class="right" @click="$router.push('/search')"><van-icon name="search" /></div>
      </header>
    </van-sticky>
    <!-- 下拉菜单 -->
    <van-dropdown-menu class="menu">
      <van-dropdown-item title="选择上课时间"> </van-dropdown-item>
      <van-dropdown-item title="选择老师条件">
        <!-- <div class="teacher">12345678</div> -->
      </van-dropdown-item>
    </van-dropdown-menu>
    <!-- 列表展示 -->
    <div>
      <div class="zb_otItem" @click="$router.push('/oto-plan')">
        <van-image
          round
          width=".8rem"
          height=".8rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div>
          <p><span>杨德胜</span></p>
          <p>男 30年教龄</p>
        </div>
        <div class="yuyue">预约</div>
      </div>
      <div class="zb_otItem">
        <van-image
          round
          width=".8rem"
          height=".8rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div>
          <p><span>杨德胜</span></p>
          <p>男 30年教龄</p>
        </div>
        <div class="yuyue">预约</div>
      </div>
      <div class="zb_otItem">
        <van-image
          round
          width=".8rem"
          height=".8rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div>
          <p><span>杨德胜</span></p>
          <p>男 30年教龄</p>
        </div>
        <div class="yuyue">预约</div>
      </div>
      <div class="zb_otItem">
        <van-image
          round
          width=".8rem"
          height=".8rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div>
          <p><span>杨德胜</span></p>
          <p>男 30年教龄</p>
        </div>
        <div class="yuyue">预约</div>
      </div>
      <div class="zb_otItem">
        <van-image
          round
          width=".8rem"
          height=".8rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div>
          <p><span>杨德胜</span></p>
          <p>男 30年教龄</p>
        </div>
        <div class="yuyue">预约</div>
      </div>
      <div class="zb_otItem">
        <van-image
          round
          width=".8rem"
          height=".8rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div>
          <p><span>杨德胜</span></p>
          <p>男 30年教龄</p>
        </div>
        <div class="yuyue">预约</div>
      </div>
      <div class="zb_otItem">
        <van-image
          round
          width=".8rem"
          height=".8rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div>
          <p><span>杨德胜</span></p>
          <p>男 30年教龄</p>
        </div>
        <div class="yuyue">预约</div>
      </div>
      <div class="zb_otItem">
        <van-image
          round
          width=".8rem"
          height=".8rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div>
          <p><span>杨德胜</span></p>
          <p>男 30年教龄</p>
        </div>
        <div class="yuyue">预约</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
  created() {},
  mounted() {},
};
</script> 

<style lang="scss" scoped>
.zb_oto {
  height: 100%;
  background-color: #f0f2f5;
  header {
    height: 0.88rem;
    line-height: 0.88rem;
    background-color: #fff;
    text-align: center;
    font-size: 0.3rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;
    align-items: center;
    h3 {
      font-weight: 400;
      color: #595959;
    }
    .van-icon {
      font-size: 0.3rem;
    }
  }
  //   列表样式
  .zb_otItem {
    width: 95%;
    height: 1.62rem;
    margin: 0.1rem auto;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 0.1rem;
    div {
      width: 4rem;
      p {
        color: #b7b7b7;
        font-size: 0.32rem;
        span {
          font-size: 0.33rem;
          color: #595959;
        }
      }
    }
    .yuyue {
      width: 1.4rem;
      height: 0.62rem;
      line-height: 0.62rem;
      background: #ebeefe;
      border-radius: 0.6rem;
      font-size: 0.3rem;
      font-weight: 400;
      color: #eb6100;
      border: none;
      text-align: center;
    }
  }
  //   下拉菜单
  .van-dropdown-menu {
    font-size: 0.3rem !important;
    .teacher {
      min-height: 12rem;
      background: #fff;
      border-top: 1px solid #f1f1f1;
    }
    
  }
}
</style>
