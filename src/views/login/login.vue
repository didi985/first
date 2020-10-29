<template>
  <div>
    <div class="zqd_login">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
        alt=""
      />
    </div>
    <!-- 帐号密码登录 -->
    <div v-show="zqd == 0" class="zqd_div1">
      <div>
        <!-- 手机号 -->
        <div :class="input1 ? 'zqd_active' : ''">
          <van-field
            v-model="zqd_deng1.mobile"
            type="tel"
            label=""
            placeholder="请输入手机号"
            @focus="input1 = true"
            @blur="input1 = false"
          />
        </div>
        <!-- 密码 -->
        <div :class="input2 ? 'zqd_active' : ''">
          <van-field
            v-model="zqd_deng1.password"
            type="password"
            label=""
            placeholder="请输入密码"
            @focus="input2 = true"
            @blur="input2 = false"
          />
        </div>
      </div>
      <div class="sp">
        <span class="zqd_sp1" @click="zqd_zhao">找回密码</span>
        <span class="zqd_sp2" @click="zqd_zhuce">注册/验证码登录</span>
      </div>
      <!-- 底部按钮 -->
      <van-button type="primary" id="zqd" @click="zqd_deng()">登录</van-button>
    </div>

    <!-- 验证码注册登录 -->
    <div v-show="zqd == 1" class="zqd_div1">
      <!-- 手机号 -->
      <div :class="input1 ? 'zqd_active' : ''">
        <van-field
          v-model="zqd_yan.mobile"
          center
          clearable
          label=""
          placeholder="请输入手机号"
          @focus="input1 = true"
          @blur="input1 = false"
        >
          <template #button>
            <div>
              <div v-show="yan">
                <van-count-down
                  :time="60 * 1000"
                  format="获取验证码(ss)"
                  @finish="yan = false"
                />
              </div>
              <span @click="zqd_fa" v-show="!yan">获取验证码</span>
            </div>
          </template>
        </van-field>
      </div>
      <!-- 验证码 -->
      <div :class="input2 ? 'zqd_active' : ''">
        <van-field
          v-model="zqd_yan.sms_code"
          type="password"
          label=""
          placeholder="请输入短信验证码"
          @focus="input2 = true"
          @blur="input2 = false"
        />
      </div>
      <div class="sp">
        <span class="zqd_sp1">*未注册的手机号自动注册</span>
        <span class="zqd_sp2" @click="zqd = 0">使用密码登录</span>
      </div>
      <!-- 底部按钮 -->
      <van-button type="primary" id="zqd" @click="zqd_duanxindeng"
        >登录</van-button
      >
    </div>
  </div>
</template>

<script>
import { posts } from "@/util/api";
export default {
  data() {
    return {
      input1: false,
      input2: false,
      zqd: 0,
      yan: false,
      //   登录
      zqd_deng1: {
        mobile: "",
        password: "",
        type: 1,
      },
      //验证码注册
      zqd_yan: {
        mobile: "",
        sms_code: "",
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
      let { data } = await this.$http.post(
        "http://120.53.31.103:84/api/app/login",
        this.zqd_deng1
      );
      console.log(data.msg);
      console.log("123");
      if (data.msg == "操作成功") {
        localStorage.setItem("token", data.data.remember_token);
        this.$router.push("/person");
      }
    },
    //验证码注册登录
    zqd_zhuce() {
      this.zqd = 1;
    },
    //  发送验证码
    async zqd_fa() {
      if (!/^1[3|4|5|7|8][0-9]{9}$/.test(this.zqd_yan.mobile)) {
        //当手机号匹配你要做什么
        this.$toast('手机号格式不正确');
        return false;
      }
      let { data } = await posts("/api/app/smsCode", {
        mobile: this.zqd_yan.mobile,
        sms_type: "login",
      });
      if (data.code == 201) {
        this.$toast(data.msg);
        this.yan = true;
      }
      console.log(data);
    },
    // 短信登
    async zqd_duanxindeng() {
      let { data } = await this.$http.post(
        "http://120.53.31.103:84/api/app/login",
        this.zqd_yan
      );
      if(data.data.is_new==1){
        this.$router.push('/person')
      }
      console.log(data);
    },
    //  跳转找回密码
    zqd_zhao() {
      this.$router.push("/forget-pass");
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
  margin-left: 0.3rem;
}
.zqd_sp2 {
  //   margin-left: 4rem;
  float: right;
}
#zqd {
  width: 6.5rem;
  height: 1rem;
  margin-top: 5rem;
  border-radius: 0.5rem;
  background: linear-gradient(90deg, #ff9045, #fc5500);
  color: #fff;
  font-size: 0.5rem;
}
.zqd_div1 {
  width: 100%;
  box-sizing: border-box;
  padding: 0.3rem;
  text-align: center;
  > div > div {
    border-bottom: 1px solid #f1f1f1;
  }
  .zqd_active {
    border-bottom: 1px solid #eb6100;
  }
  input {
    width: 100%;
    height: 0.5rem;
  }
}
.van-field__button {
  span {
    color: #eb6100;
  }
}
.sp {
  display: flex;
  justify-content: space-between;
  margin-top: 0.2rem;
}
</style>
