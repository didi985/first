<template>
  <div class="cxy_box">
      <!-- 轮播图布局 -->
      <div class="cxy_banner">
            <van-swipe class="my-swipe" :autoplay="3000" :show-indicators='false'>
                <van-swipe-item><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20193KAjU2cB6h1569839562.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019LnKumseuhw1569839569.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20193KAjU2cB6h1569839562.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20197Cxc53hktC1569839552.jpg" alt=""></van-swipe-item>
            </van-swipe>
      </div>
      <!-- 特色课布局 -->
      <div class="cxy_kinds">
        <ul>
          <li>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAEDElEQVRoQ+2aTWhUVxTH/+fNRyYmE78WirTQFgwiXSjFjWDRlR+k0CIOlJiaVk1VNGrGmBZaOy24EXSmlBqk2inUyaRZKM3MFFxoNt1VQXEhiogSSKwL48ckMTNz7yk3VQntTN7Me2HezJv3tveee+7vnnP+9773LgFAaGjIPZ4eeVsCX4KwCZKXgEhTbRX3EP4mxiXp1b46tfHjYTPzIwX+/PloO4i/AfCGmcHKZcsAa6ALYnKiIxzY9dioX+pOxJZL4Eq1gM8AfeRyy/dPbG67bRg+mIxFwWg3OoBldkTMLFaf+qDthtE5UDDRNwrwUqMDWGnHkKvMwQ/GBAiVKW46K2sePhFjK6NnxrcDb67mncibyT7LbJ20d9LeWPJR0KZq352KLmX2vguX5n+9NDmAmB7kXqTvh7ftHLMlfFeqv5lYXARjZZ6cEAD+AmG/LeGDidhBAJFCxaBejEAYtCV8VzL2NTG+m1UJCE9rFx6AA29so7DeqtAhp6i0dyJvw33eibye2jtp76S99cptZAaO2ud5pXUEzxG82YvJOd4aEZtKsHEEr0YFb0oKXhP+cPvN/2ZhLaj9XUHYGGlpvVcz8OoTFAETID7pn/AeDwUCmfLAT/8Wxp9EuE7M2XKLHhMxMacl+NaLSW/qdCCQzjeHuU97IgbzOZGRx0T92OOp4TpZbvhlzc0cWr9B/VWe9efqnMIzIEAUnwR39ra0jpUbulR/cwf/b8TPC4/siWxqGy11Ilb0nxt4VWPA2Vx26mjko0+fWAFixKdpeJXqBPSJXKazmsCnr9WNj/wiGa16C5f/bK+T6ocuRhdoLs8KaFSv56Cc7STIzRqvJaJOMC/S8/1/eAUO/klkMz35In7093N+ofl6AV4PaC49B2VtZ3U9D00gqgOritV7q0vGnoAxX3UrJtW/+CO+OivkNfX9T2/wSm+nI6l4J0vZw0ATgfpFRhyLbC2s6l2D51uIKFHpYMXMj7YNDHjfdE++xW6PJ+eWwz9s2f5sNkNbwRezQjP7dCV/20Ccu2yLtC8V/lAy9o6LoWp+Qam2lda/ZNHqSJyZ59caf4ZEoNqjXzK8it7h5K/rNNbOMrCcqlj1DcGrPfTwYP97mov3QvJmAEuq8f6uMfiXxbtv4MdGX8PiZaRhviayPstqmqlegrYQcIBR/CVqU/CWwRZwfCQR382QYQDzitEjW8F3XD3jaRpp3AtCiIGFesGxFbyCDQ1FfemJuh2QfFqvBGwH/yrawVTfLkiEAW4oVAK2hVcl4H/o30PM3xYqAdvCqwxoH4r6Fo97PyFGb74SsDX8qxLoTsY/E1J+D0LDjEOZrAn46V1gtPFzxvSV1Je7AN2pCfjXJZCu3wqSx8H8yEXo+Qf3I4hni2PDwwAAAABJRU5ErkJggg==" alt="">
            <span>一对一辅导</span>
          </li>
          <li>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAEDElEQVRoQ+2aTWhUVxTH/+fNRyYmE78WirTQFgwiXSjFjWDRlR+k0CIOlJiaVk1VNGrGmBZaOy24EXSmlBqk2inUyaRZKM3MFFxoNt1VQXEhiogSSKwL48ckMTNz7yk3VQntTN7Me2HezJv3tveee+7vnnP+9773LgFAaGjIPZ4eeVsCX4KwCZKXgEhTbRX3EP4mxiXp1b46tfHjYTPzIwX+/PloO4i/AfCGmcHKZcsAa6ALYnKiIxzY9dioX+pOxJZL4Eq1gM8AfeRyy/dPbG67bRg+mIxFwWg3OoBldkTMLFaf+qDthtE5UDDRNwrwUqMDWGnHkKvMwQ/GBAiVKW46K2sePhFjK6NnxrcDb67mncibyT7LbJ20d9LeWPJR0KZq352KLmX2vguX5n+9NDmAmB7kXqTvh7ftHLMlfFeqv5lYXARjZZ6cEAD+AmG/LeGDidhBAJFCxaBejEAYtCV8VzL2NTG+m1UJCE9rFx6AA29so7DeqtAhp6i0dyJvw33eibye2jtp76S99cptZAaO2ud5pXUEzxG82YvJOd4aEZtKsHEEr0YFb0oKXhP+cPvN/2ZhLaj9XUHYGGlpvVcz8OoTFAETID7pn/AeDwUCmfLAT/8Wxp9EuE7M2XKLHhMxMacl+NaLSW/qdCCQzjeHuU97IgbzOZGRx0T92OOp4TpZbvhlzc0cWr9B/VWe9efqnMIzIEAUnwR39ra0jpUbulR/cwf/b8TPC4/siWxqGy11Ilb0nxt4VWPA2Vx26mjko0+fWAFixKdpeJXqBPSJXKazmsCnr9WNj/wiGa16C5f/bK+T6ocuRhdoLs8KaFSv56Cc7STIzRqvJaJOMC/S8/1/eAUO/klkMz35In7093N+ofl6AV4PaC49B2VtZ3U9D00gqgOritV7q0vGnoAxX3UrJtW/+CO+OivkNfX9T2/wSm+nI6l4J0vZw0ATgfpFRhyLbC2s6l2D51uIKFHpYMXMj7YNDHjfdE++xW6PJ+eWwz9s2f5sNkNbwRezQjP7dCV/20Ccu2yLtC8V/lAy9o6LoWp+Qam2lda/ZNHqSJyZ59caf4ZEoNqjXzK8it7h5K/rNNbOMrCcqlj1DcGrPfTwYP97mov3QvJmAEuq8f6uMfiXxbtv4MdGX8PiZaRhviayPstqmqlegrYQcIBR/CVqU/CWwRZwfCQR382QYQDzitEjW8F3XD3jaRpp3AtCiIGFesGxFbyCDQ1FfemJuh2QfFqvBGwH/yrawVTfLkiEAW4oVAK2hVcl4H/o30PM3xYqAdvCqwxoH4r6Fo97PyFGb74SsDX8qxLoTsY/E1J+D0LDjEOZrAn46V1gtPFzxvSV1Je7AN2pCfjXJZCu3wqSx8H8yEXo+Qf3I4hni2PDwwAAAABJRU5ErkJggg==" alt="">
            <span>一对一辅导</span>
          </li>
          <li>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAEDElEQVRoQ+2aTWhUVxTH/+fNRyYmE78WirTQFgwiXSjFjWDRlR+k0CIOlJiaVk1VNGrGmBZaOy24EXSmlBqk2inUyaRZKM3MFFxoNt1VQXEhiogSSKwL48ckMTNz7yk3VQntTN7Me2HezJv3tveee+7vnnP+9773LgFAaGjIPZ4eeVsCX4KwCZKXgEhTbRX3EP4mxiXp1b46tfHjYTPzIwX+/PloO4i/AfCGmcHKZcsAa6ALYnKiIxzY9dioX+pOxJZL4Eq1gM8AfeRyy/dPbG67bRg+mIxFwWg3OoBldkTMLFaf+qDthtE5UDDRNwrwUqMDWGnHkKvMwQ/GBAiVKW46K2sePhFjK6NnxrcDb67mncibyT7LbJ20d9LeWPJR0KZq352KLmX2vguX5n+9NDmAmB7kXqTvh7ftHLMlfFeqv5lYXARjZZ6cEAD+AmG/LeGDidhBAJFCxaBejEAYtCV8VzL2NTG+m1UJCE9rFx6AA29so7DeqtAhp6i0dyJvw33eibye2jtp76S99cptZAaO2ud5pXUEzxG82YvJOd4aEZtKsHEEr0YFb0oKXhP+cPvN/2ZhLaj9XUHYGGlpvVcz8OoTFAETID7pn/AeDwUCmfLAT/8Wxp9EuE7M2XKLHhMxMacl+NaLSW/qdCCQzjeHuU97IgbzOZGRx0T92OOp4TpZbvhlzc0cWr9B/VWe9efqnMIzIEAUnwR39ra0jpUbulR/cwf/b8TPC4/siWxqGy11Ilb0nxt4VWPA2Vx26mjko0+fWAFixKdpeJXqBPSJXKazmsCnr9WNj/wiGa16C5f/bK+T6ocuRhdoLs8KaFSv56Cc7STIzRqvJaJOMC/S8/1/eAUO/klkMz35In7093N+ofl6AV4PaC49B2VtZ3U9D00gqgOritV7q0vGnoAxX3UrJtW/+CO+OivkNfX9T2/wSm+nI6l4J0vZw0ATgfpFRhyLbC2s6l2D51uIKFHpYMXMj7YNDHjfdE++xW6PJ+eWwz9s2f5sNkNbwRezQjP7dCV/20Ccu2yLtC8V/lAy9o6LoWp+Qam2lda/ZNHqSJyZ59caf4ZEoNqjXzK8it7h5K/rNNbOMrCcqlj1DcGrPfTwYP97mov3QvJmAEuq8f6uMfiXxbtv4MdGX8PiZaRhviayPstqmqlegrYQcIBR/CVqU/CWwRZwfCQR382QYQDzitEjW8F3XD3jaRpp3AtCiIGFesGxFbyCDQ1FfemJuh2QfFqvBGwH/yrawVTfLkiEAW4oVAK2hVcl4H/o30PM3xYqAdvCqwxoH4r6Fo97PyFGb74SsDX8qxLoTsY/E1J+D0LDjEOZrAn46V1gtPFzxvSV1Je7AN2pCfjXJZCu3wqSx8H8yEXo+Qf3I4hni2PDwwAAAABJRU5ErkJggg==" alt="">
            <span>一对一辅导</span>
          </li>
        </ul>
      </div>
      <!-- 名师阵容 -->
      <p class="cxy_page"><span></span>名师阵容</p>
      <div class="cxy_content">
        <ul class="cxy_item">
          <li>
            <div>
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt="">
            </div>
            <div class="cxy_txt">
              <p>杨德胜</p>
              <p>　杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。
                辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
              特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。</p>
            </div>
          </li>

          <li>
            <div>
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt="">
            </div>
            <div class="cxy_txt">
              <p>杨德胜</p>
              <p>　杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。
                辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
              特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。</p>
            </div>
          </li>

        </ul>
      </div>
      <!-- 精品课程 -->
      <p class="cxy_page"><span></span>精品课程</p>
        <div class="cxy_jingpin">
          <ul class="cxy_item">
            <li>
              <div class="cxy_pos">
                  <img src="https://wap.365msmk.com/img/has-buy.6cfbd83d.png" alt="">
              </div>
              <p class="one">每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题</p>
              <div class="two">1课时</div>
              <div class="three">
                <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt="">
                <span>杨德胜</span>
              </div>
              <div class="four">
                <span>150人报名</span>
                <span>免费</span>
              </div>
            </li>
          </ul>
        </div>


      <!-- 推荐课程 -->
      <p class="cxy_page"><span></span>推荐课程</p>
        <div class="cxy_jingpin">
          <ul class="cxy_item">
            <li>
              <div class="cxy_pos">
                  <img src="https://wap.365msmk.com/img/has-buy.6cfbd83d.png" alt="">
              </div>
              <p class="one">每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题</p>
              <div class="two">1课时</div>
              <div class="three">
                <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt="">
                <span>杨德胜</span>
              </div>
              <div class="four">
                <span>150人报名</span>
                <span>免费</span>
              </div>
            </li>
          </ul>
        </div>
          <div class="cxy_jingpin">
          <ul class="cxy_item">
            <li>
              <div class="cxy_pos">
                  <img src="https://wap.365msmk.com/img/has-buy.6cfbd83d.png" alt="">
              </div>
              <p class="one">每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题</p>
              <div class="two">1课时</div>
              <div class="three">
                <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt="">
                <span>杨德胜</span>
              </div>
              <div class="four">
                <span>150人报名</span>
                <span>免费</span>
              </div>
            </li>
          </ul>
        </div>

 
    <app-footer></app-footer>

  </div>
