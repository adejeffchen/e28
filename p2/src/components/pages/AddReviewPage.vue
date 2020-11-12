<template>
  <div id="add-review">
    <h1>Submit Your Review</h1>
    <div v-if="recipe">
      <!-- show the recipe thumbnail and name -->
      <show-recipe :recipe="recipe"></show-recipe>

      <!-- review input area -->
      <div id="add-review-input">
        <h2>Rating</h2>
        <!-- radio button of 5 different stars choices -->
        <label for="5star"
          ><input
            type="radio"
            name="rating"
            value="5"
            id="5star"
            v-model="review.rating"
          />
          <img
            class="star"
            src="@/assets/images/5star.svg"
            alt="5star"
          /> </label
        ><br />
        <label for="4star"
          ><input
            type="radio"
            name="rating"
            value="4"
            id="4star"
            v-model="review.rating"
          />
          <img
            class="star"
            src="@/assets/images/4star.svg"
            alt="4star"
          /> </label
        ><br />
        <label for="3star"
          ><input
            type="radio"
            name="rating"
            value="3"
            id="3star"
            v-model="review.rating"
          />
          <img
            class="star"
            src="@/assets/images/3star.svg"
            alt="3star"
          /> </label
        ><br />
        <label for="2star"
          ><input
            type="radio"
            name="rating"
            value="2"
            id="2star"
            v-model="review.rating"
          />
          <img
            class="star"
            src="@/assets/images/2star.svg"
            alt="2star"
          /> </label
        ><br />
        <label for="1star"
          ><input
            type="radio"
            name="rating"
            value="1"
            id="1star"
            v-model="review.rating"
          />
          <img class="star" src="@/assets/images/1star.svg" alt="1star" />
        </label>

        <!-- text input area -->
        <label for="review-detail" id="review-detail-title"
          >Review Detail</label
        >
        <textarea
          id="review-detail"
          name="review-detail"
          v-model="review.review_detail"
        ></textarea>
        <button id="submitReviewBtn" @click="addReview">Submit Review</button>

        <!-- review submission success message -->
        <div v-if="showConfirmationMessage" class="success">
          Thank you! Your review has been added.
        </div>

        <!-- If API returns error  -->
        <div v-if="errors" class="error">
          <li v-for="value in errors" v-bind:key="value[0]">
            {{ value[0] }}
          </li>
        </div>
      </div>
    </div>

    <!-- if recipe id in URL is not valid -->
    <div v-if="recipeNotFound">
      <p>Recipe {{ id }} not found.</p>
    </div>
  </div>
</template>

<script>
import ShowRecipe from "@/components/ShowRecipe.vue";
import { axios } from "@/app.js";

export default {
  name: "",
  props: ["id", "recipes"],
  components: {
    "show-recipe": ShowRecipe,
  },
  data() {
    return {
      review: {
        rating: 5,
        review_detail: "",
        recipe_id: this.id,
      },
      errors: null,
      showConfirmationMessage: null,
    };
  },
  methods: {
    addReview() {
      // add review to server
      axios.post("/review", this.review).then((response) => {
        if (response.data.errors) {
          this.errors = response.data.errors;
          this.showConfirmationMessage = false;
        } else {
          // adding a review succesfully
          this.errors = null;
          this.showConfirmationMessage = true;
          this.review.review_detail = "";
          this.review.rating = 5;
        }
      });
    },
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