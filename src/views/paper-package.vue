<template>
<div>
    <header>
        <van-nav-bar title="套卷练习" left-text="" left-arrow   @click-left="onClickLeft" @click-right="onClickRight">
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
    </header>
    <van-dropdown-menu>
    <van-dropdown-item v-model="value1" title="套卷分类">
  <van-tree-select :items="items" :main-active-index.sync="active">
            <template #content>
                <div v-if="active === 0">

                </div>
                <div v-if="active === 1">
                   数学 
                </div>
                <div v-if="active === 2">
                    初三化学
                </div>
                <div v-if="active === 3">
                    小学英语
                </div>
            </template>
            </van-tree-select>    
    </van-dropdown-item>
    <van-dropdown-item title="套卷状态" v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <div class="cen">
        <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="">
        <p>请稍候，套卷正在赶来的路上啦</p>
    </div>
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
            value1: 0,
            value2: 'a',
            active:0,
            items: [
                { text: '全部', value: 0 },
                { text: '中考真题', value: 1 },
                { text: '化学', value: 2 },
                { text: '英语', value: 3 },
            ],
            option2: [
                { text: '全部', value: 'a' },
                { text: '已做', value: 'b' },
                { text: '未做', value: 'c' },
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
    onClickRight() {
    //   Toast('按钮');
    },
      onConfirm() {
      this.$refs.item.toggle();
    },
  },
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
.cen{
    text-align: center;
    img{
        width: 3rem;
        height: 3rem;
    }
}
</style>
