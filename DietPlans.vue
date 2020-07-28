<template>
  <div>
    <v-container>
      <v-row wrap>
        <v-col class="md-4" v-for="diet in dietdetails" :key="diet.id">
          <v-card class="success mx-auto" max-width="344" route  :to="diet.link">
            <v-img :src="diet.src" height="194"></v-img>
            <v-list-item>
              <v-list-item-content class="white--text">
                <v-list-item-title class="headline">{{diet.name}}</v-list-item-title>
                <v-list-item-subtitle class="white--text">{{diet.info}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-text></v-card-text>
            <v-card-actions>
                <!--<v-btn>Know More</v-btn>-->
              
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DietPlans",
  data: () => ({
    dietdetails: [
      {
        id: 1,
        name: "Vegetarian",
        info: "",
        src:
          "https://wallpaperaccess.com/full/1537474.jpg",
          link: "/vegetarian",
      },
      {
        id: 2,
        name: "Vegan",
        info: "",
        src:
          "https://images.wallpaperscraft.com/image/vegan_the_inscription_lifestyle_139766_1920x1080.jpg",
          link : "/vegan"
      },
      {
        id: 3,
        name: "Detox",
        info: "",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDQ_4_Bpm-MSDxza9FmrdFHCjUIRGf-SXKjA&usqp=CAU",
          link : "/detox"
      },
      {
        id: 4,
        name: "Muscle Gain",
        info: "",
        src:
          "https://mysupplementinspector.com/wp-content/uploads/2020/04/keto-diet.jpg",
          link : "/muscle-gain"
      },
      {
        id: 5,
        name: "Weight Loss",
        info: "",
        src:
          "https://www.health-total.com/wp-content/themes/scalia/page_template/images/HT-new-website-Banner-weight-loss-for-woman-mob-banner.jpg",
          link : "/weight-loss"
      },
      {
        id: 6,
        name: "Weight Gain",
        info: "",
        src:
          "https://c0.wallpaperflare.com/preview/596/278/418/hazelnuts-measuring-weight-loss-gain-weight.jpg",
          link : "/weight-gain"
      },
      
    ]
  })
};
</script>

<style scoped>
* {
  font-family: "Raleway", sans-serif;
}
</style>