<template>
<v-container>
        <v-card-title>
          <h3 class="success--text">Sign In</h3>
        </v-card-title>
    <v-form ref="formbig" class="hidden-sm-and-down">
      <v-row>
        <v-col cols="8"> 
            <v-text-field v-on:keyup.enter="signinb" color="success" label="Email" :rules="emailrules" v-model="emailb" required></v-text-field>
          </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
            <v-text-field
              color="success"
              label="Password"
              :rules="passwordrules"
              type="password"
              v-model="passwordb"
              required
              v-on:keyup.enter="signinb"
            ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
        <v-btn class="success" @click="signinb">Sign In</v-btn>
        </v-col>
        <v-col>
        <router-link to=/signup class="black--text">Create A New Account? <strong> Click Here!</strong></router-link>
        </v-col>
        </v-row>
    </v-form>

    <v-form ref="formsmall" class="hidden-md-and-up">
      <v-row>
        <v-col cols="11">
            <v-text-field v-on:keyup.enter="signins" color="success" label="Email" :rules="emailrules" v-model="emails" required></v-text-field>
          </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">   
            <v-text-field
              color="success"
              label="Password"
              :rules="passwordrules"
              type="password"
              v-model="passwords"
              required
              v-on:keyup.enter="signins"
            ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
        <v-btn class="success" @click="signins">Sign In</v-btn>
        </v-col>
        <v-col>
        <router-link to=/signup class="black--text">Create A New Account? <strong> Click Here!</strong></router-link>
        </v-col>
        </v-row>
    </v-form> 
      </v-container>
</template>


<script>
import firebase from 'firebase';

export default {
  name: "SignIn",
  props: [],
  data: () => ({
    //big devices
    emailb: "",
    passwordb: "",
    //small devices
    emails: "",
    passwords: "",
    emailrules: [v => !!v || "Email is required"]
  }),
  methods: {
    signinb: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.emailb, this.passwordb)
        .then(
          () => {
            window.location.href="profilepage";
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
    signins: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.emails, this.passwords)
        .then(
          () => {
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
  text-decoration: none;
}
</style>
