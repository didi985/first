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
  }
</script>

<style scoped>


</style>