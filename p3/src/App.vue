<template>
  <div id="app">
    <div id="logo-area">
      <router-link v-bind:to="paths['Home']" exact>
        <img
          id="logo"
          alt="Jeff Recipe book logo"
          src="@/assets/images/logo.png"
        />
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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // links in the navigation
      links: ["Home", "My Favorites", "Manage Reviews"],

      // Map links to the appropriate component
      paths: {
        Home: "/",
        "My Favorites": "/myfavorites",
        "Manage Reviews": "/managereviews",
      },
    };
  },
  mounted() {
    // get recipes and reviews data from server
    this.$store.dispatch("fetchRecipes");
    this.$store.dispatch("fetchReviews");
  },
};
</script>

<style lang='scss'>
@import "@/assets/scss/recipes.scss";
</style>
