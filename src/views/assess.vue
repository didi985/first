<template>
  <div>
    <header>
      <div class="back" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <h3>测评记录</h3>
      <div class="right" @click="$router.push('/search')">
        <van-icon name="search" />
      </div>
    </header>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" title="类型不限" :options="option" />
      <van-dropdown-item
        v-model="value2"
        :options="time"
        title="时间"
      ></van-dropdown-item>
    </van-dropdown-menu>
    <div class="as_content">
      <div class="as_carditem">
        <div class="as_header">
          <h3>物理学史</h3>
          <p><span>0</span>/8</p>
        </div>
        <p><span>答题时长：0分41秒</span> <span>正确率：0%</span></p>
        <p><span>提交时间：2020-10-28 15:16:53</span></p>
        <div class="as_btn">
          <van-button round plain type="info" @click="$router.push('/ques')">查看解析</van-button>
          <van-button round plain type="info" @click="$router.push('/ques')">重新练习</van-button>
        </div>
      </div>
      <p>没有更多了</p>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      value1: 0,
      value2: 0,
      option: [
        { text: "全部", value: 0 },
        { text: "套卷练习", value: 1 },
        { text: "仿真模考", value: 2 },
        { text: "考点专练", value: 3 },
      ],
      time: [
        { text: "全部", value: 0 },
        { text: "今天", value: 1 },
        { text: "7天", value: 2 },
      ],
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {},
};
</script> 

<style lang="scss" scoped>
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
.van-cell__title {
  text-align: center;
}
.as_content {
  .as_carditem {
    width: 6rem;
    margin: 0.4rem auto 0;
    background: #fff;
    box-shadow: 0 0 0.21333rem 0 rgba(10, 0, 24, 0.08);
    border-radius: 0.13333rem;
    padding: 0.4rem;
    .as_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgb(140, 140, 140);
      h3 {
        font-weight: 400;
        font-size: 3.46667vw;
        color: #000;
      }
      p {
        span {
          color: #4a70ff;
        }
      }
    }
    p {
      font-size: 3.46667vw;

      line-height: 6.13333vw;
      span {
        color: rgb(140, 140, 140);
      }
    }
    .as_btn {
      padding: 0.2rem 0;
      display: flex;
      justify-content: flex-end;
      .van-button {
        width: 21vw;
        height: 7.46667vw;
        font-size: 0.24rem;
        margin-left: 2.26667vw;
        padding: 0;
      }
    }
  }
  > p {
    text-align: center;
    color: #969799;
    font-size: 3.2vw;
    line-height: 6.66667vw;
  }
}
</style>
