<template>
<v-container>
        <v-card-title>
          <h3 class="success--text">Sign Up</h3>
        </v-card-title>
        <v-form ref="formbig" id="signup-form-big" class="hidden-sm-and-down">
          <v-row>
            <v-col cols="7"> 
            <v-text-field color="success" label="Email" id="emailb" :rules="emailrules" v-model="emailb" required></v-text-field>
          </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
            <v-text-field
              id="passwordb"
              color="success"
              label="Password"
              :rules="passwordrules"
              type="password"
              v-model="passwordb"
              required
            ></v-text-field>
          </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
            <v-text-field color="success" id="handleb" label="Display Name" :rules="namerules" v-model="myhandleb" required></v-text-field>
          </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
            <v-text-field color="success" id="ageb" label="Age" :rules="agerules" v-model="ageb" required v-on:keyup.enter="signupb"></v-text-field>
          </v-col>
          </v-row>
          <v-row>
        <v-col cols="12">
        <v-btn class="success" @click="signupb">Sign Up</v-btn>
        </v-col>
        <v-col>
        <router-link to=/signin class="black--text">Already have an account? <strong> Click Here!</strong></router-link>
        </v-col>
        </v-row> 
        </v-form>

        <v-form ref="formsmall" id="signup-form-small" class="hidden-md-and-up">
          <v-row>
            <v-col cols="11"> 
            <v-text-field color="success" label="Email" id="emails" :rules="emailrules" v-model="emails" required></v-text-field>
          </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
            <v-text-field
              id="passwords"
              color="success"
              label="Password"
              :rules="passwordrules"
              type="password"
              v-model="passwords"
              required
            ></v-text-field>
          </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
            <v-text-field color="success" id="handles" label="Display Name" :rules="namerules" v-model="myhandles" required></v-text-field>
          </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
            <v-text-field color="success" id="ages" label="Age" :rules="agerules" v-model="ages" required v-on:keyup.enter="signups"></v-text-field>
          </v-col>
          </v-row>
          <v-row>
        <v-col cols="12">
        <v-btn class="success" @click="signups">Sign Up</v-btn>
        </v-col>
        <v-col>
        <router-link to=/signin class="black--text">Already have an account? <strong> Click Here!</strong></router-link>
        </v-col>
        </v-row> 
        </v-form>
  </v-container>
</template>


<script>
import firebase from 'firebase';
import { db } from './firebaseInit';


export default {
  name: "SignUp",
  props: [],
  data () { 
    return{
      //for bigger devices
    emailb: "",
    passwordb: "",
    myhandleb: "",
    ageb: '',
    //for smaller devices
    emails: "",
    passwords: "",
    myhandles: "",
    ages: '',
    //rules
    emailrules: [v => !!v || "Email is required"],
    passwordrules : [v => !!v || "Password is required"],
    namerules : [v => !!v || "Display Name is required"],
    agerules : [v => !!v || "Age is required"],
  }},
  methods: {
      signupb :function (e) {
        const signupForm = document.querySelector('#signup-form-big');
        firebase.auth().createUserWithEmailAndPassword(this.emailb, this.passwordb).then(
          function(user){
            return db.collection('userdetails').doc(user.user.uid).set({
              email: signupForm['emailb'].value,
              handle: signupForm['handleb'].value,
              age: parseInt(signupForm['ageb'].value),
              latestbmi: parseFloat(0.00),
              status: "",
              daycounter: 0,
              time:{
                one: 0,
                two: 0,
                three: 0,
                four: 0,
                five: 0,
                six: 0,
                seven:0
              },
              day:{
                one: "",
                two: "",
                three: "",
                four: "",
                five: "",
                six: "",
                seven: ""
              }
            }).then(()=>{
              window.location.href = 'profilepage';
            })
          },
          function(err){
            alert(err.message);
          }
        );
        console.log('registered');
        e.preventDefault();
      },
      
      signups :function (e) {
        const signupForm = document.querySelector('#signup-form-small');
        
        firebase.auth().createUserWithEmailAndPassword(this.emails, this.passwords).then(
          function(user){
            return db.collection('userdetails').doc(user.user.uid).set({
              email: signupForm['emails'].value,
              handle: signupForm['handles'].value,
              age: parseInt(signupForm['ages'].value),
              latestbmi: parseFloat(0.00),
              status: "",
              time:{
                one: 0,
                two: 0,
                three: 0,
                four: 0,
                five: 0,
                six: 0,
                seven:0
              }
            }).then(()=>{
              window.location.href = 'profilepage';
            })
          },
          function(err){
            alert(err.message);
          }
        );
        e.preventDefault();
      },
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");

* {
  font-family: "Raleway", sans-serif;
  text-decoration: none;
}
</style>