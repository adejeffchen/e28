<template>
  <div id="app">
    <img id="logo" alt="Jeff Recipe book logo" src="@/assets/images/logo.png" />
    <h1>Welcome to Jeff Recipe Book</h1>
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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
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
};
</script>

<style lang='scss'>
@import "@/assets/scss/recipes.scss";
</style>
