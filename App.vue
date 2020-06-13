<template>
  <v-app>
    <Header/>
    <v-content>
      <WelcomeTimeLine/>
      <SocialMedia/>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import WelcomeTimeLine from "./components/WelcomeTimeLine.vue";
//import ContactUs from "./components/ContactUs.vue";
import SocialMedia from "./components/SocialMedia.vue";


export default {
  name: "App",

  components: {
    Header,
    WelcomeTimeLine,
    //ContactUs,
    SocialMedia,
    Footer,
  },

  data: () => ({
    //
  })
};
</script>
