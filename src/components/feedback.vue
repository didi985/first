<template>
    <div>
       <!-- 表头 -->
    <van-nav-bar title="意见反馈" left-text="" left-arrow @click-left="zqd_go()">
      <template #right>
        <!-- <span class="zqd_sp1">学习卡兑换</span> -->
      </template>
    </van-nav-bar>

    <!-- 文本域 -->
    <textarea name="" id="" cols="40" rows="10" class="zqd_txt"></textarea>

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

    }
};
</script>

<style scoped>
.zqd_txt{
   margin-left: 0.75rem;
}
</style>
