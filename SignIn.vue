<template>
    <v-form ref="form">
      <v-container>
        <v-card-title>
          <span class="success--text">Sign In</span>
        </v-card-title>
        <v-row>
          <v-col cols="7"> 
            <v-text-field color="success" label="Email" :rules="emailrules" v-model="email_signin" required></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-spacer></v-spacer>
          </v-col>
          <v-col cols="4">
            <v-text-field
              color="success"
              label="Password"
              :rules="passwordrules"
              type="password"
              v-model="password_signin"
              required
              v-on:keyup.enter="signin"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn class="success ma-1" @click="signin">Sign In</v-btn>
        <v-btn class="text-capitalize ma-1" text route to=/signup>Create A New Account? <strong> Click Here!</strong></v-btn>
      </v-container>
    </v-form>
</template>


<script>
import firebase from 'firebase';

export default {
  name: "SignIn",
  props: [],
  data: () => ({
    email_signin: "",
    password_signin: "",
    emailrules: [v => !!v || "Email is required"]
  }),
  methods: {
    signin: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email_signin, this.password_signin)
        .then(
          () => {
            //alert(`${user.user.uid}`);
            //alert(`You are logged in as ${user.user.email}`);
            window.location.href="profilepage";
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");

* {
  font-family: "Raleway", sans-serif;
}
</style>
