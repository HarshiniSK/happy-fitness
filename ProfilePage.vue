<template>
  <v-container>
    <v-row wrap>
      <v-col cols="12">
        <v-card depressed color="success lighten-5" class="ma-1">
      <v-card-title>
        Profile Info
      </v-card-title>
      <v-card-subtitle>
        {{email}}
      </v-card-subtitle>
      <v-card-text>
      <div>
        Display Name: <strong>{{handle}}</strong>
      </div>
      <div>
        Age: <strong>{{age}}</strong>
      </div>
      <div v-if="!bmicheck">
        Latest BMI Checked: <strong>{{latestbmi}}</strong>
        <br>Latest Status: <strong>{{status}}</strong>
      </div>
      <div v-else>
        To check your BMI, <router-link to=/bmicalculator text class="black--text text-capitalize linking">Click here!</router-link>
      </div>
      </v-card-text>
    </v-card>
      </v-col>

    <v-col cols="4">
    <v-card color="success lighten-5" class="mt-1">
      <v-card-title>
        Blogs
      </v-card-title>
      <v-card-text>
        Read your favourite blogs
      </v-card-text>
      <v-card-actions>
        <v-btn text router to=/blogrefs><strong>Go to Blogs</strong></v-btn>
      </v-card-actions>
    </v-card>
    </v-col>

    <v-col cols="4">
      <v-card color="success lighten-5" class="mt-1">
      <v-card-title>
        BMI Calculator
      </v-card-title>
      <v-card-text>
        Check out your BMI, and your health status
      </v-card-text>
      <v-card-actions>
        <v-btn text router to=/bmicalculator><strong>Check BMI</strong></v-btn>
      </v-card-actions>
    </v-card>
    </v-col>

    <v-col cols="4">
      <v-card color="success lighten-5" class="mt-1">
      <v-card-title>
        Exercise Daily
      </v-card-title>
      <v-card-text>
        Start exercising today and keep track of it
      </v-card-text>
      <v-card-actions>
        <v-btn text router to=/exercise><strong>Click Here</strong></v-btn>
      </v-card-actions>
    </v-card>
    </v-col>

    <v-col cols="4">
      <v-card color="success lighten-5" class="mt-1">
      <v-card-title>
        Exercise Reports
      </v-card-title>
      <v-card-text>
        Check out your exercise hours report for this month
      </v-card-text>
      <v-card-actions>
        <v-btn text router to=/exercisereport><strong>Go to Reports</strong></v-btn>
      </v-card-actions>
    </v-card>
    </v-col>

    <v-col cols="4">
      <v-card color="success lighten-5" class="mt-1">
      <v-card-title>
        Call A Doctor
      </v-card-title>
      <v-card-text>
        Get your doubts cleared with an expert
      </v-card-text>
      <v-card-actions>
        <v-btn text router to=/calladoctor><strong>Contact Doctor</strong></v-btn>
      </v-card-actions>
    </v-card>
    </v-col>

    <v-col cols="4">
      <v-card color="success lighten-5" class="mt-1">
      <v-card-title>
        Edit Profile
      </v-card-title>
      <v-card-text>
        To change your profile details
      </v-card-text>
      <v-card-actions>
        <v-btn text router to=/editprofile><strong>Click Here</strong></v-btn>
      </v-card-actions>
    </v-card>
    </v-col>

    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
import { db } from "./firebaseInit";


export default {
  name: "ProfilePage",
  components: {
    
  },
  data() {
    return {
      bmicheck: false,
      email: "Loading...",
      handle: "Loading...",
      age: "Loading...",
      latestbmi: "Loading...",
      status: "Loading...",
    };
  },
  methods:{
    
  },
  created() {
    if (firebase.auth().currentUser) {
      var user = firebase.auth().currentUser;
      var useruid = firebase.auth().currentUser.uid;
      return db
        .collection("userdetails")
        .doc(useruid)
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log("No such document!");
          } else {
            //console.log('Document data:', doc.data());
            this.handle = doc.data().handle;
            this.age = doc.data().age;
            this.email = user.email;
            this.latestbmi=doc.data().latestbmi;
            this.status = doc.data().status;
            if(this.latestbmi == 0.00 || this.latestbmi == 0){
                this.bmicheck=true;
            }
          }
        })
        .catch(err => {
          console.log("Error getting document", err);
        });
    }
    
  }
};
</script>

<style lang="scss" scoped>
*{
  font-family : "Raleway", sans-serif;
}
.linking{
  text-decoration: none;
}
</style>