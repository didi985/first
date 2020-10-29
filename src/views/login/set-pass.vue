<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="设置密码" left-text="">
      <template #right>
        <span class="zqd_sp1">跳过</span>
      </template>
    </van-nav-bar>
    <!-- input  -->
    <div class="zqd_div" :class="input1 ? 'zqd_active' : ''">
      <van-field center clearable label="" placeholder="请输入手机号" @focus="input1 = true" @blur="input1 = false">
        <template #button>
          <span @click="zqd_fa" v-show="zqd_show">获取验证码</span>

          <p @click="zqd_fa" id="qq" v-show="!zqd_show"><van-count-down :time="60*1000" format="获取验证码 (ss)" /></p>
        </template>
      </van-field>
    </div>
    <div class="zqd_div" :class="a ? 'zqd_active' : ''">
      <input type="text" placeholder="请设置登录密码" @focus="a = true" @blur="a = false" />
    </div>
    <div class="zqd_div" :class="b ? 'zqd_active' : ''">
      <input type="text" placeholder="请再次输入密码" @focus="b = true" @blur="b = false" />
    </div>

    <van-button type="primary" id="zqd" @click="zqd_que">确定</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: false,
      b: false,
      input1: false,
      zqd_show: true,
    };
  },
  created() {},
  mounted() {},
  methods: {
    zqd_que() {
      this.$router.push('/set-message');
    },
    //  发送验证码
    async zqd_fa() {
      // console.log('123');
      let res = /^1[3|4|5|7|8][0-9]{9}$/;
      if (!res.test(this.zqd_yan.mobile)) {
        Toast('手机号格式不正确');
        return false;
      }
      this.zqd_show = false;
      let { data } = await posts('/api/app/smsCode', {
        mobile: this.zqd_yan.mobile,
        sms_type: 'login',
      });
      console.log(data);
      // 验证码登录  判断是第几次
      if(data.data.is_new==2){
        this.$router.push('/person');
      }else{
        this.$router.push('/set-pass')
      }
    },
  },
};
</script>

<style scoped lang="scss">
.zqd_sp1 {
  color: #808080;
  font-size: 0.14rem;
}
.zqd_div {
  box-sizing: border-box;
  margin: 0 0.6rem;
  border-bottom: 0.01rem solid #808080;
  > input {
    width: 100%;
    height: 1rem;
    border-radius: 0.15rem;
    ::placeholder {
      color: #efefef;
      font-size: 0.14rem;
    }
  }
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
.zqd_active {
  border-bottom: 0.01rem solid orange;
}
.van-field__button {
  span {
    color: #eb6100;
    font-size: .32rem;
  }
}
#qq {
  color: #808080;
  font-size: 0.12rem;
  display: inline-block;
}
</style>
