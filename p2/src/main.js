import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue';
import RecipePage from '@/components/pages/RecipePage.vue';
import AddReviewPage from '@/components/pages/AddReviewPage.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/recipes/:id', component: RecipePage, props: true },
    { path: '/recipes/:id/add-review', component: AddReviewPage, props: true },
  ],
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
