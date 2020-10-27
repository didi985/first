<template>
  <div> 
    <van-tabbar v-model="active" @change='act' active-color="rgb(235, 97, 0)" inactive-color="#000">
      <van-tabbar-item to="/index" icon="home-o" >首页</van-tabbar-item>
      <van-tabbar-item to="/course" icon="search">课程</van-tabbar-item>
      <van-tabbar-item to="/record" icon="friends-o">约课记录</van-tabbar-item>
      <van-tabbar-item to="/practise" icon="setting-o">练习</van-tabbar-item>
      <van-tabbar-item to="/person" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
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
      active:0,
    
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    //   底部切换
    act() {
      console.log(this.active);
      //   保存本地

      sessionStorage.setItem("active", this.active);

    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
</style>
