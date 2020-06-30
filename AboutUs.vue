<!--template>
  <v-container>
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(source,i) in sources" :key="i" :src="source"></v-carousel-item>
    </v-carousel>
    <v-row wrap>
      <v-col v-for="info in cardsdetails" :key="info.title" cols="12" :align="info.position">
        <v-card :class="info.class" max-width="344" outlined>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{info.title}}</v-list-item-title>
            <v-list-item-subtitle>{{info.subtitle}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutUs",
  component: {},
  data() {
    return {
      sources: [
        "https://images.indianexpress.com/2019/06/yoga-day-feature-1.jpg",
        "https://www.verywellfit.com/thmb/zwtN7JsLti2x9jK5WOHMF1_n04M=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/186543944-56a815373df78cf7729bf72e.JPG",
        "https://1.bp.blogspot.com/-XzXqF1IbpHw/UspO9axDvMI/AAAAAAAAAEU/cq7BAWwBhuM/s400/Background2.gif",
        "https://s.hdnux.com/photos/01/11/15/64/19193150/3/920x920.jpg"
      ],
      cardsdetails: [
        {
          title: "Our Mission",
          subtitle: "We believe in happy and healthy future of the World",
          class: "text-md-left",
          position: "left"
        },
        {
          title: "What We Believe",
          subtitle: "Fitness is for anybody anywhere",
          class: "text-md-right",
          position: "right"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");

* {
  font-family: "Raleway", sans-serif;
}
</style-->

<template>
  <v-container>
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(source,i) in sources" :key="i" :src="source"></v-carousel-item>
    </v-carousel>
    <v-row wrap>
      <v-col
        v-for="info in cardsdetails"
        :key="info.title"
        cols="12"
        lg="12"
        md="12"
        sm="12"
        xs="12"
        :align="info.position"
        fontSize="100"
      >
        <v-card :class="info.class" max-width="400">
          <v-list-item-content>
            <v-list-item-title class="display-2 font-weight-bold ma-2">{{info.title}}</v-list-item-title>
            <v-list-item-subtitle class="font-weight-bold ma-2">{{info.subtitle}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutUs",
  component: {},
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
</style>
