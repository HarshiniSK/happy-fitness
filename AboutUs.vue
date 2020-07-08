<template>
  <v-container>
    <v-carousel hide-delimiters class="hidden-sm-and-down">
      <v-carousel-item v-for="(source,i) in sources" :key="i" :src="source"></v-carousel-item>
    </v-carousel>
    <v-row wrap class="hidden-sm-and-down">
      <v-col
        v-for="info in cardsdetails"
        :key="info.title"
        cols="12"
        lg="12"
        md="12"
        sm="12"
        xs="12"
        :align="info.position"
      >
       <v-card :class="info.class" max-width="500">
        <v-card-title :class="info.class" class="font-weight-bold">
              <v-list-item-title class="ltitle font-weight-bold ma-2">{{info.title}}</v-list-item-title>
        </v-card-title>
          <v-card-text :class="info.class" class="font-weight-bold">
              {{info.subtitle}}
          </v-card-text>
        </v-card> 
      </v-col>
    </v-row>

    <v-row class="hidden-md-and-up">
        <v-col
        v-for="info in cardsdetails"
        :key="info.title"
        cols="12"
        lg="12"
        md="12"
        sm="12"
        xs="12"
        :align="info.position"
      >
        <v-card :class="info.class" max-width="500">
        <v-card-title :class="info.class" class="font-weight-bold">
              <v-list-item-title class="xtitle font-weight-bold ma-2">{{info.title}}</v-list-item-title>
        </v-card-title>
          <v-card-text :class="info.class" class="font-weight-bold">
              {{info.subtitle}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "AboutUs",
  component: {
    
  },
  data: () => ({
    
    sources: [
      "https://images.indianexpress.com/2019/06/yoga-day-feature-1.jpg",
      "https://www.verywellfit.com/thmb/zwtN7JsLti2x9jK5WOHMF1_n04M=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/186543944-56a815373df78cf7729bf72e.JPG",
      "https://1.bp.blogspot.com/-XzXqF1IbpHw/UspO9axDvMI/AAAAAAAAAEU/cq7BAWwBhuM/s400/Background2.gif",
      "https://s.hdnux.com/photos/01/11/15/64/19193150/3/920x920.jpg"
    ],
    cardsdetails: [
      {
        title: "Our Mission",
        subtitle: "We believe in happy and healthy future of the World.",
        class: "text-md-left",
        position: "left"
      },
      {
        title: "What We Believe",
        subtitle: "Fitness is for anybody anywhere.",
        class: "text-md-right",
        position: "right"
      }
    ]
  })
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");
* {
  font-family: "Raleway", sans-serif;
}
.xtitle{
  font-size:1.5em;
}
.ltitle{
  font-size:1.5em;
}
</style>
