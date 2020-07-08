<template>
  <v-form ref="form">
    <v-container>
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
      <v-row v-if="day != 0">
        <v-col cols="12">
          <v-btn class="success white--text" route to=/exercisereport>Go to Reports</v-btn>
        </v-col>
        <v-col>Enter your exercise time in mins below</v-col>
      </v-row>
      <v-row v-if="day != 0">
        <v-col cols="4" sm="3" xs="3">
          <v-text-field
            color="success"
            label="Time (in mins)"
            placeholder="in mins"
            :rules="rules"
            v-model="mins"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row v-if="day != 0">
        <v-col cols="12">
          <v-btn class="success white--text" @click="timesave">Save</v-btn>
        </v-col>
        <v-col>
          Your exercise time for the day {{today}} : {{exist}}
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import firebase from "firebase";
import { db } from "./firebaseInit";

export default {
  name: "Exercise",
  components: {},
  data() {
    return {
      exist: 0,
      rules: [v => !!v || "Empty Field"],
      mins: "",
      day: 0,
      lastvisited: ""
    };
  },
  created() {
    var user_e = firebase.auth().currentUser.email;
    db.collection("userdetails")
      .where("email", "==", user_e)
      .onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
          this.day = change.doc.data().daycounter;
          this.lastvisited = change.doc.data();
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
        }
        });
      });
    var user = firebase.auth().currentUser.uid;
    return db
      .collection("userdetails")
      .doc(user)
      .get()
      .then(doc => {
        this.day = doc.data().daycounter;
        switch (this.day) {
          case 1:
            this.exist = parseInt(doc.data().time.one);
            break;

          case 2:
            this.exist = parseInt(doc.data().time.two);
            break;

          case 3:
            this.exist = parseInt(doc.data().time.three);
            break;

          case 4:
            this.exist = parseInt(doc.data().time.four);
            break;

          case 5:
            this.exist = parseInt(doc.data().time.five);
            break;

          case 6:
            this.exist = parseInt(doc.data().time.six);
            break;

          case 7:
            this.exist = parseInt(doc.data().time.seven);
            break;
        }
      });
  },
  watch: {},
  computed: {
    today() {
      return new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
    },
      checker(){
        if((this.today).equals(this.lastvisited)){
          return true;
        }
        else{
          return false;
        }
      }  
    },
  
  methods: {
    start() {
      var user = firebase.auth().currentUser.uid;
      var doc = db.collection("userdetails").doc(user);
      return doc
        .update({
          daycounter: 1,
          lastvisit: this.today
        })
        .then(
          doc.get().then(doc => {
            this.day = doc.data().daycounter;
            this.lastvisited = doc.data().lastvisit;
            
          })
        );
    },
    timesave() {
      var user = firebase.auth().currentUser.uid;
      var doc = db.collection("userdetails").doc(user);
      
      if(!this.checker){
        doc.update({
          daycounter: firebase.firestore.FieldValue.increment(1)
        })
      }
      switch (this.day) {
        case 1:
          return doc
            .update({
              "time.one": firebase.firestore.FieldValue.increment(parseInt(this.mins))
            })
            .then(() => {
              window.alert("Done");
              this.$refs.form.reset();
            });

        case 2:
          return doc
            .update({
              "time.two":firebase.firestore.FieldValue.increment(parseInt(this.mins))
            })
            .then(() => {
              alert("Done");
              this.$refs.form.reset();
            });

        case 3:
          return doc
            .update({
              "time.three": firebase.firestore.FieldValue.increment(parseInt(this.mins))
            })
            .then(() => {
              alert("Done");
              this.$refs.form.reset();
            });

        case 4:
          return doc
            .update({
              "time.four": firebase.firestore.FieldValue.increment(parseInt(this.mins))
            })
            .then(() => {
              alert("Done");
              this.$refs.form.reset();
            });

        case 5:
          return doc
            .update({
              "time.five": firebase.firestore.FieldValue.increment(parseInt(this.mins))
            })
            .then(() => {
              alert("Done");
              this.$refs.form.reset();
            });

        case 6:
          return doc
            .update({
              "time.six": firebase.firestore.FieldValue.increment(parseInt(this.mins))
            })
            .then(() => {
              alert("Done");
              this.$refs.form.reset();
            });

        case 7:
          return doc
            .update({
              "time.seven": firebase.firestore.FieldValue.increment(parseInt(this.mins))
            })
            .then(() => {
              alert("Done");
              this.$refs.form.reset();
            });

        default:
          break;
      }
      /*return doc
        .update({
          "time.one": this.exist + 0
        })
        .then();*/
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Raleway", sans-serif;
}
</style>