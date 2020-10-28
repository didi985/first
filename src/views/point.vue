<template>
<div>
        <van-nav-bar
        title="题库选择"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
        />
        <div>

            <van-search
            v-model="value"
            shape="round"
            right-icon="search" 
            left-icon=""
            placeholder="请输入题库名称关键词"
            />
        </div>
        <van-tree-select :items="items" :main-active-index.sync="active">
        <template #content>
            <div v-if="active === 0">
            洛必达法则
            </div>
            <div v-if="active === 1">
            两个重要
            </div>
        </template>
        </van-tree-select>
</div>
</template>

<script>
export default {
  // 组件名称
  name: 'demo',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data () {
   return {
       value:'',
       active: 0,
       items: [
           { text: '求导题库' },
           { text: '极限题库' },
           { text: '生物' },
           { text: '化学' },
           { text: '数学' },
           { text: '物理' },
           { text: '英语' },
        ],
   }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    onClickLeft() {
    this.$router.back()
    },

  },
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.van-search{
    padding: 0.2rem 0.15rem 0.3rem 0.15rem;
    /* border-bottom: 0.01rem solid red; */
}
</style>
