<template>
  <div id="recipe-page">
    <div v-if="recipe">
      <show-recipe :recipe="recipe" :showDetail="true"></show-recipe>
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
  props: ["id"],
  components: {
    "show-recipe": ShowRecipe,
  },
  computed: {
    // one recipe
    recipe() {
      return this.$store.getters.getRecipeById(this.id);
    },
    recipeNotFound() {
      return this.recipe == null;
    },
  },
};
</script>