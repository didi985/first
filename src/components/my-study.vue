<template>
    <div>
            <!-- 表头 -->
         <van-nav-bar title="我的学习" left-text="" left-arrow @click-left="zqd_go()">
            <template #right>
              <!-- <van-icon name="search" size="18" /> -->
              <van-icon name="apps-o" />
            </template>
          </van-nav-bar>
          <!--  -->
          <van-tabs>
            <van-tab v-for="(item,index) in zqd_arr" :title="item+'(0)'" :key="index">

              <!-- 内容 {{ index }} -->
              您还没有订课程
            </van-tab>
          </van-tabs>

    </div>
</template>

<script>
export default {
    data() {
        return {
            zqd_arr:[
               '直播课',
               '点播课',
               '音频课',
               '图文课',
               '面授课',
               '会员课',
            ]
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
    },
    components: {
    }
};
</script>

<style scoped>

</style>
