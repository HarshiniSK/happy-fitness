<template>
  <v-container>
    <v-row>
      <v-col class="md-12">
        <h3>{{chartOptions.chart.title}}</h3>
        <GChart type="ColumnChart" :data="exercisetime" :options="chartOptions"/>
      </v-col>
      <v-col class="md-12">
        <h3>Feedback</h3>Just a feedback from our side...maybe some suggestions can be given,
        Have to make few calculations from the report...
        Stay Tuned For Updates...Yayyy!!!This is Working!!!
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import {GoogleCharts} from 'google-charts';

export default {
  name: "ExerciseReport",
  components: {
    //
  },
  data: () => ({
    exercisetime: [
      ["Days", "Week 1", "Week 2", "Week 3", "Week 4"],
      ["Day 1", 60, 40, 75, 40],
      ["Day 2", 40, 60, 60, 30],
      ["Day 3", 75, 75, 40, 90],
      ["Day 4", 60, 40, 75, 80],
      ["Day 5", 30, 60, 75, 40],
      ["Day 6", 90, 80, 60, 75],
      ["Day 7", 45, 60, 45, 90]
    ],
    chartOptions: {
      chart: {
        title: "Monthly Report",
        subtitle: "Exercise Time"
      }
    }
  })
};
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
