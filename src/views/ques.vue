<template>
  <div>
    <van-sticky>
      <header>
        <div class="back" @click="$router.go(-1)">
          <van-icon name="arrow-left" />
        </div>
        <div class="right">
          <div>
            <van-icon name="other-pay" size="0.4rem" />
          </div>
          <div>
            <van-icon name="star-o" size="0.4rem" />
          </div>
          <div>
            <van-icon name="todo-list-o" size="0.4rem" />
          </div>
        </div>
      </header>
    </van-sticky>
    <div class="zb_ques">
      <p>物理</p>
      <p><span>1</span> /8</p>
    </div>
    <div class="zb_qsbox">
      <div class="zb_qsboxitem">
        <div class="question">
          <span>多选</span>
          <p><span>1、</span>6． 下列叙述正确的是（ ）</p>
        </div>
        <ul>
          <li>
            <input type="checkbox" disabled />
            <p><span>A、</span>6． 下列叙述正确的是（ ）</p>
          </li>
          <li>
            <input type="checkbox" disabled />
            <p><span>B、</span>6． 下列叙述正确的是（ ）</p>
          </li>
          <li>
            <input type="checkbox" />
            <p><span>C、</span>6． 下列叙述正确的是（ ）</p>
          </li>
          <li>
            <input type="checkbox" disabled />
            <p><span>D、</span>6． 下列叙述正确的是（ ）</p>
          </li>
        </ul>
        <div class="btn">
          <van-button plain size="normal"  disabled>上一题</van-button>
          <van-button plain size="normal" >下一题</van-button>
        </div>
      </div>
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
      checked: true,
      currentPage: 1,
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
  .right {
    width: 2.4rem;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    display: flex;
    .van-icon {
      font-size: 0.3rem;
    }
  }
}
.zb_ques {
  display: flex;
  justify-content: space-between;
  font-size: 0.3rem;
  border-bottom: 1px solid #f0f2f5;
  border-top: 1px solid #f0f2f5;
  align-items: center;
  height: 0.65rem;
  color: #595959;
  padding: 0.1rem 0.3rem;
  > p > span {
    font-size: 0.53333rem;
    color: #0097fa;
  }
}
.zb_qsbox {
  .zb_qsboxitem {
    width: 100%;
    padding: 0.3rem 0.4rem 0;
    box-sizing: border-box;
    .question {
      width: 100%;
      font-size: 0.4rem;
      color: #333;
      display: flex;
      align-items: center;
      line-height: 0.62667rem;
      > span {
        display: inline-block;
        width: 1.06667rem;
        height: 0.46667rem;
        border-radius: 0.2rem 0 0.2rem 0;
        background-color: #0097fa;
        text-align: center;
        font-size: 0.29333rem;
        color: #fff;
        line-height: 0.46667rem;
        margin-right: 0.13333rem;
      }
      p {
        line-height: 150%;
        font-size: 12px;
        span {
          font-size: 0.4rem;
          color: #333;
        }
      }
    }
    ul {
      li {
        display: flex;
        align-items: center;
        height: 1.2rem;
        input {
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 0.2rem;
          margin-right: 0.25rem;
        }
        p {
          line-height: 150%;
          font-size: 0.12rem;
          span {
            font-size: 0.3rem;
            color: #333;
          }
        }
      }
    }
    .btn{
      height: 1.35rem;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      align-items: center;
      padding: 0 .3rem;
    }
  }
}
</style>
