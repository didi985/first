<template>
  <div>
    约课记录
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appFooter from "../components/Footer";


  export default {
    // 组件名称
    name: 'demo',
    // 组件参数 接收来自父组件的数据
    props: [],
    // 局部注册的组件
    components: {
      appFooter
     },
    // 组件状态值
    data() {
      return {
        active:3
      }

    },
    // 计算属性
    computed: {},
    // 侦听器
    watch: {},
    // 组件方法

<<<<<<< HEAD
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
  height: 100%;
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
      width: 1.9rem;
      height: 0.6rem;
      border-radius: .05rem;
      font-size: .16rem;
    }
=======
    methods: {},
    // 以下是生命周期钩子   注：没用到的钩子请自行删除
    /**
    * 在实例初始化之后，组件属性计算之前，如data属性等
    */
    beforeCreate() {
    },
    /**
    * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
    */
    created() {
    },
    mounted() {
    },
>>>>>>> f00db956289d7bceb366d5e39f973dd7e65114b2
  }
</script>

<style scoped>


</style>