<template>
  <div id="app">
    <img id="logo" alt="Jeff Recipe book logo" src="@/assets/images/logo.png" />
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
      /* Store links in an array to maintain order */
      links: ["Home", "Categories", "Favorites"],

      /* Map links to the appropriate component */
      paths: {
        Home: "/",
        Favorites: "/favorites",
        Categories: "/categories",
      },
    };
  },
  mounted() {
    axios.get("recipe").then((response) => {
      //console.log(response);
      this.recipes = response.data.recipe;
    });
  },
};
</script>

<style lang='scss'>
@import "@/assets/scss/recipes.scss";
</style>
