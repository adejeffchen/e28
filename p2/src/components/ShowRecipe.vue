<template>
  <div v-if="showDetail">
    <!-- Show all info of the recipe and its reviews  -->
    <h1>{{ recipe.name }}</h1>
    <img
      class="recipe-full-thumb"
      v-bind:src="require('@/assets/images/recipes/' + recipe.id + '.jpg')"
    />
    <div class="recipe-detail">
      <b>Time: </b>{{ recipe.time }} minutes<br />
      <b>One serving calories: </b>{{ recipe.calories }}<br />
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
      <!-- review section  -->
      <div class="reviews" v-if="reviewsForRecipe">
        <h2>Reviews</h2>
        <ul v-for="review in reviewsForRecipe" :key="review.id">
          <li>Rating: {{ review.rating }} stars</li>
          <li>Detail: {{ review.review_detail }}</li>
        </ul>
      </div>
      <div class="reviews" v-else>
        <h2>Reviews</h2>
        <p>No review submitted yet.</p>
      </div>
      <router-link :to="addReviewPath">Add Review</router-link>
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
import { axios } from "@/app.js";

export default {
  name: "show-recipe",
  props: ["recipe", "showDetail"],
  data: function () {
    return {
      reviews: [],
      recipesPath: "/recipes/" + this.recipe.id,
      addReviewPath: "/recipes/" + this.recipe.id + "/add-review",
    };
  },
  computed: {
    ingredients() {
      return this.recipe.ingredients.split(" | ");
    },
    directions() {
      return this.recipe.directions.split(" | ");
    },
    reviewsForRecipe() {
      const theReviews = this.reviews.filter((reviews) => {
        return reviews.recipe_id == this.recipe.id;
      }, this.recipe.id);
      if (theReviews.length < 1) {
        return null;
      } else {
        return theReviews;
      }
    },
  },
  mounted() {
    // get recipes data from server
    axios.get("review").then((response) => {
      this.reviews = response.data.review;
    });
  },
};
</script>

<style scoped>
</style>