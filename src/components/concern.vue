<template>
    <div>
       <!-- 表头 -->
       <van-nav-bar title="我的关注" left-text="" left-arrow @click-left="zqd_go()">
         <template #right>
            <!-- <span class="zqd_sp">余额明细</span> -->
         </template>
      </van-nav-bar>
      暂无关注
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
         this.$router.go(-1)
      }
    }
};
</script>

<style scoped>
/* 1111 */
</style>
