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
  props: ["recipes"],
  components: {
    "show-recipe": ShowRecipe,
  },
};
</script>

<style scoped>
</style>