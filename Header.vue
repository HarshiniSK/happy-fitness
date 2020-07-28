<template>
    <nav>
        <v-toolbar app prominent :src="source" class="hidden-sm-and-down">
            <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
            <v-toolbar-title id="title" class="white--text">
                Happy Fitness
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="isLoggedIn" router to=/profilepage text class="signbtn ma-2 white--text">My Profile</v-btn>
            <v-btn v-if="isLoggedIn" @click="signout"  text class="signbtn ma-2 white--text">Sign Out</v-btn>
            <v-btn v-if="!isLoggedIn" router to=/signin text class="signbtn ma-2 white--text">Sign In</v-btn>
            <v-btn v-if="!isLoggedIn" router to=/signup text class="signbtn ma-2 white--text">Sign Up</v-btn>
        </v-toolbar>
        <v-toolbar app prominent :src="source" class="success hidden-md-and-up">
            <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
            <v-toolbar-title id="small-title" class="white--text">
                Happy Fitness
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-if="!isLoggedIn" class="signbtn ma-2" color="success" router to=/signin>
                <v-list-item-title>Sign In</v-list-item-title>
              </v-list-item>
              <v-list-item v-if="!isLoggedIn" class="signbtn ma-2" color="success" router to=/signup>
                <v-list-item-title>Sign Up</v-list-item-title>
              </v-list-item>
              <v-list-item v-if="isLoggedIn" class="signbtn ma-2" color="success" router to=/profilepage>
                <v-list-item-title>My Profile</v-list-item-title>
              </v-list-item>
              <v-list-item v-if="isLoggedIn" class="signbtn ma-2" color="success" @click="signout">
                <v-list-item-title>Sign Out</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-navigation-drawer absolute temporary v-model="drawer" class="success pa-5">
   <v-list>
     <v-header id="side-title" class="white--text">
       Happy Fitness
     </v-header>
      <v-subheader class="white--text">Welcome, {{userHandle}}</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="item in panelitems"
          :key="item.name" router :to="item.route"
        >
          <!--v-list-item-icon>
            <v-icon v-text="item.icon" class="white--text"></v-icon>
          </v-list-item-icon-->
          <v-list-item-content>
            <v-list-item-title v-text="item.name" class="white--text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <v-list-item-group v-if="isLoggedIn">
        <v-list-item router to=/dietplans>
          <!--v-list-item-icon>
              <v-icon v-text="calculate" class="white--text"></v-icon>
              <span class="material-icons">mdi-calculate</span>
          </v-list-item-icon-->
          <v-list-item-content>
            <v-list-item-title class="white--text">Diet Plans</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item router to=/exercise>
          <!--v-list-item-icon>
              <v-icon></v-icon>
          </v-list-item-icon-->
          <v-list-item-content>
            <v-list-item-title class="white--text">Exercise Tracker</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item router to=/exercisereport>
          <!--v-list-item-icon>
              <v-icon></v-icon>
          </v-list-item-icon-->
          <v-list-item-content>
            <v-list-item-title class="white--text">Exercise Report</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <!--v-list-item-icon>
              <v-icon></v-icon>
          </v-list-item-icon-->
          <v-list-item-content>
            <v-list-item-title class="white--text" @click="signout">Sign Out</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
    </nav>
</template>


<script>
import firebase from 'firebase';
import {db} from './firebaseInit';

export default{
    name: 'Header',
    components:{

    },

    data(){
      return{
        isLoggedIn: false,
        userHandle: 'Guest',
        drawer : false,
        source : "https://images.wallpaperscraft.com/image/glare_light_green_abstract_95934_1920x1080.jpg",
        panelitems:[
            {
              name:'Home',
              icon:'mdi-home',
              route:'/',
              
            },
            {
              name:'Blogs',
              icon:'mdi-chat',
              route:'/blogrefs',
              
            },
            {
              name:'BMI Calculator',
              icon:'mdi-calculate',
              route:'/bmicalculator',
              
            },
        ],
      }
    },
    created(){
      if(firebase.auth().currentUser){
        this.isLoggedIn= true;
        return db.collection('userdetails').doc(firebase.auth().currentUser.uid).get()
        .then(doc=>{
          if (!doc.exists) {
            console.log("No such document!");
          } 
          else{
            this.userHandle = doc.data().handle;
          }
        }).catch(err=>{
          console.log("Error getting document", err);
        });
      }
    },
    computed:{
      
    },
    methods:{
      signout : function(){
          firebase.auth().signOut().then(()=>{
            window.location.href='signin';
          })
      },
}}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

#title{
font-family: 'Satisfy', cursive;
font-size: 3em;
}

#small-title{
font-family: 'Satisfy', cursive;
font-size:2em;
}

#side-title{
font-family: 'Satisfy', cursive;
font-size: 1.5em;
}

.signbtn{
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
}
*{
  font-family: 'Raleway', sans-serif;
}
</style>