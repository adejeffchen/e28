<template>
  <div>
    <h1>Manage Reviews</h1>
    <!-- Display a message when there is no review -->
    <div v-if="!reviews.length">There is no review to manage.</div>
    <!-- Display a list of reviews -->
    <div
      v-for="review in reviews"
      :key="review.id"
      class="reviews one-column"
      data-test="review"
    >
      <ul>
        <li>{{ recipeName(review.recipe_id) }}</li>
        <li>Rating: {{ review.rating }}</li>
        <li>Review commet: {{ review.review_detail }}</li>
        <!-- Delete button for a review -->
        <button
          @click="deleteReview(review.id)"
          data-test="delete-review-button"
        >
          Delete
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // all reviews
    reviews() {
      return this.$store.state.reviews;
    },
  },
  methods: {
    // delete a review by review id
    deleteReview(id) {
      this.$store.dispatch("deleteReview", id);
    },
    // get a recipe name by recipe id
    recipeName(id) {
      return this.$store.getters.getRecipeById(id).name;
    },
  },
};
</script>

<style scoped>
</style>