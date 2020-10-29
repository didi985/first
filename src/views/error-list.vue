<template>
  <div>
    <header>
      <div @click="$router.go(-1)">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
      <div class="cxy_top">
        <div @click="showPopup">
          <van-icon name="other-pay" size="0.4rem" />
        </div>
        <div>
          <van-icon name="star-o" size="0.4rem" />
        </div>
        <div @click="showTi">
          <van-icon name="todo-list-o" size="0.4rem" />
        </div>
      </div>
    </header>
    <div class="cxy_con">
      <div>物理学史</div>
      <div>
        <p><span>1</span>/7</p>
      </div>
    </div>
    <div class="cxy_item">
      <div class="cxy_item_top">
        <div>多选</div>
        <p>1、 <span>6．下列叙述正确的是（）</span></p>
      </div>
      <ul>
        <li>
          <input type="checkbox" />
          <p>A、 <span>A．法拉第发现了电磁感应现象</span></p>
        </li>
        <li>
          <input type="checkbox" />
          <p>A、 <span>A．法拉第发现了电磁感应现象</span></p>
        </li>
        <li>
          <input type="checkbox" />
          <p>A、 <span>A．法拉第发现了电磁感应现象</span></p>
        </li>
        <li>
          <input type="checkbox" />
          <p>A、 <span>A．法拉第发现了电磁感应现象</span></p>
        </li>
      </ul>
      <div class="cxy_btn_t">
        <van-button color="#000" disabled plain size="small">上一题</van-button>
        <van-button color="#000" plain size="small">确认</van-button>
        <van-button color="#000" plain size="small">下一题</van-button>
      </div>
      <div class="cxy_btn_s">
        <van-button
          color="#000"
          plain
          icon="https://img.yzcdn.cn/vant/user-active.png"
          size="small"
          type="info"
          @click="Dialog()"
        >
          移除错题
        </van-button>
        <van-button
          color="#000"
          plain
          icon="https://img.yzcdn.cn/vant/user-active.png"
          size="small"
          type="info"
          @click="daan"
        >
          查看答案
        </van-button>
      </div>
    </div>
    <!-- 查看答案小页面 -->
    <el-card v-show="flag">
      <div class="cxy_da_top">
        <p>正确答案: <span>A</span></p>
        <p>你的答案: <span>C</span></p>
      </div>
      <div class="cxy_da_con">
        <p>考点</p>
        <ul>
          <li>物理</li>
          <li>物理学史</li>
        </ul>
      </div>
      <div class="cxy_da_bot">
        <p>解析：<span>暂无解析</span></p>
      </div>
    </el-card>

    <!-- 右侧弹出层 -->
    <van-popup
      v-model="show"
      position="right"
      :style="{ height: '100%', width: '100%' }"
    >
      <div>
        <van-nav-bar title="答题卡" left-arrow @click-left="onClickLeft" />
      </div>
      <div class="cxy_cen">
        <div class="cxy_con">
          <div>物理学史</div>
          <div>
            <p><span>1</span>/7</p>
          </div>
        </div>
        <div>
          <ul class="cxy_list">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </div>
      </div>
      <footer>
        <van-button type="info" block @click="Dialog()">结束巩固</van-button>
      </footer>
    </van-popup>

    <!-- 题目纠错右侧弹出层 -->
    <van-popup
      v-model="showTiMu"
      position="right"
      :style="{ height: '100%', width: '100%' }"
    >
      <div>
        <van-nav-bar
          title="题目纠错反馈"
          left-arrow
          @click-left="onClickLeft"
        />
      </div>
      <div class="cxy_correct">
        <p>纠错类型</p>
        <div class="nei">
          <p><input type="radio" name="a" /> 错别字</p>
          <p><input type="radio" name="a" /> 答案解析不匹配</p>
          <p><input type="radio" name="a" /> 解析错误</p>
          <p><input type="radio" name="a" /> 其他</p>
        </div>
      </div>
      <el-card>
        <textarea
          name=""
          id=""
          cols="200"
          rows="10"
          placeholder="请输入题目纠错信息，最多不超过500个字"
        ></textarea>
        <p>
          <button>提交</button>
        </p>
      </el-card>
    </van-popup>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      show: false,
      showTiMu: false,
      flag: false,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    showPopup() {
      this.show = true;
      // console.log(1111)
    },
    showTi() {
      this.showTiMu = true;
      // console.log(1111)
    },
    onClickLeft() {
      this.show = false;
      this.showTiMu = false;
    },
    Dialog() {
      this.$dialog
        .confirm({
          message: "是否做对题目后自动移出该错题",
        })
        .then(() => {
          this.$router.back();
        })
        .catch(() => {
          // on cancel
        });
    },
    daan() {
      this.flag = !this.flag;
    },
  },
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
header {
  height: 0.88rem;
  border-bottom: 0.01rem solid #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.3rem;
  img {
    height: 0.32rem;
    width: 0.18rem;
  }
  // div{
  //   text-align: center;
  // }
  .cxy_top {
    display: flex;
  }
  .van-icon {
    width: 0.6rem;
  }
}
.cxy_con {
  height: 0.75rem;
  border-bottom: 1px solid #f0f2f5;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  align-items: center;

  div {
    display: flex;
    font-size: 0.26rem;
    color: #595959;
    p {
      font-size: 0.28rem;
      color: #595959;
    }
    span {
      font-size: 0.4rem;
      color: #0097fa;
    }
  }
}
.cxy_item {
  padding: 0.4rem;
  .cxy_item_top {
    display: flex;
    div {
      width: 0.8rem;
      height: 0.35rem;
      line-height: 0.35rem;
      font-size: 0.22rem;
      background-color: #0097fa;
      text-align: center;
      color: #fff;
      border-radius: 0.2rem 0 0.2rem 0;
      margin-right: 0.2rem;
    }
    p {
      font-size: 0.3rem;
    }
    span {
      font-size: 0.12rem;
    }
  }

  ul {
    li {
      list-style: none;
      display: flex;
      padding: 0.3rem 0rem;
      align-items: center;
      text-align: left;
      input {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.3rem;
        // border-radius: 50%;
      }
      p {
        font-size: 0.3rem;
      }
      span {
        font-size: 0.12rem;
      }
    }
  }
  .cxy_btn_t,
  .cxy_btn_s {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0;
  }
}
.van-popup {
  display: flex;
  flex-direction: column;
  .cxy_cen {
    flex: 1;
  }
}
.cxy_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.2rem;
  li {
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    font-size: 0.3rem;
    line-height: 0.8rem;
    border: 1px solid #eaeaea;
    border-radius: 50%;
    color: #b8b8b8;
    margin-top: 0.4rem;
    margin-right: 0.4rem;
  }
}
.cxy_da_top {
  display: flex;
  padding: 0 0 0.2rem 0rem;
  // justify-content: space-around;
  p {
    margin-right: 1.5rem;
    font-size: 0.28rem;
    span {
      color: #22bfa7;
    }
  }
}
.cxy_da_con {
  margin-bottom: 0.15rem;
  p {
    font-size: 0.28rem;
    color: #8c8c8c;
    margin-bottom: 0.15rem;
  }
  ul {
    display: flex;
    li {
      padding: 0.1rem 0.2rem;
      background: linear-gradient(30deg, #0097fa, #0096f9);
      border-radius: 0.25rem;
      color: #fff;
      margin: 0 0.15rem;
    }
  }
}
.cxy_correct {
  padding: 0.2rem;
  p {
    font-size: 0.24rem;
    color: #8c8c8c;
  }
  > .nei {
    display: flex;
    p {
      color: #595959;
      font-size: 0.28rem;
      // width: 0.2rem;
    }
  }
}
</style>
