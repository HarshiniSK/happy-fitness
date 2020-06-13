<template>
    <nav>
        <v-toolbar app prominent :src="source">
            <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
            <v-toolbar-title id="title" class="white--text">
                Happy Fitness
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text class="signbtn ma-2 white--text">Sign In</v-btn>
            <v-btn text class="signbtn ma-2 white--text">Sign Up</v-btn>
        </v-toolbar>
    </nav>
</template>

<script>
export default{
    name: 'Header',
    data: () => ({
        drawer : false,
        source : "https://images.wallpaperscraft.com/image/glare_light_green_abstract_95934_1920x1080.jpg"
    }),
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

#title{
font-family: 'Satisfy', cursive;
font-size: 3em;
}

.signbtn{
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
}

</style>