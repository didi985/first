<template>
    <div>
       <!-- 头部样式 -->
      <van-nav-bar title="个人信息" left-text="" left-arrow @click-left="zqd_go()">
         <template #right>
           <!-- <van-icon name="search" size="18" /> -->
         </template>
       </van-nav-bar>

    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      zqd_go(){
         this.$router.push('/person')
      }
    }
};
</script>

<style scoped>

</style>
