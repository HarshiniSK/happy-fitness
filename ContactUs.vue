<template>
  <v-form id="fbform" ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-textarea solo label="FeedBack" v-model="feedback" :rules="feedbackrules" required></v-textarea>
        </v-col>
      </v-row>

      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" dark v-bind="attrs" v-on="on" @click="submitFeedBack">Submit</v-btn>
          </template>

          <v-card>
            <v-card-title class="success" primary-title>Thank you for your feedback</v-card-title>

            <v-card-text class="ma-3">{{feedback}}</v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success" text @click="resetForm">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <SocialMedia/>
    </v-container>
  </v-form>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
//import firebase from 'firebase';
import {db} from './firebaseInit';

export default {
  name: "ContactUs",
  components: {
    SocialMedia
  },
  data: () => ({
    dialog: false,
    valid: false,
    feedback: "",
    feedbackrules: [v => !!v || "FeedBack is required"]
  }),
  methods: {
    submitFeedBack() {
      if (this.feedback != "") {
        db.collection('feedback').add({
          content : this.feedback
        }).then(()=>{
          //console.log(this.feedback);
          //document.getElementById("fbform").reset();
          //window.location.reload();
          //console.log("Submitted Successfuly");
        })
        
      } else {
        console.log("Empty FeedBack");
      }
    },
    resetForm() {
      this.dialog = false;
      //window.location.reload();
      //console.log("Refreshed");
      //console.log("Second Time" + this.feedback);
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
* {
  font-family: "Raleway", sans-serif;
}
</style>
