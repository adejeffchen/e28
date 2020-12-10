import VueRouter from 'vue-router';
import store from '@/store';

// Define all the routes of our application
const routes = [
    {
        path: '/',
        component: () => import('@/components/pages/HomePage.vue'),
    },
    {
        path: '/recipes/:id/add-review',
        component: () => import('@/components/pages/AddReviewPage.vue'),
        props: true
    },
    {
        path: '/recipes/:id',
        component: () => import('@/components/pages/RecipePage.vue'),
        props: true
    },
    {
        path: '/managereviews',
        component: () => import('@/components/pages/ManageReviewsPage.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/myfavorites',
        component: () => import('@/components/pages/MyFavoritesPage.vue'),
    },
    {
        path: '/denied',
        component: () => import('@/components/pages/AccessDeniedPage.vue'),
    },

];

// Initialize our router
const router = new VueRouter({
    routes,
    mode: 'history'
})

// beforeEach provides a way to execute some code before a route is resolved
// Ref: https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to, from, next) => {

    // Exact the meta information from our routes
    // Ref: https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    const decide = () => {
        if (requiresAuth && !store.state.user) {
            next('/denied');
        }
        else {
            next();
        }
    }

    // If we don't have the user yet, dispatch our Vuex authUser action
    if (store.state.user === null) {
        store.dispatch('authUser').then(() => {
            decide();
        });
    } else {
        decide();
    }
});

export default router;