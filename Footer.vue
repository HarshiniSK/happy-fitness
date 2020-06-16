<template>
  <v-footer color="success" padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" color="white" text class="my-2 buttons">{{ link }}</v-btn>

      <v-col class="py-4 text-center white--text" cols="12">
        <strong>Happy Fitness</strong>
        - {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: ["Home", "About Us", "Contact Us"]
  })
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
strong {
  font-family: "Satisfy", cursive;
  font-size: 1.3em;
}

.buttons {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
}
</style>
