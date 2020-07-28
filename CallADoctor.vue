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
        name: "Dr.Aakash Pathak",
        info: "Neurologist",
        src:
          "https://img.freepik.com/free-photo/friendly-indian-doctor-reviewing-medical-history-tablet_1262-12661.jpg?size=626&ext=jpg"
      },
      {
        id: 2,
        name: "Dr.Gavrav Thaneja",
        info: "Genral Physician",
        src:
          "https://t4.ftcdn.net/jpg/01/85/39/55/240_F_185395570_wUzaCFaFP6Nm7NxWvk5xCMLAdh12nSCZ.jpg"
      },
      {
        id: 3,
        name: "Dr.Kushi Vyas",
        info: "Nutritionist/Dietician",
        src:
          "https://ak.picdn.net/shutterstock/videos/1034789357/thumb/1.jpg?ip=x480"
      },
      {
        id: 4,
        name: "Dr.Ritu Rathee",
        info: "General Surgeon",
        src:
          "https://t4.ftcdn.net/jpg/01/58/42/95/240_F_158429544_ZNxbbm0RidVmWE7PmnuHj9I2yIDSxKrN.jpg"
      },
      {
        id: 5,
        name: "Dr.Sonakshi Bose",
        info: "Dermatologist",
        src:
          "https://thumbs.dreamstime.com/b/indian-beautiful-female-doctor-18398918.jpg"
      },
      {
        id: 6,
        name: "Dr.Sadia Jacob",
        info: "Cardiologist",
        src:
          "https://t4.ftcdn.net/jpg/03/20/74/45/240_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg"
      },
      {
        id: 7,
        name: "Dr.Ratan Shetty",
        info: "Neurologist",
        src:
          "https://www.nicepng.com/png/detail/254-2543791_indian-male-medical-students.png"
      },
      {
        id: 8,
        name: "Dr.Riaz Murthuzha",
        info: "Orthodontist",
        src:
          "https://img.etimg.com/photo/62710131/sijhemal.jpg"
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