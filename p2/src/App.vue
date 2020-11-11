<template>
  <div id="app">
    <div id="logo-area">
      <router-link v-bind:to="paths['Home']" exact>
        <img
          id="logo"
          alt="Jeff Recipe book logo"
          src="@/assets/images/logo.png"
        /><span id="logo-text">Jeff Recipe Book</span>
      </router-link>
      <!-- Navation area  -->
      <nav>
        <ul>
          <li>
            <router-link
              v-for="link in links"
              v-bind:key="link"
              v-bind:to="paths[link]"
              exact
              >{{ link }}</router-link
            >
          </li>
        </ul>
      </nav>
    </div>

    <!-- Page component area  -->
    <router-view v-bind:recipes="recipes"></router-view>
  </div>
</template>

<script>
import { axios } from "@/app.js";

export default {
  name: "App",
  components: {},
  data() {
    return {
      recipes: [],
      /* links in the navigation */
      links: ["Home", "Register", "Sign In", "Favorites"],

      /* Map links to the appropriate component */
      paths: {
        Home: "/",
        Register: "/register",
        Favorites: "/favorites",
        "Sign In": "/signin",
      },
    };
  },
  mounted() {
    // get recipes data from server
    axios.get("recipe").then((response) => {
      this.recipes = response.data.recipe;
    });
  },
};
</script>

<style lang='scss'>
@import "@/assets/scss/recipes.scss";
</style>
