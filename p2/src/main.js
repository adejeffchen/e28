import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue';
import Categories from '@/components/pages/CategoriesPage.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/categories', component: Categories },
  ],
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
