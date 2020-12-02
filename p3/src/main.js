import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue';
import RecipePage from '@/components/pages/RecipePage.vue';
import AddReviewPage from '@/components/pages/AddReviewPage.vue';
import MyFavoritesPage from '@/components/pages/MyFavoritesPage.vue';
import ComingSoonPage from '@/components/pages/ComingSoonPage.vue';

import store from '@/store.js';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/recipes/:id/add-review', component: AddReviewPage, props: true },
    { path: '/recipes/:id', component: RecipePage, props: true },
    { path: '/register', component: ComingSoonPage },
    { path: '/signin', component: ComingSoonPage },
    { path: '/myfavorites', component: MyFavoritesPage },
  ],
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
