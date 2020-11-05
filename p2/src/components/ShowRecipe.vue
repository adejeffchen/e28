<template>
  <div class="recipe">
    <router-link v-bind:key="recipe.id" v-bind:to="recipesPath" exact>
      <img
        class="recipe-thumb"
        v-bind:src="require('@/assets/images/recipes/' + recipe.id + '.jpg')"
      />
      <div class="recipe-name">{{ recipe.name }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "show-recipe",
  props: ["recipe"],
  data: function () {
    return {
      recipesPath: "/recipes/" + this.recipe.id,
    };
  },
};
</script>

<style scoped>
</style>