<template>
  <div>
    <div v-if="user">
      <h1>Hi {{ user.name }}, here are your favorite recipes!</h1>
      <show-recipe
        v-for="recipe in favorites"
        :key="recipe.id"
        :recipe="recipe"
      ></show-recipe>
    </div>
    <!-- If user credential is missing -->
    <div v-else>
      <h1>Please login first.</h1>
      <label for="email" id="email-title">Email: </label>
      <input type="text" id="email" name="email" v-model="userData.email" />
      <br />
      <label for="password" id="password-title">Password: </label>
      <input
        type="password"
        id="password"
        name="password"
        v-model="userData.password"
      />
      <br />
      <button @click="loginUser">Login</button>
      <p v-if="errors" class="error">{{ errors[0] }}</p>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import ShowRecipe from "@/components/ShowRecipe.vue";

export default {
  name: "",
  components: {
    "show-recipe": ShowRecipe,
  },
  data() {
    return {
      userData: {
        email: "jill@harvard.edu",
        password: "asdfasdf",
      },
      errors: null,
      favorites: null,
    };
  },
  methods: {
    loginUser() {
      console.log("logging in");
      axios.post("login", this.userData).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
        } else {
          this.errors = response.data.errors;
        }
      });
    },
    loadFavorites() {
      if (this.user) {
        this.favorites = [];
        // query the favorite with the user ID
        axios
          .get("favorite/query", {
            params: { user_id: this.user.id },
          })
          .then((response) => {
            // Iterate through the favorites (response.data.results), loading the recipe information for each favorite
            this.favorites = response.data.results.map((favorite) => {
              return this.$store.getters.getRecipeById(favorite.product_id);
            });
          });
      }
    },
  },
  computed: {
    // get user data from store
    user() {
      return this.$store.state.user;
    },
  },
  watch: {
    // trigger this when the 'user' data changes
    user: function () {
      console.log("user changed");
      this.loadFavorites();
    },
  },
  mounted: function () {
    this.loadFavorites();
  },
};
</script>

<style scoped>
</style>