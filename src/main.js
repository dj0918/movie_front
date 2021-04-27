import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import TitlePage from './pages/TitlePage.vue'
import MainPage from './pages/MainPage.vue'
import PostPage from './pages/PostPage.vue'
import NumPage from './pages/NumPage.vue'
import SeatPage from './pages/SeatPage.vue'
import TicketingPage from './pages/TicketingPage.vue'

Vue.config.productionTip = false

Vue.use(VueRouter); // router 기능 확장 선언
const routes = [
  {
    path: '/post/:id',
    component: PostPage
  },
  {
    path: '/',
    component: TitlePage
  },

  {
    path: '/main',
    component: MainPage
  },

  {
    path: '/about',
    component: NumPage
  },
  {
    path: '/about/Seat',
    component: SeatPage
  },
  {
    path: '/ticketing',
    component: TicketingPage
  }
];

// router 객체생성
const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router // router 추가
}).$mount('#app')
