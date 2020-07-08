<template>
  <v-container>
    <v-row>
      <v-col cols="12">
          <v-btn class="success white--text" route to=/exercise>Go to exercise tracker</v-btn>
        </v-col>
      <v-col cols="12">
        <h3>{{chartOptions.chart.title}}</h3>
        <h4>{{chartOptions.chart.subtitle}}</h4>
        <GChart type="ColumnChart" :data="exercisetime" :options="chartOptions"/>
      </v-col>
      <v-col cols="12">
        <h3>Feedback</h3>Just a feedback from our side...maybe some suggestions can be given,
        Have to make few calculations from the report...
        Stay Tuned For Updates...Yayyy!!!This is Working!!!
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import {GoogleCharts} from 'google-charts';
import firebase from 'firebase';
import {db} from './firebaseInit';

export default {
  name: "ExerciseReport",
  components: {
    //
  },
  data: () => ({
    time:{},
    day:{},
    chartOptions: {
      chart: {
        title: "Weekly Report",
        subtitle: "Exercise Time"
      }
    }
  }),
  created(){
      var useruid = firebase.auth().currentUser.uid;
      var user_e = firebase.auth().currentUser.email;
      db.collection("userdetails")
      .where("email", "==", user_e)
      .onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
          this.day = change.doc.data().day;
        });
      });
      return db.collection('userdetails').doc(useruid).get().then(
        doc=>{
          this.time = doc.data().time;
          this.day = doc.data().day;
          console.log(this.time.one);
        }
      );
      
  },
  computed:{
      exercisetime(){
        var temp = [
          ["Days",this.day.one,this.day.two,this.day.three,this.day.four,this.day.five,this.day.six,this.day.seven],
          ["Time (in mins)",this.time.one,this.time.two,this.time.three,this.time.four,this.time.five,this.time.six,this.time.seven]
        ]
        return temp;
      }
  },
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");

* {
  font-family: "Raleway", sans-serif;
}

h3 {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
}
</style>
