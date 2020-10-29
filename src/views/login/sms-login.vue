<template>
  <div>
    <div class="zqd_login">
      <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" alt="" />
    </div>





    <!-- 验证码注册登录 -->
    <div  class="zqd_div1">
      <!-- 手机号 -->
      <van-field v-model="zqd_yan.mobile" center clearable label="" placeholder="请输入手机号">
        <template #button>
          <van-button size="small" type="primary" @click="zqd_fa">发送验证码</van-button>
        </template>
      </van-field>
      <!-- 验证码 -->
      <van-field v-model="zqd_yan.sms_code" type="password" label="" placeholder="请输入短信验证码" />

      <span class="zqd_sp1">*未注册的手机号自动注册</span>
      <span class="zqd_sp2" @click="zqd_tiao">使用密码登录</span>
      <!-- 底部按钮 -->
      <van-button type="primary" id="zqd" @click="zqd_duanxindeng">登录</van-button>
    </div>
  </div>
</template>

<script>
import { posts } from '@/util/api';
export default {
  data() {
    return {
      zqd: 0,
      huo: false, //类名判断
      huo1: false, //类名判断
      //   登录
      zqd_deng1: {
        mobile: '',
        password: '',
        type: 1,
      },
      //验证码注册
      zqd_yan: {
        mobile: '',
        sms_code: '',
        client: 1,
        type: 2,
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    //   z帐号密码登录
    async zqd_deng() {
      let { data } = await this.$http.post('http://120.53.31.103:84/api/app/login', this.zqd_deng1);
      console.log(data.msg);
      console.log('123');
      if (data.msg == '操作成功') {
        localStorage.setItem('token', data.data.remember_token);
        this.$router.push('/person');
      }
    },
    //验证码注册登录
    zqd_zhuce() {
      this.zqd = 1;
    },
    //  发送验证码
    async zqd_fa() {
      console.log('123');
      let { data } = await posts('/api/app/smsCode', {
        mobile: this.zqd_yan.mobile,
        sms_type: 'login',
      });
      console.log(data);
    },
    //
    // 短信登
    async zqd_duanxindeng() {
      let { data } = await this.$http.post('http://120.53.31.103:84/api/app/login', this.zqd_yan);
      console.log(data);
    },
   //  跳转密码登录
    zqd_tiao(){
       this.$router.push('/login')
    },

    //  获取焦点
    zqd_huo() {
      this.huo = true;
    },
    // 失去焦点
    zqd_shi() {
      this.huo = false;
    },
    //  获取焦点
    zqd_huo1() {
      this.huo1 = true;
    },
    // 失去焦点
    zqd_shi1() {
      this.huo1 = false;
    },
  },
};
</script>

<style scoped lang="scss">
.zqd_login {
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 4.7rem;
    height: 1rem;
  }
}
span {
  font-size: 0.24rem;
  color: #9fa19f;
}
.zqd_sp1 {
  margin-top: 0.2rem;
  float: left;
}
.zqd_sp2 {
  margin-top: 0.2rem;
  float: right;
}
#zqd {
  width: 6.5rem;
  height: 1rem;
  margin-left: -0.5rem;
  margin-top: 5rem;
  border-radius: 0.5rem;
  background: linear-gradient(90deg, #ff9045, #fc5500);
  color: #fff;
  font-size: 0.5rem;
}
.zqd_div1 {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  input {
    width: 100%;
    height: 0.5rem;
  }
}
.zqd_active {
  box-sizing: border-box;
  border-bottom: 1px solid #ff9147;
}
.zqd_active1 {
  box-sizing: border-box;
  border-bottom: 1px solid #ff9147;
}
.van-cell {
  padding: 0.1rem 0.06rem;
}
</style>
