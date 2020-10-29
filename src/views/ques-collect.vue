<template>
  <div>
    <van-sticky>
      <header>
        <div class="back" @click="$router.go(-1)">
          <van-icon name="arrow-left" />
        </div>
        <h3>习题收藏</h3>
        <div class="right" @click="$router.push('/search')">
          <van-icon name="search" />
        </div>
      </header>
      <van-dropdown-menu>
        <van-dropdown-item
          v-model="value1"
          title="题目类型"
          :options="option1"
        />
        <van-dropdown-item />
      </van-dropdown-menu>
    </van-sticky>
    <div class="as_content">
      <div class="as_carditem">
        <p><span>[单选题]</span>关于碳及其氧化物的说法正确的是</p>
        <div class="as_btn">
          <van-button round plain type="warning" @click="$router.push('/ques')">查看详情</van-button>
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
      option1: [
        { text: "单选", value: 0 },
        { text: "多选", value: 1 },
        { text: "判断", value: 2 },
        { text: "连线", value: 3 },
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
.as_content {
  .as_carditem {
    width: 6rem;
    margin: 0.4rem auto 0;
    background: #fff;
    box-shadow: 0 0 0.21333rem 0 rgba(10, 0, 24, 0.08);
    border-radius: 0.13333rem;
    padding: 0.4rem;
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
    p {
      line-height: 5.33333vw;
      font-size: 0.28rem;
      color: #262626;
      span {
        color: #0097fa;
        padding: 0 0.05333rem;
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
