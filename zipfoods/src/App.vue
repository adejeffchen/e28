<template>
  <div id="app">
    <img
      alt="ZipFoods logo"
      id="logo"
      src="@/assets/images/zipfoods-logo.png"
    />

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

    <router-view v-bind:products="products"></router-view>
  </div>
</template>

<script>
import { axios } from "@/app.js";

export default {
  name: "App",
  data() {
    return {
      products: [],
      /* Store links in an array to maintain order */
      links: ["home", "products", "categories", "create product"],

      /* Map links to the appropriate component */
      paths: {
        home: "/",
        products: "/products",
        categories: "/categories",
        "create product": "/products/new",
      },
    };
  },
  mounted() {
    axios.get("product").then((response) => {
      //console.log(response);
      this.products = response.data.product;
    });
  },
};
</script>

<style lang='scss'>
@import "@/assets/scss/zipfoods.scss";
</style>
