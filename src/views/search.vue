<template>
  <div>
    <header>
      <div class="back" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <input type="text" v-model="value" />
      <span v-show="!value"  @click="$router.go(-1)"> 取消 </span>
      <span v-show="value"> 搜索 </span>
    </header>
    <div class="his" v-show="!value">
      <h3>历史记录 <van-icon name="delete" /></h3>
      <div>
        <span>123</span>
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
      value: "",
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
  height: 0.95rem;
  line-height: 0.95rem;
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
  input {
    width: 5rem;
    height: 0.62rem;
    font-size: 0.3rem;
    padding-left: 0.2rem;
    padding-left: 0.74667rem;
    border: none;
    background: #e4e7ed;
    border-radius: 0.4rem;
    font-size: 0.4rem;
  }
}
.his {
  width: 90%;
  margin: 0.2rem auto;
  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .8rem;
    font-size: 0.3rem;
    .van-icon {
      font-size: 0.24rem;
    }
  }
  div {
    span {
      margin: 0.26667rem 0.18667rem 0 0.18667rem;
      padding: 0.12rem 0.26667rem;
      border-radius: 0.26667rem;
      background: #f7f7f7;
      font-size: 0.3rem;
      color: #333;
    }
  }
}
</style>
