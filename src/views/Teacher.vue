<template>
<div class="cxy_box">
    <header>
        <p>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC" alt="">

        </p>
        <p>讲师详情</p>
    </header>
    <div class="cxy_base">
        <div>
           <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt=""> 
           <div>
               <p></p>
           </div>
           <div>
               <van-button round type="info">关注</van-button>
           </div>
        </div>
        

    
    </div>
    <div class="cxy_nav">
        <van-tabs v-model="activeName" title-active-color='#eb6100'>
            <van-tab title="讲师介绍" name="a">
                <ul>
                    <li>
                        <p>教学年龄</p>
                        <p>30年</p>
                    </li>
                    <li>
                        <p>授课价格</p>
                        <p>400学习币    </p>
                    </li>
                    <li>
                        <p>老师简介</p>
                        <p>　杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。

　　特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。</p>
                    </li>
                </ul>
            </van-tab>
            <van-tab title="主讲课程" name="b">
                <el-card>

                </el-card>
            </van-tab>
            <van-tab title="学院评价" name="c">
                <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="">
            </van-tab>
        </van-tabs>
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
        activeName: 'a',
   }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
.cxy_box{
    background: #f0f2f5;
}
header{
    background: linear-gradient(180deg,#63b7fe,#4e7de3);
    color: #fff;
    display: flex;
    height: 2rem;
:nth-child(2){
    width: 6.3rem;
    text-align: center;
    padding: 0;
}
    img{
        height: 0.32rem;
        width: 0.18rem;
    }

    p{
        height: 0.88rem;
        line-height: 0.88rem;
        padding-left: 0.4rem;
        font-size: 0.4rem;

    }
}
.cxy_base{
    // padding: 0.2rem 0.4rem;
    height: 0.9rem;
    width: 7.5rem;
    display: flex;
    justify-content: center;
    position: relative;
    >div{
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        height: 1.8rem;
        width: 7.1rem;
        border-radius: 0.15rem;
        position: absolute;
        top: -1.15rem;
        padding: 0 0.2rem;
        box-sizing:border-box;
        align-items: center;
       img{
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
    }
    .van-button{
        padding: 0.08rem 0.35rem;
         color: #eb6100;
         background: #ebeefe;
         border: 0;
    }
 }
}
.van-tabs{
    background-color: #fff;
}
.van-tab{
    height: 0.9rem;
    border-bottom: 0.01rem solid red;
    img{
        width: 3rem;
        height: 3rem;
    }
}
.el-card{
        background: #fff;
    border-radius: .13333rem;
    border-radius: 1.33333vw;
    padding: 0 .37333rem;
    padding: 0 3.73333vw;
    margin-bottom: .4rem;
    margin-bottom: 4vw;
    position: relative;
}
</style>

