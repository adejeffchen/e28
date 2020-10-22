<template>
  <div v-if="showFeedback">
    <span :class="{ correct: correct }" v-if="correct"
      >You got it!
      <button id="playBtn" @click="$emit('play-again')">
        Play again
      </button></span
    >
    <span :class="{ incorrect: !correct }" v-else
      >Sorry, this's not correct. Please try again.</span
    >
  </div>
</template>

<script>
export default {
  template: "#result-feedback",
  props: ["correct", "show-feedback"],
};
</script>

<style>
.correct {
  background-color: green;
  padding: 0.5em;
}

.incorrect {
  background-color: red;
  padding: 0.5em;
}
</style>