<template>
<div class="box">
    <header>
        <p></p>
        <div>设置密码</div>
        <span @click="$router.push('/info')">跳过</span>
    </header>
    <div>
        <input type="text" v-model="pwd" placeholder="请设置登录密码">
        <input type="text" v-model="pwd2"  placeholder="请再次输入密码">
    </div>
    <footer>
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="ok">
        确定
        </van-button>
    </footer>
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
       pwd:'',
       pwd2:'',
   }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
      ok(){
          this.$router.push('/info')
      }
  },
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
.box{
    padding: 0.2rem;
    >div{
        input{
            width: 100%;
            border: none;
            padding: 0.2rem;
            margin: 0.1rem 0;
            border-bottom: 0.01rem solid #b7b7b7;
        }
    }
}
header{
    height: 0.88rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    // text-align: center;
    >div{
        font-size: 0.4rem;
        // text-align: center;
    }
    >span{
        font-size: 0.18rem;
        color: #595959;
    }
}
footer{
    margin-top:4rem;
    text-align: center;
    .van-button{
        width: 90%;
        border-radius: 1rem;
    }
}
</style>
