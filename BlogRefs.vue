<template>
    <v-container>
      <v-row wrap>
        <v-col class="md-4" v-for="blg in blgdetails" :key="blg.id">
          <v-card class="success mx-auto" max-width="344">
            <v-img :src="blg.src" height="194"></v-img>
            <v-card-text class="white--text text-uppercase">
                {{blg.title}}
            </v-card-text>
            <v-card-actions>
              <v-btn text :href="blg.info" target="_blank" class="success text-uppercase ml-1">Know More</v-btn>
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
</template>

<script>
export default {
  name: "BlogRefs",
  data: () => ({
    blgdetails: [
      {
        id: 1,
        title: "8 Ways to Focus on Getting Fit",
        info: "https://www.everydayhealth.com/fitness/ways-to-focus-on-getting-fit.aspx",
        src:
          "https://www.peachy.co.uk/wp-content/uploads/how-to-get-fit-healthy-on-budget-768x496.png"
      },
      
      {
        id: 2,
        title: "Exercise During Coronavirus: Tips for Staying Active",
        info: "https://www.helpguide.org/articles/healthy-living/exercise-during-coronavirus.htm",
        src:
          "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2020/05/p-1-90500544-the-best-masks-for-exercising-outside.jpg"
      },
      {
        id: 3,
        title: "Obesity not related to how close you live to fast food or gyms",
        info: "https://www.sciencedaily.com/releases/2020/05/200520124936.htm",
        src:
          "https://ak.picdn.net/shutterstock/videos/1034789357/thumb/1.jpg?ip=x480"
      },
      {
        id: 4,
        title: "The Mental Health Benefits of Exercise",
        info: "https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm",
        src:
          "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/woman-home-cat-playing-relaxing-1296x728-header.jpg?w=1155"
      },
      {
        id: 5,
        title: "Physical fitness linked to better brain function",
        info: "https://www.medicalnewstoday.com/articles/326310",
        src:
          "https://images.indianexpress.com/2016/02/man-sweating_759_thinkstockphotos-478859462.jpg"
      },
      {
        id: 6,
        title: "The importance of a fitness education",
        info: "https://www.thehindu.com/education/the-importance-of-a-fitness-education/article22331606.ece",
        src:
          "https://theindianschool.in/web/wp-content/uploads/2012/04/bb.jpg"
      }
    ]
  })
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");

* {
  font-family: "Raleway", sans-serif;
  text-decoration: none;
}

</style>