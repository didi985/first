<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="找回密码" left-text="" left-arrow @click-left="zqd_go()">
      <template #right>
        <!-- <span class="zqd_sp1">学习卡兑换</span> -->
      </template>
    </van-nav-bar>
    <!-- 手机号 -->
    <van-field v-model="zqd_gai.mobile" center clearable label="" placeholder="请输入手机号">
      <template #button>
        <van-button size="small" type="primary" @click="zqd_fa">发送验证码</van-button>
      </template>
    </van-field>
    <!-- 输入验证码 -->
    <van-field v-model="zqd_gai.sms_code" type="tel" label="" placeholder="请输入验证码" />
    <!-- 输入密码 -->
    <van-field v-model="zqd_gai.password" type="tel" label="" placeholder="请输入密码" />

    <van-button type="primary" id="zqd" @click="zqd_duanxindeng">确定</van-button>
  </div>
</template>

<script>
import { posts } from '@/util/api';

export default {
  data() {
    return {
      zqd_gai:{
         mobile:'',
         password:'',
         sms_code:'',
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    zqd_go() {
      this.$router.go(-1);
    },
    //  发送验证码
    async zqd_fa() {
      let { data } = await posts('/api/app/smsCode', {
        mobile: this.zqd_gai.mobile,
        sms_type: 'getPassword',
      });
      // console.log(data);
    },
    //  确定修改
    async zqd_duanxindeng() {
      let { data } = await posts('/api/app/password',this.zqd_gai);
      console.log(data);
    },
  },
};
</script>

<style scoped>
#zqd {
  width: 6.5rem;
  height: 1rem;
  margin-left: 0.5rem;
  margin-top: 5rem;
  border-radius: 0.5rem;
  background: linear-gradient(90deg, #ff9045, #fc5500);
  color: #fff;
  font-size: 0.5rem;
}
</style>
