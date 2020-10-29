<template>
<div>
    <header>
        <van-nav-bar title="错题记录" left-text="" left-arrow   @click-left="onClickLeft" @click-right="onClickRight">
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
    </header>
    <van-dropdown-menu>
        <van-dropdown-item title="类型不限" v-model="value1" :options="option1" />
        <van-dropdown-item disabled title="" @click="dian"/> 
        <van-dropdown-item disabled title="" />
        <div class="cxy_top">
            <van-icon @click="$router.push('/error-list')" name="notes-o">巩固错题 </van-icon>
            <!-- <p>巩固错题</p> -->
            <van-icon  @click="Dialog()" name="todo-list-o">移出错题 </van-icon>

            <!-- <p @click="Dialog()">移除错题</p> -->
        </div>
    </van-dropdown-menu>
    <div class="cen" v-show="flag">
        <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="">
        <p>请稍候，套卷正在赶来的路上啦</p>
    </div>
    <el-card v-show="!flag">
        <div class="cxy_one"><p>物理学史</p><span>7道错题</span></div>
        <div class="cxy_two"><p>提交时间：2020/10/28 15:16:53</p></div>
        <div class="cxy_three"><van-button color="#7232dd" round plain size="small" @click="$router.push('/error-list')">巩固错题</van-button></div>   
    </el-card>
    <p class="mei">没有更多了</p>
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
       flag:false,
            value1: 0,
            option1: [
                { text: '全部', value: 0 },
                { text: '考卷练习', value: 1 },
                { text: '考点专练', value: 2 },
                { text: '仿真模考', value: 2 },
            ]
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
        this.$router.push('/search')
    },
      onConfirm() {
      this.$refs.item.toggle();
    },
    dian(){
        console.log(1111)
       
    },
    Dialog(){
       this.$dialog.confirm({
        message: '是否做对题目后自动移出该错题',
        })
        .then(() => {
            // on confirm
        })
        .catch(() => {
            // on cancel
        });
    }
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
.van-dropdown-menu{
    position: relative;
    .cxy_top{
        position: absolute;
        top: 0rem;
        bottom: 0;
        right: 0;
        display: flex;
        font-size: 0.26rem;
        width: 60%;
        justify-content: space-around;
        align-items: center;
}
}
.el-card{
    padding: 0.2rem;
    margin: 0.2rem;
    div{
        margin-bottom: 0.2rem;
    }
    .cxy_one{
        display: flex;
        justify-content: space-between;
        p{
            font-size: 0.28rem;            
        }
        span{
            font-size: 0.24rem;
            color: #4a70ff;
        }
    }
    .cxy_two{
        font-size: 0.22rem;
        color: #8c8c8c;
    }
    .cxy_three{
        text-align: right;
        width: 100%;
    }
}
.mei{
    text-align: center;
    color: #969799;

}
</style>
