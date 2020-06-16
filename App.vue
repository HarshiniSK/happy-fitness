<template>
  <v-app>
    <Header/>
    <v-content>
      <CallADoctor />
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
//import WelcomeTimeLine from "./components/WelcomeTimeLine.vue";
//import ContactUs from "./components/ContactUs.vue";
//import ExerciseReport from './components/ExerciseReport.vue'
import CallADoctor from "./components/CallADoctor.vue";
//import SocialMedia from "./components/SocialMedia.vue";


export default {
  name: "App",

  components: {
    Header,
    //ExerciseReport,
    //WelcomeTimeLine,
    //ContactUs,
    CallADoctor,
    //SocialMedia,
    Footer,
  },

  data: () => ({
    //
  })
};
</script>
