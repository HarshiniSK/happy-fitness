<template>
    <v-form ref="form" id="signup-form">
      <v-container>
        <v-card-title>
          <span class="success--text">Sign Up</span>
        </v-card-title>
        <v-row>
          <v-col cols="7"> 
            <v-text-field color="success" label="Email" :rules="emailrules" v-model="email_signup" required></v-text-field>
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
              v-model="password_signup"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="8">
            <v-spacer></v-spacer>
          </v-col>
          <v-col cols="5">
            <v-text-field color="success" id="handle" label="Display Name" :rules="namerules" v-model="myhandle" required></v-text-field>
          </v-col>
          <v-col cols="7">
            <v-spacer></v-spacer>
          </v-col>
          <v-col cols="2">
            <v-text-field color="success" id="age" label="Age" :rules="agerules" v-model="age" required v-on:keyup.enter="signup"></v-text-field>
          </v-col>
        </v-row>
        <v-btn class="success ma-1" @click="signup">Sign Up</v-btn>
        <v-btn class="text-capitalize ma-1" text route to=/signin>Already have an account? <strong> Click Here!</strong></v-btn>
      </v-container>
    </v-form>
  
</template>


<script>
import firebase from 'firebase';
import { db } from './firebaseInit';
//import VueRouter from 'vue-router'
//import {db} from '../main';

export default {
  name: "SignUp",
  props: [],
  data () { 
    return{
    email_signup: "",
    password_signup: "",
    myhandle: "",
    age: '',
    userdetails:[],
    emailrules: [v => !!v || "Email is required"],
    passwordrules : [v => !!v || "Password is required"],
    namerules : [v => !!v || "Display Name is required"],
    agerules : [v => !!v || "Age is required"],
  }},
  methods: {
      signup :function (e) {
        const signupForm = document.querySelector('#signup-form');
        console.log(signupForm['handle'].value," ",signupForm['age'].value)
        firebase.auth().createUserWithEmailAndPassword(this.email_signup, this.password_signup).then(
          function(user){
            return db.collection('userdetails').doc(user.user.uid).set({
              handle: signupForm['handle'].value,
              age: parseInt(signupForm['age'].value),
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
              //alert(`${user.user.uid}`);
              //alert(`Logged In As ${user.user.email}`);
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
      /*savedetail: function(user){
        db.collection('userdetails').doc(user.user.uid).add({
            myhandle: this.handle,
            age: this.age
        }).then(()=>{
          console.log('added');
        })
      },*/
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");

* {
  font-family: "Raleway", sans-serif;
}
</style>