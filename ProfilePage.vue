<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card color="success lighten-5" class="ma-1">
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
      </v-row>
      <v-row>
        <v-col v-for="item in info" :key="item.title">
          <v-card color="success lighten-5" class="mt-1" min-width="300" router link :to="item.link">
            <v-card-title>
              {{item.title}}
            </v-card-title>
            <v-card-text>
              {{item.detail}}
            </v-card-text>
            <v-card-actions>
              <v-btn text>{{item.tag}}</v-btn>
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
      info:[
        {
          title: 'Blogs',
          detail: 'Read your favourite Blogs',
          tag: 'Go to Blogs',
          link: '/blogrefs'
        },
        {
          title: 'BMI Calculator',
          detail: 'Check out your BMI, and your health status',
          tag: 'Check BMI',
          link: '/bmicalculator'
        },
        {
          title: 'Exercise Daily',
          detail: 'Start exercising today and keep track of it',
          tag: 'Click Here',
          link: '/exercise'
        },
        {
          title: 'Exercise Reports',
          detail: 'Check out your exercise hours report for this month',
          tag: 'Go to Reports',
          link: '/exercisereport'
        },
        {
          title: 'Call A Doctor',
          detail: 'Get your doubts clarified with an expert',
          tag: 'Contact Doctor',
          link: '/calladoctor'
        },
        {
          title: 'Diet Plans',
          detail: 'Find the best diet plan that would suit you',
          tag: 'Click here',
          link: '/dietplans'
        },
      ],
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