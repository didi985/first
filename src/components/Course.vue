<template>
  <div>
    <!-- 粘性布局 -->
    <van-sticky>
      <!-- 导航栏 -->
      <van-nav-bar title="特色课">
        <template #right>
          <van-icon name="search" size="0.3998rem" color="#7F7F7F" @click="sou"/>
        </template>
      </van-nav-bar>
      <!-- 导航栏 -->

      <!-- 下拉菜单 -->
      <van-dropdown-menu>
        <van-dropdown-item title="分类" ref="item">
          <div class="tad-yi">
            <p class="tad-nian">年级</p>
            <div class="tad-he">
              <span>年级一</span>
              <span>年级一</span>
              <span>年级一</span>
              <span>年级一</span>
              <span>年级一</span>
              <span>年级一</span>
              <span>年级一</span>
            </div>
            <p class="tad-nian">学科</p>
            <div class="tad-he">
              <span>语文</span>
              <span>语文</span>
              <span>语文</span>
              <span>语文</span>
              <span>语文</span>
            </div>
            <div class="tad-niu">
              <button color="#7232dd" class="tad-b1">重置</button>
              <button color="#7232dd" class="tad-b2">确定</button>
            </div>
          </div>
        </van-dropdown-item>

        <van-dropdown-item title="排序" ref="item">
          <ul class="tad-san">
            <li>综合排序</li>
            <li>最新</li>
            <li>最热</li>
            <li>价格从最低到最高</li>
            <li>价格从最低到最高</li>
          </ul>
        </van-dropdown-item>

        <van-dropdown-item title="筛选" ref="item">
          <div class="tad-er">
            <div class="tad-he">
              <span>年级一</span>
              <span>年级一</span>
              <span>年级一</span>
              <span>年级一</span>
              <span>年级一</span>
              <span>年级一</span>
              <span>年级一</span>
            </div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
      <!-- 下拉菜单 -->
    </van-sticky>
    <!-- 粘性布局 -->

    <!-- 内容 -->
    <!-- 加载更多 -->
<!-- <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
> -->
    <div>
      <div class="tad-nei">
        <div class="tad-dan">
            <p class="tad-p1">李老师课堂开课了快来看看</p>
            <div class="tad-sj">
              <p>
                 <van-icon name="aim" />
                03月16日 18:30 ~ 03月22日 15:00
                <van-icon name="down" />
                </p>
              <p>共8课时</p>
            </div>
            <div class="tad-tu">
              <div>
                <img src='../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png' alt="">
                <font>李青</font>
              </div>
            </div>
            <p class="tad-ren">
              <span  >134人已报名</span>
              <font >免费</font>
            </p>
        </div>


         <div class="tad-dan">
            <p class="tad-p1">李老师课堂开课了快来看看</p>
            <div class="tad-sj">
              <p>
                 <van-icon name="aim" />
                03月16日 18:30 ~ 03月22日 15:00
                <van-icon name="down" />
                </p>
              <p>共8课时</p>
            </div>
            <div class="tad-tu">
              <div>
                <img src='../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png' alt="">
                <font>李青</font>
              </div>
            </div>
            <p class="tad-ren">
              <span  >134人已报名</span>
              <font >免费</font>
            </p>
        </div>


         <div class="tad-dan">
            <p class="tad-p1">李老师课堂开课了快来看看</p>
            <div class="tad-sj">
              <p>
                 <van-icon name="aim" />
                03月16日 18:30 ~ 03月22日 15:00
                <van-icon name="down" />
                </p>
              <p>共8课时</p>
            </div>
            <div class="tad-tu">
              <div>
                <img src='../../public/img/0ac5ae20de2db5409b16c4dfa73dfab5.png' alt="">
                <font>李青</font>
              </div>
            </div>
            <p class="tad-ren">
              <span  >134人已报名</span>
              <font >免费</font>
            </p>
        </div>

      </div>
    </div>

<!-- </van-list> -->
<!-- 加载更多 -->


  </div>
</template>

<script>
import { Toast } from "vant";


