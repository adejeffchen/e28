<template>
  <div>
    <h1>Show Product ID# {{ id }}</h1>
    <h2>{{ theProduct[0].name }}</h2>
    <img
      class="product-thumb"
      v-bind:src="require('@/assets/images/products/' + id + '.jpg')"
    />
    <p class="product-description">{{ theProduct[0].description }}</p>
    <div class="product-price">${{ theProduct[0].price }}</div>
  </div>
</template>

<script>
import { products } from "@/products.js";

export default {
  name: "",
  props: ["id"],
  data() {
    return {
      products: products,
    };
  },
  computed: {
    theProduct() {
      return this.products.filter((product) => {
        return product.id == this.id;
      });
    },
  },
};
</script>

<style>
</style>