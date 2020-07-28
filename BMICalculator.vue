<template>
    <v-container>
        <v-snackbar v-model="snack" top absolute right>
            Please calculate your BMI, before checking diets.
            <v-btn text class="success--text" @click="snack=false">Close</v-btn>
        </v-snackbar>
        <v-snackbar v-model="saved" top absolute right>
            Your BMI is saved
            <v-btn text class="success--text" @click="saved=false">Close</v-btn>
        </v-snackbar>
       <div class="headline font-weight-bold ma-2">BMI Calculator</div>
        <v-form ref="form" id="bmi-form">
            <v-row>
                <v-col cols="4" sm="6" xs="6">
                <v-text-field v-on:keyup.enter="saveinfo" color="success" label="Weight (in kgs)" placeholder="In kgs" v-model="weight" required></v-text-field>
            </v-col>
            <v-col cols="4" lg="6" md="6" sm="6" xs="6">
                <v-text-field v-on:keyup.enter="saveinfo" color="success"  label="Height (in cms)" placeholder="In cms" v-model="height" required></v-text-field>
            </v-col>
            </v-row>
            <v-row>
            <v-col lg="6" md="6" sm="6" xs="6">
               <strong>Your BMI:</strong> {{bmi}}
            </v-col>
            <v-col lg="6" md="6" sm="6" xs="6">
               <strong>Status:</strong> {{status}}
            </v-col>
            </v-row>
            <v-row>
                <v-col v-if="isLoggedIn" lg="12" md="12" sm="12" xs="12">
                Save this?
                <v-btn class="success ma-1 text-capitalize" @click.prevent="saveinfo">Yes</v-btn>
                <v-btn class="error ma-1 text-capitalize" @click.prevent="resetinfo">No</v-btn>
            </v-col>
            </v-row>
            <v-row>
            <v-col v-if="isLoggedIn" lg="12" md="12" sm="12" xs="12">
                Want to view diet plans?
                <v-btn class="success white--text mr-2 text-capitalize" @click.prevent="movetodiets">Click Here!</v-btn>
            </v-col>
            <v-col v-if="!isLoggedIn" lg="12" md="12" sm="12" xs="12">
                To save your BMI and view diet plans, Sign In
                <v-btn class="success white--text mr-2 text-capitalize" route to=/signin>Click here</v-btn>
            </v-col>
            </v-row>
            
        </v-form>
    </v-container>
</template>

<script>
import firebase from 'firebase';
import {db} from './firebaseInit';

    export default {
        name: 'BMICalculator',
        components:{

        },
        data() {
            return{
                isLoggedIn: false,
                snack: false,
                saved: false,
                weight: "",
                height: "",
            }
        },
        computed:{
            bmi(){
                if(this.weight=="" || this.height=="" || this.weight==0 || this.height==0){
                    return "Calculating..."
                }
                return ((parseFloat(this.weight)*100*100) / (parseFloat(this.height) * parseFloat(this.height))).toFixed(2);
            },
            status(){
                if (this.bmi < 18.5){
                    return "You are considered Underweight and Possibly Malnourished"
                }
                else if(this.bmi < 24.9){
                    return "You are within a Healthy Weight Range for Young and Middle-Aged Adults"
                }
                else if(this.bmi < 29.9){
                    return "You are considered Overweight"
                }
                else if(this.bmi>29.9){
                    return "You are considered Obese"
                }
                else{
                    return "Calculating..."
                }
            }
        },
        created(){
            if(firebase.auth().currentUser){
                this.isLoggedIn = 'true';
            }
        },
        methods:{
            movetodiets(){
                
                    window.location.href="dietplans";
                
            },
            saveinfo(){
                if(this.bmi == 0.00 || this.bmi=="Calculating..."){
                    this.snack=true;
                }
                else{
                    var useruid = firebase.auth().currentUser.uid;
                    return db.collection('userdetails').doc(useruid).set(
                    {
                        latestbmi: parseFloat(this.bmi),
                        status: this.status,
                    },
                    { merge: true }
                    ).then(()=>{
                        this.saved=true;
                        this.$refs.form.reset();
                        this.height="";
                        this.weight="";
                    })
                    
                }
            },
            resetinfo(){
                //const form = document.querySelector['#bmi-form'];
                this.$refs.form.reset();
                this.height="";
                this.weight="";
                this.bmi="Calculating...";
                this.status="Calculating..."
            },            
        }
    }
</script>

<style lang="scss" scoped>
* {
  font-family: "Raleway", sans-serif;
}
</style>