export default {
  data() {
    return {
      //  下拉菜单
      value: 0,
      switch1: false,
      switch2: false,

       // 加载更多
      // loading: false,
      // finished: false,
    };
  },
  name: "demo",
  props: {},
  mounted() {},
  // 计算属性
  computed: {},
  watch: {},
  methods: {
    // 搜索按钮
    onClickRight() {
      Toast("按钮");
    },

    // 下拉菜单
    onConfirm() {
      this.$refs.item.toggle();
    },

    // 搜索页面跳转
    sou(){
      this.$router.push('/Search')
    },


     // 加载更多
    //  onLoad() {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     for (let i = 0; i < 2; i++) {
    //       this.i++
    //       this.list2.push(this.list[this.i]);
    //     }
    //     // 加载状态结束
    //     this.loading = false;
    //     // 数据全部加载完成
    //     if (this.list2.length == this.list.length) {
    //       this.finished = true;
    //     }
    //   }, 2000);
    // },
  }
};
</script> 

<style scoped>
.van-nav-bar {
  height: 0.87rem;
}
.tad-nian {
  font-size: 0.24rem;
  color: #595959;
}
.tad-he {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
  border-bottom: 1px solid #f1f1f1;
}
.tad-he span {
  margin: 0 0.14rem 0.46rem 0;
  display: inline-block;
  width: 1.38rem;
  height: 0.66rem;
  background: #f5f5f5;
  font-size: 0.24rem;
  color: #646464;
  text-align: center;
  line-height: 0.66rem;
  overflow: hidden;
}
.tad-niu {
  padding: 0.3rem 0;
  display: flex;
  justify-content: space-between;
}
.tad-niu .tad-b1 {
  width: 3.35rem;
  height: 0.63rem;
  background-color: #ffffff;
  outline: none;
  border: 0.03rem solid #e7e7e7;
  border-radius: 0.08rem;
  font-size: 0.22rem;
  color: #595959;
}
.tad-niu .tad-b2 {
  width: 3.35rem;
  height: 0.63rem;
  background-color: #eb6100;
  outline: none;
  border: none;
  border-radius: 0.08rem;
  font-size: 0.22rem;
  color: #ffffff;
  margin-right: 0.25rem;
}
.tad-yi {
  padding-left: 0.3rem;
  padding-bottom: 0.2rem;
}
.tad-er {
  padding-left: 0.3rem;
  padding-top: 0.4rem;
}
.tad-san li {
  list-style: none;
  height: 1.02rem;
  text-align: center;
  line-height: 1.02rem;
  font-size: 0.25rem;
  color: #595959;
  border-bottom: 0.01rem solid #f5f5f5;
}
.tad-nei {
  background-color: #F0F2F5;
  padding: 0.3rem;
}
.tad-dan{
    background: #fff;
    border-radius: .1rem;
    padding: 0 0.28rem;
    margin-bottom: .3rem;
    position: relative;
}
.tad-dan .tad-p1{
    font-size: 0.3rem;
    color: #333;
    padding-top: 0.3rem;
    margin: 0;
}
.tad-sj{
      display: flex;
    align-items: center;
}
.tad-sj p{
  margin: 0;
  margin-top: 0.2rem;
  font-size: 0.25rem;
}
.tad-tu{
  width: 6.34rem;
  height: 1.3rem;
}
.tad-tu div{
  display: flex;
  height: 100%;
  align-items: center;
  width: 1.54rem;
}
.tad-tu img{
  width: 0.54rem;
  height: 0.54rem;
  border-radius: 50%;
}
.tad-tu font{
    font-size: .24rem;
    color: rgba(0,0,0,.45);
    margin-left: 0.17rem;
    margin-right: .35rem;
}
.tad-ren{
  border-top: 1px solid #f5f5f5;
    height: 0.87rem;
    line-height: 0.87rem;
    display: flex;
    font-size: .25rem;
}
.tad-ren span{
  width: 5.4rem;
  padding-right: .2rem;
  color: rgba(0,0,0,.45);
}
.tad-ren font{
  color: #44a426;
  font-size: .35rem;
}
</style>
