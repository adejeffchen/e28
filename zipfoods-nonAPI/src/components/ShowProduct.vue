<template>
  <div class="product">
    <router-link v-bind:key="product.id" v-bind:to="productsPath" exact>
      <div class="product-name">{{ product.name }}</div>

      <img
        class="product-thumb"
        v-bind:src="require('@/assets/images/products/' + product.id + '.jpg')"
      />
    </router-link>
    <!-- <p class="product-description">{{ product.description }}</p>
        <div class="product-price">${{ product.price }}</div> -->
  </div>
</template>

<script>
export default {
  name: "show-product",
  props: ["product"],
  data: function () {
    return {
      productsPath: "/products/" + this.product.id,
    };
  },
};
</script>

<style scoped>
</style>