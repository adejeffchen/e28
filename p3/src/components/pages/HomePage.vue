<template>
  <div>
    <h1>Welcome to Jeff Recipe Book!</h1>
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

export default {
  name: "",
  components: {
    "show-recipe": ShowRecipe,
  },
  computed: {
    // all recipes
    recipes() {
      return this.$store.state.recipes;
    },
  },
};
</script>

<style scoped>
</style>