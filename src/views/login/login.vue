<template>
  <div>
    <div class="zqd_login">
      <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" alt="" />
    </div>
    <!-- 帐号密码登录 -->
    <div v-show="zqd == 0" class="zqd_div1">
      <!-- 手机号 -->
      <div>
        <van-field v-model="zqd_deng1.mobile" type="tel" label="" placeholder="请输入手机号" />
      </div>
      <!-- 密码 -->
      <van-field v-model="zqd_deng1.password" type="password" label="" placeholder="请输入密码" />

      <span class="zqd_sp1" @click="zqd_zhao">找回密码</span>
      <span class="zqd_sp2" @click="zqd_zhuce">注册/验证码登录</span>
    <!-- 底部按钮 -->
      <van-button type="primary" id="zqd" @click="zqd_deng()">登录</van-button>
    </div>

    <!-- 验证码注册登录 -->
    <div v-show="zqd == 1">
      <!-- 手机号 -->
      <van-field v-model="zqd_yan.mobile" center clearable label="" placeholder="请输入手机号">
        <template #button>
          <van-button size="small" type="primary" @click="zqd_fa">发送验证码</van-button>
        </template>
      </van-field>
      <!-- 验证码 -->
      <van-field v-model="zqd_yan.sms_code" type="password" label="" placeholder="请输入短信验证码" />

      <span class="zqd_sp1">*未注册的手机号自动注册</span>
      <span class="zqd_sp2" @click="zqd = 0">使用密码登录</span>
    <!-- 底部按钮 -->
      <van-button type="primary" id="zqd" @click="zqd_duanxindeng">登录</van-button>
    </div>

  </div>
</template>

<script>
import {posts} from '@/util/api'
export default {
  data() {
    return {
      zqd: 0,
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
      console.log('123')
      if(data.msg=="操作成功"){
         localStorage.setItem('token',data.data.remember_token)
         this.$router.push('/person')
      }
    },
    //验证码注册登录
    zqd_zhuce() {
      this.zqd = 1;
    },
    //  发送验证码
    async zqd_fa() {
      console.log('123');
      let {data} = await posts('/api/app/smsCode',{
         mobile: this.zqd_yan.mobile,
         sms_type: 'login',
      })
      // let { data } = await this.$http.post('http://120.53.31.103:84/api/app/smsCode', {
      //   mobile: this.zqd_yan.mobile,
      //   sms_type: 'login',
      // });
      console.log(data);
    },
    // 短信登
    async zqd_duanxindeng() {
      let { data } = await this.$http.post('http://120.53.31.103:84/api/app/login', this.zqd_yan);
      console.log(data);
    },
   //  跳转找回密码
   zqd_zhao(){
      this.$router.push('/forget-pass')
   }
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
  margin-left: 0.3rem;
}
.zqd_sp2 {
  //   margin-left: 4rem;
  float: right;
}
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
.zqd_div1{
  width: 100%;
  box-sizing: border-box;
  padding: 0.3rem;
  input{
    width: 100%;
    height: 0.5rem;
  }
}
.zqd_active{
  
}
</style>
