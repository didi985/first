<template>
<div>
    <div class="tad-sou">
            <van-icon name="arrow-left" size="0.48rem" @click="fan"/>
               <input type="text" class="tad-i" placeholder="请输入内容" @input="chufa">
            <span @click="fan" v-show="flog">取消</span>
            <span v-show="flog2" style="color='#000'">搜索</span>
    </div>
    <div class="tad-lishi" v-show="flog">
        <p class="tad-lishi1">
            <span>历史搜索</span>
          <van-icon name="delete" size="0.4rem"/>
        </p>    
        <div class="tad-jilu">
           <span>你看</span>
        </div>
    </div>

</div>
</template>

<script>
export default {
  data () {
   return {
         value: '',
         flog:true,
         flog2:false
   }
  },
  name: 'demo',
  props: {},
mounted () {},
  // 计算属性
  computed: {},
  watch: {},
  methods: {
    //   路由返回
    fan(){
          this.$router.go(-1)
    },

    //   输入时发生
    chufa(){
        this.flog=false
        this.flog2=true
    }
  },
}
</script> 

<style scoped>
.tad-sou{
    width: 100%;
    height: 0.95rem;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tad-sou span{
    font-size: 0.28rem;
    color: #D2D2D1;
    float: right;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
}
.tad-i{
    width: 4.9rem;
    height: 0.62rem;
    background-color: #E4E7ED;
    border: none;
    outline: none;
    border-radius: 0.8rem;
    padding-left: 0.56rem;
    font-size: 0.3rem;
    margin-left: 0.1rem;
}
.tad-lishi{
    width: 6.82rem;
    height: 1.04rem;
    margin: 0.24rem;
}
.tad-lishi1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0;
}
.tad-lishi1 span{
    font-size: 0.3rem;
    color: #333;
    font-weight: 700;
}
.tad-jilu{
      display: flex;
    flex-wrap: wrap;
    justify-content: left;
}
.tad-jilu span{
    margin-left: 0.14rem;
    margin-right: 0.14rem;
    margin-top: 0.2rem;
    padding: 0.2rem 0.12rem;
    border-radius: .15rem;
    background: #f7f7f7;
    font-size: .25rem;
    color: #333;
}
</style>
