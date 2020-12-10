import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/app.js';

// globally register Vuex 
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recipes: [],
        reviews: [],
        user: null,
        favorites: []
    },
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        setReviews(state, payload) {
            state.reviews = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setFavorites(state, payload) {
            state.favorites = payload;
        },
    },
    actions: {
        fetchRecipes(context) {
            // get recipes data from server
            axios.get("recipe").then((response) => {
                context.commit('setRecipes', response.data.recipe);
            });
        },
        fetchReviews(context) {
            // get review data from server
            axios.get("review").then((response) => {
                context.commit('setReviews', response.data.review);
            });
        },
        fetchFavorites(context) {
            // get favorites data from server
            axios.get("favorite").then((response) => {
                context.commit('setFavorites', response.data.favorite.map((favorite) => {
                    return this.getters.getRecipeById(favorite.product_id);
                }));
            });
        },
        addFavorites({ dispatch }, productId) {
            axios.post('/favorite', {
                product_id: productId,
            }).then((response) => {
                console.log(productId);
                console.log(response.data);
                if (response.data.success) {
                    dispatch('fetchFavorites');
                }
            });
        },
        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setUser', response.data.user);
                    } else {
                        context.commit('setUser', false);
                    }

                    resolve();
                });
            });
        },
    },
    getters: {
        //get a particular recipe by given recipe id 
        getRecipeById(state) {
            return function (id) {
                return state.recipes.filter((recipe) => {
                    return recipe.id == id;
                }, this.id)[0];
            }
        },
        // get the reviews of a recipe
        getReviewsById(state) {
            return function (id) {
                return state.reviews.filter((review) => {
                    return review.recipe_id == id;
                }, this.id);
            }
        }
    }
})