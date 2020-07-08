<template>
    <div>
        <div v-for="x in ud" :key="x.handle">
            {{x.handle}} <br>
            {{x.age}} <br>
        </div>
        {{temp}}
    </div>
</template>

<script>
//import firebase from 'firebase';
//import {db} from './firebaseInit';

    export default {
        name: 'DietPlans',
        components:{

        },
        data(){
            return{
                ud:[],
                temp:0
            }
        },
        computed:{
            
        },
        created(){
            
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>

</style>