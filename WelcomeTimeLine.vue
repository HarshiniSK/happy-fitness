<template>
  <v-timeline class="mx-5">
    <v-timeline-item v-for="detail in details" :key="detail.caption" color="success">
      <v-card class="elevation-2 success lighten-5">
        <v-card-title class="headline">{{detail.caption}}</v-card-title>
        <v-card-text>{{detail.content}}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </template>


<script>
export default {
  name: "WelcomeTimeLine",
  data : () =>({
    details:[
      {caption:'Fitness Comes with Happiness', content:'You are only one workout away from a good mood' },
      {caption:'Experienced Trainers and Doctors', content:'100+ Doctors and Trainers for your personal guidence.' },
      {caption:'Fitness is for everyone, everywhere', content:'Wanna gain weight/ loose weigt/ build muscle/ stay fit....then you are at the right place' },
    ]
  }),
};
</script>

<style scoped>
</style>
