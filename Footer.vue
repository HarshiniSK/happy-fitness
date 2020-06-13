<template>
    <v-footer
    color="success"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        class="my-2"
      >
        {{ link }}
      </v-btn>
      
      <v-col
        class="py-4 text-center white--text"
        cols="12"
      >
         <strong>Happy Fitness</strong> - {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Contact Us',
      ],
    }),
}
</script>

<style scoped>

</style>
