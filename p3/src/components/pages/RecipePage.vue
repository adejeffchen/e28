<template>
  <div id="recipe-page">
    <div v-if="recipe">
      <show-recipe
        :recipe="recipe"
        :showDetail="true"
        :reviews="reviews"
      ></show-recipe>
    </div>

    <div v-if="recipeNotFound">
      <p>Recipe {{ id }} not found.</p>
    </div>
  </div>
</template>

<script>
import ShowRecipe from "@/components/ShowRecipe.vue";

export default {
  name: "",
  props: ["id", "recipes", "reviews"],
  components: {
    "show-recipe": ShowRecipe,
  },
  computed: {
    recipe() {
      return this.recipes.filter((recipe) => {
        return recipe.id == this.id;
      }, this.id)[0];
    },
    recipeNotFound() {
      return this.recipe == null;
    },
  },
};
</script>