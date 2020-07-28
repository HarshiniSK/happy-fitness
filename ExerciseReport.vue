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
        <h3>Feedback</h3>
        Average Workout Time of The Week : {{average}} mins/day
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
    count: 1,
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
          this.count = change.doc.data().daycounter;
        });
      });
      return db.collection('userdetails').doc(useruid).get().then(
        doc=>{
          this.time = doc.data().time;
          this.day = doc.data().day;
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
      },
      average(){
        var sum = parseInt((this.time.one)+(this.time.two)+(this.time.three)+(this.time.four)+(this.time.five)+(this.time.six)+(this.time.seven));
        var avg = parseFloat(sum/this.count).toFixed(2);
        return avg;
      },
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
