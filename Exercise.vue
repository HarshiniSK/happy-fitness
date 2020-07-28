<template>
  <v-container>
      <v-snackbar v-model="snack" top absolute right>
            Please check the no.of minutes you exercised
            <v-btn text class="success--text" @click="snack=false">Close</v-btn>
      </v-snackbar>
      <v-snackbar v-model="save" top absolute right>
            Your exercise time is updated
            <v-btn text class="success--text" @click="save=false">Close</v-btn>
      </v-snackbar>
      <v-snackbar v-model="check" top absolute right :timeout=0>
            Are you sure to proceed with this time entered?
            <v-btn text class="success--text" @click="timesave">Proceed</v-btn>
            <v-btn text class="success--text" @click="reset">Change</v-btn>
      </v-snackbar>
      <v-row v-if="day == 100">
        <v-col>
          <strong>Loading...</strong>
        </v-col>
      </v-row>
      <v-row v-if="day == 0">
        <v-col>
          You can keep daily track of your exercise time, here.
          <br>Enter the time in minutes, for each day.
          <br>You will have a report every 7 days.
          <br>To start tracking,
        </v-col>
      </v-row>
      <v-row v-if="day == 0">
        <v-col>
          <v-btn class="success white--text text-capitalize" @click="start">Click here</v-btn>
        </v-col>
      </v-row>
  <v-form ref="form">
      <v-row v-if="day != 0 || day != 100">
        <v-col cols="12">
          <v-btn class="success white--text" route to=/exercisereport>Go to Reports</v-btn>
        </v-col>
        <v-col>Enter your exercise time in mins below</v-col>
      </v-row>
      <v-row v-if="day != 0 || day != 100">
        <v-col cols="4" sm="3" xs="3">
          <v-text-field
            color="success"
            label="Time (in mins)"
            placeholder="in mins"
            v-model="mins"
            required
            v-on:keyup.enter="timesave"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row v-if="day != 0 || day != 100">
        <v-col cols="12">
          <v-btn class="success white--text" @click="timesave">Save</v-btn>
        </v-col>
        <v-col>
          Your exercise time for the day {{today}} : {{exist}} mins
        </v-col>
      </v-row>
  </v-form>
  </v-container>
</template>

<script>
import firebase from "firebase";
import { db } from "./firebaseInit";

export default {
  name: "Exercise",
  components: {},
  data() {
    return {
      snack: false,
      save: false,
      exist: parseInt(0),
      mins: "",
      day: parseInt(100),
      lastdate: parseInt(0)
    };
  },
  created (){
    var user = firebase.auth().currentUser;
    var date = parseInt(new Date().getDate());
    db.collection('userdetails').where("email","==", user.email).onSnapshot(snapshot=>{
      let changes=snapshot.docChanges();
      changes.forEach(change=>{
        this.day = change.doc.data().daycounter;
        this.lastdate = change.doc.data().lastvisitdate;
        if(this.day == 8){
          db.collection('userdetails').doc(user.uid).update({
          daycounter: 1,
          "time.one":0,
          "time.two":0,
          "time.three":0,
          "time.four":0,
          "time.five":0,
          "time.six":0,
          "time.seven":0,
          "day.one" :"",
          "day.two" :"",
          "day.three" :"",
          "day.four" :"",
          "day.five" :"",
          "day.six" :"",
          "day.seven" :"",
        }).then({});
        }
          switch (this.day) {
          case 1:
            this.exist = parseInt(change.doc.data().time.one);
            break;
          case 2:
            this.exist = parseInt(change.doc.data().time.two);
            break;
          case 3:
            this.exist = parseInt(change.doc.data().time.three);
            break;
          case 4:
            this.exist = parseInt(change.doc.data().time.four);
            break;
          case 5:
            this.exist = parseInt(change.doc.data().time.five);
            break;
          case 6:
            this.exist = parseInt(change.doc.data().time.six);
            break;
          case 7:
            this.exist = parseInt(change.doc.data().time.seven);
            break;
          default:
            this.exist = parseInt(0);
          }
      })
    });

    db.collection('userdetails').doc(user.uid).get().then(doc=>{
      this.lastdate =  doc.data().lastvisitdate;
      this.day = doc.data().daycounter;
      
      
      if(date != this.lastdate){
        db.collection('userdetails').doc(user.uid).update({
          daycounter : firebase.firestore.FieldValue.increment(1),
          lastvisitdate: date
        });
        if(this.day == 8){
          db.collection('userdetails').doc(user.uid).update({
          daycounter: 1,
          "time.one":0,
          "time.two":0,
          "time.three":0,
          "time.four":0,
          "time.five":0,
          "time.six":0,
          "time.seven":0,
          "day.one" :"",
          "day.two" :"",
          "day.three" :"",
          "day.four" :"",
          "day.five" :"",
          "day.six" :"",
          "day.seven" :"",
        }).then(()=>{});
        }
      }
    })
    },

    computed:{
        today(){
          return new Date().getDate()+"/"+parseInt(parseInt(new Date().getMonth())+1);
        },
        check(){
          if(this.mins>180){
            return true;
          }
          return false;
        }
    },
    watch:{

    },
    methods:{
      reset(){
        this.mins="";
      },
      start(){
        var user=firebase.auth().currentUser;
        db.collection('userdetails').doc(user.uid).update({
          daycounter: 1,
          "time.one":0,
          "time.two":0,
          "time.three":0,
          "time.four":0,
          "time.five":0,
          "time.six":0,
          "time.seven":0,
          "day.one" :"",
          "day.two" :"",
          "day.three" :"",
          "day.four" :"",
          "day.five" :"",
          "day.six" :"",
          "day.seven" :"",
        }).then(()=>{});
      },
      timesave(){
        if((this.mins == "")||(this.mins == 0) || (this.mins < 0)){
          this.snack = true;
        }
        else{
        var user=firebase.auth().currentUser;
        var info=db.collection('userdetails').doc(user.uid);
        var tempmin = parseInt(this.mins);
        this.mins="";
        this.checker = false;
        switch(this.day){
          case 1:
          info.update({
            "time.one" : firebase.firestore.FieldValue.increment(tempmin),
            "day.one" : this.today
          }).then(()=>{
            this.save = true;
          });
          break;

          case 2:
          info.update({
            "time.two" : firebase.firestore.FieldValue.increment(tempmin),
            "day.two" : this.today
          }).then(()=>{
            this.save = true;
          });
          break;

          case 3:
          info.update({
            "time.three" : firebase.firestore.FieldValue.increment(tempmin),
            "day.three" : this.today
          }).then(()=>{
            this.save = true;
          });
          break;

          case 4:
          info.update({
            "time.four" : firebase.firestore.FieldValue.increment(tempmin),
            "day.four" : this.today
          }).then(()=>{
            this.save = true;
          });
          break;

          case 5:
          info.update({
            "time.five" : firebase.firestore.FieldValue.increment(tempmin),
            "day.five" : this.today
          }).then(()=>{
            this.save = true;
          });
          break;

          case 6:
          info.update({
            "time.six" : firebase.firestore.FieldValue.increment(tempmin),
            "day.six" : this.today
          }).then(()=>{
            this.save = true;
          });
          break;

          case 7:
          info.update({
            "time.seven" : firebase.firestore.FieldValue.increment(tempmin),
            "day.seven" : this.today
          }).then(()=>{
            this.save = true;
          });
          break;

          default:
        }
        } 
      }
      
    }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");
* {
  font-family: "Raleway", sans-serif;
}
</style>