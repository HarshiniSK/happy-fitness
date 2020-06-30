<template>
    <v-container>
        <v-form ref="form">
            <v-row v-if="day == 0">
                <v-col>
                    You can keep daily track of your exercise time, here.<br>
                    Enter the time in minutes, for each day.<br>
                    You will have a report every 7 days.<br>
                    To start tracking,<br><v-btn class="sucess white--text text-capitalize" @click="start">Click here</v-btn> 
                </v-col>
            </v-row>
            <v-row v-if="day != 0">
                <v-col>
                    Enter your exercise time in mins below
                </v-col>
            </v-row>
            <v-row v-if="day != 0">
                <v-col cols="2">
                    <v-text-field color="success" label="Time (in mins)" :rules="rules" v-model="mins" required></v-text-field>
                </v-col>
            </v-row>
            <v-row v-if="day != 0">
                <v-col>
                    <v-btn @click="timesave">Save</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
import firebase from 'firebase';
import {db} from './firebaseInit'

    export default {
        name: 'Exercise',
        components:{

        },
        data () {
            return{
                //sysdate : new Date(),
                lastvisited : "",
                exist: 3,
                rules : [v => !!v || "Empty Field"],
                mins:0,
                day: 0,
            }
        },
        created(){
            var user=firebase.auth().currentUser.uid;
            return db.collection('userdetails').doc(user).get().then(
                doc=>{
                    this.day = doc.data().daycounter;
                }
            )
        },
        watch:{

        },
        computed:{
            today(){
                return new Date().toJSON().slice(0,10).replace(/-/g,'/');
            },
        },
        methods:{
            start(){
                var user=firebase.auth().currentUser.uid;
                var doc=db.collection('userdetails').doc(user);
                return doc.update({
                    daycounter: 1
                },
                ).then(
                    doc.get().then(
                        doc=>{
                            this.day = doc.data().daycounter;
                        }
                    )
                )
            },
            timesave(){
                var user=firebase.auth().currentUser.uid;
                var doc=db.collection('userdetails').doc(user);
                return doc.update({
                    'time.one': this.exist+3
                },
                ).then()
            }
        }
    }
</script>

<style lang="scss" scoped>
*{
  font-family : "Raleway", sans-serif;
}
</style>