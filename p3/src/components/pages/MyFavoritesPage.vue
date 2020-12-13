<template>
  <div>
    <!-- If user data exists in store -->
    <div v-if="user">
      <!-- If favorites array is empty -->
      <h1 v-if="!favorites || !favorites.length">
        Hi {{ user.name }}, you don't have any favorite recipe yet!
      </h1>
      <!-- If favorites array is not empty -->
      <h1 v-else>Hi {{ user.name }}, here are your favorite recipes!</h1>
      <!-- Sign out button -->
      <div id="signoutButton">
        <button @click="signoutUser" data-test="signout-button">
          Sign Out
        </button>
      </div>
      <!-- show a list of favored recipes -->
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
      <input
        type="text"
        id="email"
        name="email"
        v-model="userData.email"
        @blur="validateLoginFields()"
        data-test="login-email-field"
      />
      <!-- error msg for email field -->
      <span v-if="loginErrors && 'email' in loginErrors" class="error">
        <br />
        {{ loginErrors.email[0] }}
      </span>
      <br />
      <!-- signin password field -->
      <label for="password" id="password-title" class="form-label"
        >Password:</label
      >
      <input
        type="password"
        id="password"
        name="password"
        v-model="userData.password"
        @blur="validateLoginFields()"
        data-test="login-password-field"
      />
      <!-- error msg for password field -->
      <span v-if="loginErrors && 'password' in loginErrors" class="error">
        <br />
        {{ loginErrors.password[0] }}
      </span>
      <br />
      <!-- login button -->
      <button @click="loginUser" data-test="login-button">Login</button>
      <!-- login error msg from server side -->
      <div v-if="loginServerErrors" class="error">
        <li v-for="error in loginServerErrors" v-bind:key="error">
          {{ error }}
        </li>
      </div>
      <!-- Register new account form -->
      <h2>Or register for an account</h2>
      <!-- Register new account name field -->
      <label for="new-name" id="new-name-label" class="form-label"
        >Name:
      </label>
      <input
        type="text"
        id="new-name"
        name="new-name"
        v-model="newUserData.name"
        @blur="validateRegisterFields()"
        data-test="register-name-field"
      />
      <!-- error msg for register account's name field -->
      <span v-if="registerErrors && 'name' in registerErrors" class="error">
        <br />
        {{ registerErrors.name[0] }}
      </span>
      <br />
      <!-- Register new account email field -->
      <label for="new-email" id="new-email-label" class="form-label"
        >Email:
      </label>
      <input
        type="text"
        id="new-email"
        name="new-email"
        v-model="newUserData.email"
        @blur="validateRegisterFields()"
        data-test="register-email-field"
      />
      <!-- error msg for register account's email field -->
      <span v-if="registerErrors && 'email' in registerErrors" class="error">
        <br />
        {{ registerErrors.email[0] }}
      </span>
      <br />
      <!-- Register new account password field -->
      <label for="new-password" id="new-password-label" class="form-label"
        >Password:</label
      >
      <input
        type="password"
        id="new-password"
        name="new-password"
        v-model="newUserData.password"
        @blur="validateRegisterFields()"
        data-test="register-password-field"
      />
      <!-- error msg for register account's password field -->
      <span v-if="registerErrors && 'password' in registerErrors" class="error">
        <br />
        {{ registerErrors.password[0] }}
      </span>
      <br />
      <!-- register new account button -->
      <button @click="registerUser" data-test="register-button">
        Register
      </button>
      <!-- register account error msg from server side -->
      <div v-if="registerServerErrors" class="error">
        <li
          v-for="error in registerServerErrors"
          v-bind:key="error"
          data-test="register-server-error"
        >
          {{ error }}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import ShowRecipe from "@/components/ShowRecipe.vue";
import Validator from "validatorjs";

export default {
  name: "",
  components: {
    "show-recipe": ShowRecipe,
  },
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
      newUserData: {
        name: "",
        email: "",
        password: "",
      },
      loginErrors: [],
      loginServerErrors: [],
      signoutErrors: [],
      registerErrors: [],
      registerServerErrors: [],
    };
  },
  methods: {
    // validate the login fields
    validateLoginFields() {
      let validator = new Validator(this.userData, {
        email: "required|email",
        password: "required",
      });

      this.loginErrors = validator.errors.all();
      return validator.passes();
    },
    // validate the register new account fields
    validateRegisterFields() {
      let validator = new Validator(this.newUserData, {
        name: "required|min:3",
        email: "required|email",
        password: "required",
      });

      this.registerErrors = validator.errors.all();
      return validator.passes();
    },
    // login a user
    loginUser() {
      if (Object.keys(this.loginErrors).length === 0) {
        axios.post("login", this.userData).then((response) => {
          if (response.data.authenticated) {
            this.$store.commit("setUser", response.data.user);
          } else {
            this.loginServerErrors = response.data.errors;
          }
        });
      }
    },
    // register a user
    registerUser() {
      if (Object.keys(this.registerErrors).length === 0) {
        axios.post("register", this.newUserData).then((response) => {
          if (response.data.success) {
            this.$store.commit("setUser", response.data.user);
          } else {
            this.registerServerErrors = response.data.errors;
          }
        });
      }
    },
    // sign out current user
    signoutUser() {
      axios.post("logout").then((response) => {
        if (response.data.success) {
          // reset store User and Favorite
          this.$store.commit("setUser", null);
          this.$store.commit("setFavorites", null);
        } else {
          this.signoutErrors = response.data.errors;
        }
      });
      // reset all form fields
      this.userData = {
        email: "",
        password: "",
      };
      this.newUserData = {
        name: "",
        email: "",
        password: "",
      };
    },
    // get the favorites for this logged in user
    loadFavorites() {
      if (this.user) {
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