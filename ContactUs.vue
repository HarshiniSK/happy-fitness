<template>
<v-container>
  <v-form id="fbform" ref="form" v-if="valid">
      <v-row>
        <v-col cols="12">
          <v-textarea  v-on:keyup.enter="submitFeedBack" solo label="FeedBack" v-model="feedback" :rules="feedbackrules" required></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn class="success white--text" @click="submitFeedBack">Submit</v-btn>
        </v-col>
      </v-row>
      </v-form>
       <v-row>
       <v-col>
          <SocialMedia/>
       </v-col>
       </v-row>   
      <v-card v-if="dialog">
            <v-card-title class="success" primary-title>Thank you for your feedback</v-card-title>

            <v-card-text class="ma-3">{{feedback}}</v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success" text @click="resetForm">Close</v-btn>
            </v-card-actions>
          </v-card>
    </v-container>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
import { db } from "./firebaseInit";

export default {
  name: "ContactUs",
  components: {
    SocialMedia,
    
  },
  data: () => ({
    dialog: false,
    valid: true,
    feedback: "",
    feedbackrules: [v => !!v || "FeedBack is required"]
  }),
  methods: {
    submitFeedBack() {
      if (this.feedback != "") {
        db.collection("feedback")
          .add({
            content: this.feedback
          })
          .then(() => {
            this.dialog= true;
            this.valid=false;
          });
      } else {
        console.log("Empty FeedBack");
      }
    },
    resetForm() {
      this.valid = true;
      this.dialog = false;
      this.feedback="";      
    }
  }
};
</script>

<style scoped>
* {
  font-family: "Raleway", sans-serif;
}
</style>
