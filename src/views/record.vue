<template>
  <div class="zb_box">
    <van-sticky>
      <header>
        <h3>约课记录</h3>
      </header>
    </van-sticky>
    <van-tabs
      v-model="active"
      line-width="0.2rem"
      line-height=".02rem"
      color="#eb6100"
    >
      <van-tab title="待上课">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div class="zb_empty">
            <img src="" alt="" />
            <p>还没有待上课记录哦</p>
            <van-button>立即约课</van-button>
          </div>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="已上课">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div class="zb_empty">
            <img src="" alt="" />
            <p>还没有上课记录哦</p>
            <van-button>立即约课</van-button>
          </div>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="已取消">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div class="zb_empty">
            <img src="" alt="" />
            <p>还没有取消上课记录哦</p>
          </div>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>

    <app-footer></app-footer>
  </div>
</template>

<script>
import appFooter from "../components/Footer";
import { Toast } from "vant";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: { appFooter },
  // 组件状态值
  data() {
    return {
      active: 0,
      isLoading: false,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
  },
  created() {},
  mounted() {},
};
</script> 

<style lang='scss' scoped>
.zb_box {
  height: 100%;
  background-color: #f0f2f5;
  header {
    height: .88rem;
    line-height: .88rem;
    background-color: #fff;
    text-align: center;
    font-size: 0.30rem;
    h3 {
      font-weight: 400;
      color: #595959;
    }
  }
  .van-tabs {
    height: 0.9rem;
    font-size: 0.25rem;
  }
  .zb_empty {
    text-align: center;
    font-size: 0.16rem;

    img {
      width: 1.98rem;
      height: 1.42rem;
      margin: 2rem auto 0.2rem;
    }
    p {
      color: rgb(183, 183, 183);
      margin-bottom: 0.5rem;
    }
    button {
      color: #fff;
      background: #eb6100;
      width: 1.8rem;
      height: 0.6rem;
      border-radius: inherit;
    }
  }
  .van-pull-refresh {
    user-select: none;
  }
}
</style>
