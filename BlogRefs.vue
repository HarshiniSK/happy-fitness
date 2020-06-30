<template>
  <div>
    <v-container>
      <v-row wrap>
        <v-col class="md-4" v-for="blg in blgdetails" :key="blg.id">
          <v-card class="success mx-auto" max-width="344">
            <v-img :src="blg.src" height="194"></v-img>
            <v-list-item>
              <v-list-item-content class="white--text">
                <v-list-item-title class="headline">{{blg.title}}</v-list-item-title>
                <v-list-item-subtitle class="white--text">{{blg.info}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-text></v-card-text>
            <v-card-actions>
              <v-btn text color="white">Contact</v-btn>
              <v-btn text color="white">Know More</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon color="white">mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="white">mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CallADoctor",
  data: () => ({
    drdetails: [
      {
        id: 1,
        title: "8 Ways to Focus on Getting Fit",
        info: <router-link to="https://www.everydayhealth.com/fitness/ways-to-focus-on-getting-fit.aspx"></router-link>,
        src:
          "https://lh3.googleusercontent.com/proxy/r6iGmSzQjoG3V39BOz717yenqfwWgdmIDU1JQx5trvAJivG42zNNt8s1MimQxbUQNUsdb3t53yGhUbfZloMG5s-8YIY"
      },
      
      {
        id: 2,
        title: "Exercise During Coronavirus: Tips for Staying Active",
        info: <router-link to="https://www.helpguide.org/articles/healthy-living/exercise-during-coronavirus.htm">CLICK HERE</router-link>,
        src:
          "ak.picdn.net/shutterstock/videos/1050477874/thumb/1.jpg?ip=x480"
      },
      {
        id: 3,
        title: "Obesity not related to how close you live to fast food or gyms",
        info: <router-link to="https://www.sciencedaily.com/releases/2020/05/200520124936.htm">CLICK HERE</router-link>,
        src:
          "https://ak.picdn.net/shutterstock/videos/1034789357/thumb/1.jpg?ip=x480"
      },
      {
        id: 4,
        title: "The Mental Health Benefits of Exercise",
        info: <router-link to="https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm">CLICK HERE</router-link>,
        src:
          "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/woman-home-cat-playing-relaxing-1296x728-header.jpg?w=1155"
      },
      {
        id: 5,
        title: "Physical fitness linked to better brain function",
        info: <router-link to="https://www.medicalnewstoday.com/articles/326310">CLICK HERE</router-link>,
        src:
          "https://images.indianexpress.com/2016/02/man-sweating_759_thinkstockphotos-478859462.jpg"
      },
      {
        id: 6,
        title: "The importance of a fitness education",
        info: <router-link to="https://www.thehindu.com/education/the-importance-of-a-fitness-education/article22331606.ece">CLICK HERE</router-link>,
        src:
          "https://theindianschool.in/web/wp-content/uploads/2012/04/bb.jpg"
      }
    ]
  })
};
</script>

<style scoped>
* {
  font-family: "Raleway", sans-serif;
}
</style>