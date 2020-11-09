<template>
  <div v-if="showDetail">
    <!-- Show all info of the recipe and its reviews  -->
    <h1>{{ recipe.name }}</h1>
    <img
      class="recipe-full-thumb"
      v-bind:src="require('@/assets/images/recipes/' + recipe.id + '.jpg')"
    />
    <div class="recipe-detail">
      <div class="ingredients">
        <h2>Ingredients</h2>
        <ul>
          <li v-for="ingredient in ingredients" :key="ingredient">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div class="directions">
        <h2>Directions</h2>
        <ol>
          <li v-for="direction in directions" :key="direction">
            {{ direction }}
          </li>
        </ol>
      </div>
    </div>
  </div>
  <div v-else class="recipe-list">
    <!-- Show thumbnail and name of the recipe only  -->
    <router-link v-bind:to="recipesPath" exact>
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
  props: ["recipe", "showDetail"],
  data: function () {
    return {
      recipesPath: "/recipes/" + this.recipe.id,
    };
  },
  computed: {
    ingredients() {
      return this.recipe.ingredients.split(" | ");
    },
    directions() {
      return this.recipe.directions.split(" | ");
    },
  },
};
</script>

<style scoped>
</style>