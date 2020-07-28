<template>
  <v-card flat>
    <v-card-text>
        <v-row>
          <v-col cols="12">
            <h3>Catch us on social media:</h3>
          </v-col>
          </v-row>
          <v-row>
          <v-col cols="1" v-for="social in socials" :key="social" class="hidden-sm-and-down">
            <v-btn x-large icon color="green">
              <v-icon>{{social}}</v-icon>
            </v-btn>
          </v-col>
          <v-col v-for="(social,i) in socials" :key="i" class="hidden-md-and-up">
            <v-btn x-large icon color="green">
              <v-icon>{{social}}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    name: 'SocialMedia',
    data: () =>({
        socials :[
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>

<style scoped>
*{
  font-family: "Raleway", sans-serif;
}
</style>
