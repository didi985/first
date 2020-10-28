import Vue from 'vue';
import { Swipe, SwipeItem,NavBar,Button } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
Vue.use(Button);

// 粘性布局
import { Sticky } from 'vant';
Vue.use(Sticky);

// 图标
import { Icon } from 'vant';
Vue.use(Icon);

// 下拉菜单
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

// list列表
import { List } from 'vant';
Vue.use(List);

// 搜索框
import { Search } from 'vant';
Vue.use(Search);