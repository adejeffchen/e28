<template>
  <div>
    <div v-if="user">
      <!-- If favorites array is empty -->
      <h1 v-if="!favorites.length">
        Hi {{ user.name }}, you don't have any favorite recipe yet!
      </h1>
      <!-- If favorites array is not empty -->
      <h1 v-else>Hi {{ user.name }}, here are your favorite recipes!</h1>
      <button @click="signoutUser" data-test="signout-button">Sign Out</button>
      <show-recipe
        v-for="recipe in favorites"
        :key="recipe.id"
        :recipe="recipe"
      ></show-recipe>
    </div>
    <!-- If user credential is missing -->
    <div v-else>
      <!-- Login form -->
      <h1>Please login first</h1>
      <label for="email" id="email-title" class="form-label">Email: </label>
      <input type="text" id="email" name="email" v-model="userData.email" />
      <br />
      <label for="password" id="password-title" class="form-label"
        >Password:</label
      >
      <input
        type="password"
        id="password"
        name="password"
        v-model="userData.password"
      />
      <br />
      <button @click="loginUser" data-test="login-button">Login</button>
      <div v-if="loginErrors" class="error">
        <li v-for="error in loginErrors" v-bind:key="error">
          {{ error }}
        </li>
      </div>
      <!-- Register new account form -->
      <h2>Or register for an account</h2>
      <label for="new-name" id="new-name-label" class="form-label"
        >Name:
      </label>
      <input
        type="text"
        id="new-name"
        name="new-name"
        v-model="newUserData.name"
      />
      <br />
      <label for="new-email" id="new-email-label" class="form-label"
        >Email:
      </label>
      <input
        type="text"
        id="new-email"
        name="new-email"
        v-model="newUserData.email"
      />
      <br />
      <label for="new-password" id="new-password-label" class="form-label"
        >Password:</label
      >
      <input
        type="password"
        id="new-password"
        name="new-password"
        v-model="newUserData.password"
      />
      <br />
      <button @click="registerUser" data-test="register-button">
        Register
      </button>
      <div v-if="registerErrors" class="error">
        <li v-for="error in registerErrors" v-bind:key="error">
          {{ error }}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import ShowRecipe from "@/components/ShowRecipe.vue";

export default {
  name: "",
  components: {
    "show-recipe": ShowRecipe,
  },
  data() {
    return {
      userData: {
        email: "jill@harvard.edu",
        password: "asdfasdf",
      },
      newUserData: {
        name: "Jeff Chen",
        email: "jchen@harvard.edu",
        password: "asdfasdf",
      },
      loginErrors: null,
      signoutErrors: null,
      registerErrors: null,
      //favorites: null,
    };
  },
  methods: {
    loginUser() {
      console.log("logging in");
      axios.post("login", this.userData).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
        } else {
          this.loginErrors = response.data.errors;
        }
      });
    },
    registerUser() {
      console.log("registering");
      axios.post("register", this.newUserData).then((response) => {
        if (response.data.success) {
          this.$store.commit("setUser", response.data.user);
        } else {
          this.registerErrors = response.data.errors;
        }
      });
    },
    signoutUser() {
      console.log("Signing out");
      axios.post("logout").then((response) => {
        console.log(response.data);
        if (response.data.success) {
          // reset store User and Favorite
          this.$store.commit("setUser", null);
          this.$store.commit("setFavorites", null);
        } else {
          this.signoutErrors = response.data.errors;
        }
      });
    },
    loadFavorites() {
      if (this.user) {
        // get the favorites for this logged in user
        this.$store.dispatch("fetchFavorites");
      }
    },
  },
  computed: {
    // get user data from store
    user() {
      return this.$store.state.user;
    },
    // get favorites data from store
    favorites() {
      return this.$store.state.favorites;
    },
  },
  watch: {
    // trigger this when the 'user' data changes
    user: function () {
      console.log("user changed");
      this.loadFavorites();
    },
  },
  mounted: function () {
    this.loadFavorites();
  },
};
</script>

<style scoped>
</style>