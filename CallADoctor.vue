<template>

    <v-container>
      <v-row wrap>
        <v-col class="md-4" v-for="dr in drdetails" :key="dr.id">
          <v-card class="success mx-auto" max-width="344">
            <v-img :src="dr.src" height="194"></v-img>
            <v-list-item>
              <v-list-item-content class="white--text">
                <v-list-item-title class="headline">{{dr.name}}</v-list-item-title>
                <v-list-item-subtitle class="white--text">{{dr.info}}</v-list-item-subtitle>
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
</template>

<script>
export default {
  name: "CallADoctor",
  data: () => ({
    drdetails: [
      {
        id: 1,
        name: "Dr.ABC",
        info: "Neurologist",
        src:
          "https://img.freepik.com/free-photo/friendly-indian-doctor-reviewing-medical-history-tablet_1262-12661.jpg?size=626&ext=jpg"
      },
      {
        id: 2,
        name: "Dr.ABC",
        info: "Neurologist",
        src:
          "https://img.freepik.com/free-photo/friendly-indian-doctor-reviewing-medical-history-tablet_1262-12661.jpg?size=626&ext=jpg"
      },
      {
        id: 3,
        name: "Dr.ABC",
        info: "Neurologist",
        src:
          "https://img.freepik.com/free-photo/friendly-indian-doctor-reviewing-medical-history-tablet_1262-12661.jpg?size=626&ext=jpg"
      },
      {
        id: 4,
        name: "Dr.ABC",
        info: "Neurologist",
        src:
          "https://img.freepik.com/free-photo/friendly-indian-doctor-reviewing-medical-history-tablet_1262-12661.jpg?size=626&ext=jpg"
      },
      {
        id: 5,
        name: "Dr.ABC",
        info: "Neurologist",
        src:
          "https://img.freepik.com/free-photo/friendly-indian-doctor-reviewing-medical-history-tablet_1262-12661.jpg?size=626&ext=jpg"
      },
      {
        id: 6,
        name: "Dr.ABC",
        info: "Neurologist",
        src:
          "https://img.freepik.com/free-photo/friendly-indian-doctor-reviewing-medical-history-tablet_1262-12661.jpg?size=626&ext=jpg"
      },
      {
        id: 7,
        name: "Dr.ABC",
        info: "Neurologist",
        src:
          "https://img.freepik.com/free-photo/friendly-indian-doctor-reviewing-medical-history-tablet_1262-12661.jpg?size=626&ext=jpg"
      },
      {
        id: 8,
        name: "Dr.ABC",
        info: "Neurologist",
        src:
          "https://img.freepik.com/free-photo/friendly-indian-doctor-reviewing-medical-history-tablet_1262-12661.jpg?size=626&ext=jpg"
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
