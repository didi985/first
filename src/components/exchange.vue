<template>
    <div>
        <!-- 表头 -->
    <van-nav-bar title="学习卡兑换" left-text="" left-arrow @click-left="zqd_go()">
      <template #right>
      </template>
    </van-nav-bar>

    <van-field v-model="text" label="卡号:" placeholder="请输入学习卡号"/>
    <van-field v-model="password" type="password" label="密码:" placeholder="请输入学习卡密码"/>

    <button class="zqd_btn">立即兑换</button>


    </div>
</template>

<script>
export default {
    data() {
        return {
           text:'',
           password:'',
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
       zqd_go(){
          this.$router.go(-1)
       }
    }
};
</script>

<style scoped>
.zqd_btn{
   width: 6.9rem;
   height: 0.88rem;
   color: #fff;
   font-size: 0.2rem;
   background: #EB6100;
   border: 0;
   border-radius: 0.2rem;
   margin-left: 0.25rem;
   margin-top: 0.4rem;

}
</style>
