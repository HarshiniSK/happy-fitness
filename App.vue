 <template>
   
 <v-app>
    <Header/>
    <v-content>
      <WelcomeTimeLine/>
      <CallADoctor />
      <BlogRefs/>
      <AboutUs/>
      <SocialMedia/>
      
      
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
//import WelcomeTimeLine from "./components/WelcomeTimeLine.vue";
//import WelcomeTimeLine from "./components/WelcomeTimeLine.vue";
//import ContactUs from "./components/ContactUs.vue";
//import SocialMedia from "./components/SocialMedia.vue";
//import ExerciseReport from './components/ExerciseReport.vue'
//import CallADoctor from "./components/CallADoctor.vue";
import BlogRefs from "./components/BlogRefs.vue";
//import AboutUs from "./components/AboutUs.vue";

import SocialMedia from "./components/SocialMedia.vue";

export default {
  name: "App",
  components: {
    Header,
    //WelcomeTimeLine,
    //ExerciseReport,
    //WelcomeTimeLine,
    //ContactUs,
    
    //CallADoctor,
    BlogRefs,
    //AboutUs,
    SocialMedia,
    Footer,
  },
  data: () => ({
    //
  })
};
</script>