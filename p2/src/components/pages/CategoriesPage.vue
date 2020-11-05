<template>
  <div>
    <p>Here are the categories of recipes</p>
  </div>
</template>

<script>
import { recipes } from "@/recipes.js";

export default {
  name: "",
  components: {},
  data: function () {
    return {
      recipes: recipes,
    };
  },
};
</script>

<style scoped>
</style>