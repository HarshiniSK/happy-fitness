<template>
  <v-container>
    <v-row class="hidden-sm-and-down">
      <v-col cols="12">
        <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover class>
          <v-carousel-item v-for="(quote, i) in quotes" :key="i">
            <v-sheet class="white black--text" height="100%">
              <v-row class="fill-height" align="center">
                <v-container>
                  <v-row wrap>
                    <v-col class="quote" cols="6">{{quote}}</v-col>
                    <v-col cols="6">
                      {{desctexts[i]}}
                      <br>
                      <v-btn class="ma-1 success" route :to="buttonroutes[i]">Click Here</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row class="hidden-md-and-up">
      <v-col cols="12">
        <v-carousel cycle height="400" hide-delimiters show-arrows-on-hover class>
          <v-carousel-item v-for="(quote, i) in quotes" :key="i">
            <v-sheet class="white black--text" height="100%">
              <v-row class="fill-height" align="center">
                <v-container class="ma-2">
                  <v-row wrap>
                    <v-col class="quote" cols="12">{{quote}}</v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">{{desctexts[i]}}</v-col>
                    <v-col cols="6">
                      <v-btn class="success" route :to="buttonroutes[i]">Click Here</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import WelcomeTimeLine from "./WelcomeTimeLine.vue";

export default {
  name: "HomePage",
  components: {
    //WelcomeTimeLine
  },
  data: () => ({
    buttontexts: [
      "BMI Calculator",
      "Blogs",
      "Call A Doctor",
      "Click Here",
      "Click Here"
    ],
    buttonroutes: [
      "/bmicalculator",
      "/blogrefs",
      "/calladoctor",
      "/dietplans",
      "/signup"
    ],
    desctexts: [
      "Want to check out your BMI?",
      "Ready to Read some Motivational Health Blogs?",
      "Thinking to get suggestions from doctors?",
      "Searching for diet plans?",
      "Planning to join with us?"
    ],
    quotes: [
      '"Slow Progress is better than No Progress"',
      '"Exercise Is Therapy"',
      '"Do something today, that your future self will thank you for"',
      '"' +
        "One meal won't make you unhealthy, just like one workout won't make you healthy" +
        '"',
      '"' + "Don't give up" + '"'
    ],
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4"
    ]
  })
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap");
* {
  font-family: "Raleway", sans-serif;
}
.quote {
  font-family: "Quicksand", sans-serif;
  font-size: 2em;
}
</style>