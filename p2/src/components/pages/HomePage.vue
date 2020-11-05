<template>
  <div>
    <p>
      Jeff Recipe Book is a special collection of easy to follow recipes that
      you want to make during Shelter In Place.
    </p>
    <show-recipe
      v-for="recipe in recipes"
      :key="recipe.id"
      :recipe="recipe"
    ></show-recipe>
  </div>
</template>

<script>
import ShowRecipe from "@/components/ShowRecipe.vue";
import { recipes } from "@/recipes.js";

export default {
  name: "",
  components: {
    "show-recipe": ShowRecipe,
  },
  data: function () {
    return {
      recipes: recipes,
    };
  },
};
</script>

<style scoped>
</style>