</template>

<script>
import appFooter from "../components/Footer";
export default {
  components: { appFooter },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.my-swipe .van-swipe-item {
  height: 4.3rem;
  img {
    height: 4.3rem;
  }
}
//最外层盒子
.cxy_box{
  position: absolute;
  width: 7.5rem;
  background-color: #f0f2f5;
}

//特色课Li盒子
.cxy_kinds{
  position: relative;
  width: 7.5rem;
  top: -0.5rem;
  padding-bottom: 0.2rem;
  ul{
    display: flex;
    justify-content: space-around;
  li{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 2rem;
    justify-content: center;
    width: 2rem;
    background-color: #fff;
    border-radius: 0.2rem;
    img{
      width: 0.5rem;
      height: 0.5rem;
    }
  }
  }
}
//名师阵容样式
.cxy_page{
  font-size: 0.38rem;
  color: #595959;
  padding-left: 0.7rem;
  height: 0.8rem;
  line-height: 0.8rem;
}
.cxy_content{
  // width: 7.5rem;
  padding: 0 0.2rem;
  .cxy_item{
    padding: 0 0.2rem;
    li{
      height: 1.6rem;
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      border-radius: 0.15rem;
      margin-top: 0.2rem;
      align-items: center;
          img{
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;          
        }    
        div{
          padding-left: 0.2rem;
        }
        .cxy_txt{
          width: 5.5rem;
          :first-child{
            font-size: 0.3rem;
            color: #595959;
          }
          p{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space:nowrap;
          font-size: 0.24rem;
          color: #b7b7b7;
          }
          :last-child{
            padding-left: 0.2rem;
          }
        } 
    }

 
  }
}
// 精品课程样式
.cxy_jingpin{
  .cxy_item{
    padding: 0 0.4rem;
    li{
      height: 3.7rem;
      background-color: #fff;
      padding: 0.2rem;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 0.15rem;
      margin-top: 0.2rem;
      justify-content: space-around;
      position: relative;
      // 定位
      .cxy_pos{
        position: absolute;
        right: 0.5rem;
        top: 50%;
        img{
          width: 1.2rem;
          height: 1.2rem;
        }
        // background: url('https://wap.365msmk.com/img/has-buy.6cfbd83d.png') no-repeat;
      }
      .one{
        font-size: 0.34rem;
        // font-weight: bold;
      }
      .two{
        color: #666;
      }
      .three{   
          // line-height: 0.8rem;
        display: flex;
        align-items: center;
        color: rgba(0,0,0,.45);

        img{
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          margin-right: 0.2rem;   
        }
      }
      .four{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgba(0,0,0,.45);
        font-size: 0.3rem;
        font-weight: 500;
        :last-child{
          font-size: 0.4rem;
          color: #44a426;
        }
      }
    }
  }
}
</style>
