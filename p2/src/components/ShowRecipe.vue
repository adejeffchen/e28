<template>
  <div v-if="showDetail">
    <!-- Show all info of the recipe and its reviews  -->
    <!-- recipe name & image  -->
    <h1>{{ recipe.name }}</h1>
    <img
      class="recipe-full-thumb"
      v-bind:src="require('@/assets/images/recipes/' + recipe.id + '.jpg')"
    />
    <!-- recipe description, time, calories  -->
    <div class="recipe-detail">
      <p>{{ recipe.description }}</p>
      <b>Time: </b>{{ recipe.time }} minutes<br />
      <b>One serving calories: </b>{{ recipe.calories }}<br />

      <!-- recipe ingredients  -->
      <div class="ingredients">
        <h2>Ingredients</h2>
        <ul>
          <li v-for="ingredient in ingredients" :key="ingredient">
            {{ ingredient }}
          </li>
        </ul>
      </div>

      <!-- recipe directions  -->
      <div class="directions">
        <h2>Directions</h2>
        <ol>
          <li v-for="direction in directions" :key="direction">
            {{ direction }}
          </li>
        </ol>
      </div>

      <!-- review section  -->
      <!-- Add review link  -->
      <router-link :to="addReviewPath" id="addReviewLink"
        >Add Your Review</router-link
      >

      <!-- Existing reviews  -->
      <div class="reviews" v-if="reviewsForRecipe">
        <h2>Reviews</h2>
        <ul v-for="review in reviewsForRecipe" :key="review.id">
          <!-- Show star rating as image  -->
          <li v-if="review.rating == 1">
            <img class="star" src="@/assets/images/1star.svg" alt="1star" />
          </li>
          <li v-else-if="review.rating == 2">
            <img class="star" src="@/assets/images/2star.svg" alt="2star" />
          </li>
          <li v-else-if="review.rating == 3">
            <img class="star" src="@/assets/images/3star.svg" alt="3star" />
          </li>
          <li v-else-if="review.rating == 4">
            <img class="star" src="@/assets/images/4star.svg" alt="4star" />
          </li>
          <li v-else-if="review.rating == 5">
            <img class="star" src="@/assets/images/5star.svg" alt="5star" />
          </li>

          <!-- Show review detail  -->
          <li>{{ review.review_detail }}</li>
        </ul>
      </div>
      <div class="reviews" v-else>
        <h2>Reviews</h2>
        <p>No review submitted yet.</p>
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
      // filter the reviews for this recipe ID
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
    // get recipes reviews from server
    axios.get("review").then((response) => {
      this.reviews = response.data.review;
    });
  },
};
</script>

<style scoped>
</style>