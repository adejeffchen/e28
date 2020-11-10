<template>
  <div id="add-review">Add Review Page</div>
</template>

<script>
export default {
  name: "",
  props: ["id", "recipes"],
  components: {},
  data() {
    return {};
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