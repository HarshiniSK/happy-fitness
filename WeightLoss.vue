<template>
    <v-container>
        <v-row wrap>
        <v-col class="md-4" v-for="(item,i) in recipes" :key="i">
          <v-card class="success mx-auto" max-width="344">
            <v-img :src="item.src" height="194"></v-img>
            <v-card-title class="white--text text-uppercase">{{item.name}}</v-card-title>
            <v-card-text class="white--text text-capitalize">
                <v-expansion-panels popout>
                <v-expansion-panel v-for="(c,i) in item.content" :key="i">
                  <v-expansion-panel-header>{{c.name}}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                  <v-row v-for="inn in c.det" :key="inn" wrap>
                     <v-col>
                       {{inn}}
                    </v-col>
                  </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    
            </v-card-text>
            <v-card-actions>
                            
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Detox",
        components:{

        },
        data(){
            return{
              titles:[
                "Ingredients",
                "Preparation"
              ],
                recipes:[
                    {
                        name: "Cucumber Mint Detox Drink",
                        src: " https://i.ndtvimg.com/i/2017-04/cucumber-mint-cooler_625x350_81492772061.jpg",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "1 Cucumber",
                                "10-12 mint leaves, fresh",
                                "2 Tbsp Lemon juice",
                                "Ice cubes",
                                "Iced Water",
                                "Lemon rings and mint leaves"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                    "STEP 1: Peel, chop and blend cucumber,  mint leaves and 1 cup of water.",
                                    "STEP 2: Strain and discard pulp.",
                                    "STEP 3: Add lemon juice, black salt and dilute with water if needed.",
                                    "STEP 4: Pour the beverages in glasses, put some ice cubes and garnish with lemon rings and mint leaves."
                                    
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "Calories 81",
                                    " Fat     0.5g	", 
                                    "Sodium     16mg  ",
                                    "Potassium     355mg	",
                                    "Carbohydrates      20g",	
                                    "Sugar     11.8g"	,
                                    "Fiber      5g",
                                    "Protein     2g	"
                                ]

                            },

                        ],
                        
                       
                        
                    },
                     {
                        name: "Radiant Lemonade",
                        src: " https://i0.wp.com/www.completemakeoveronline.com/wp-content/uploads/2019/04/photo-1549355974-709e2656a283.jpg?resize=331%2C494",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "1 apple, chopped",
                                "1 carrot, chopped",
                                "1/2 beetroot, sliced",
                                "2-3 slices white radish",
                                "1/2 tsp lemon zest",
                                "2 lemons (juiced)"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Mix all the ingredients in a blender.",
                                "STEP 2: Add little bit of water to adjust the consistency",
                                "STEP 3: Sieve and serve."
                                
                                ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    " Calories 297",
                                    "fat 20g",
                                    "saturates 3g",
                                    "carbs 27g",
                                    "sugars 4g",
                                    "fibre 9g",
                                    "protein 5g",
                                    "potassium 689mg"
                                    
                                ]

                            },

                        ],

                        
                       
                     },
                      {
                        name: "Honey-Lemon-Ginger Tea",
                        src: " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgFRRSH9dzqaiUDnAritkCTZKgpwhtHcQFoA&usqp=CAU",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "3 Cups Water",
                                "1 tsp Tea leaves, for every cup",
                                "1 tsp Lemon juice",
                                "1 tsp Honey"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: In a pan heat 3 cups of water.",
                                "STEP 2: Before it begins to boil add ginger.",
                                "STEP 3: Just as it starts to boil add the tea leaves, lemon juice and honey.",
                                "STEP 4: Strain it into a cup and enjoy!"
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "43    Calories",
                                    "9g    Carbs",
                                    "0.5g     Fat",
                                    "1g     Protein",
                                    "1mg   Sodium",
                                    "95mg  Potassium"

                                ]

                            },

                        ],
                        
                       
                      }, {
                        name: "Aam Panna",
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToTJ96CKpNGsFo5rMt981m-y8Logpw7fKgHg&usqp=CAU",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "500 gm green mangoes",
                                "1/2 cup sugar",
                                "2 tsp salt",
                                "2 tsp kala namak (black rock salt)",
                                "2 tsp kala namak (black rock salt)s",
                                "2 Tbsp finely chopped mint leaves",
                                "2 cups water"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Boil the mangoes till they become soft inside, and the skin gets dis colored.",
                                "STEP 2: When cool enough to handle, remove the skin and squeeze the pulp out of the mangoes.",
                                "STEP 3: Mix all the ingredients together, blend and add 2 cups of water.",
                                "STEP 4: Put some ice in the glasses and pour the panna over it."
                                
                                
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    " Calories	147",
                                    "Total Fat	 6g",
                                    "Sodium	 1mg",
                                    "Potassium	 191mg",
                                    "Carbohydrate	 21g",
                                    "Dietary Fiber	 2g",
                                    "Sugars	 16g",
                                    "Protein	 2g"
                                    
                                ]

                            },

                        ],
                        
                       
                      },
                       
                        {
                        name: "Fruit Infused Tea Recipe",
                        src: " CbkpST7CpF8ExO4Jsm02JmK0bZe4IFURAOI4ecVU20uAkEnZ3T9a3EyEt7VlPllM//Z",
                         content:[
                          {
                            name : "Ingredients",
                            det:[
                                "2 chamomile tea bags",
                                "1 orange",
                                "50 gms berries",
                                "50 gms blueberries",
                                "10 gms ginger",
                                "8-10 mint leaves",
                                "2 cups boiling water"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Brew together camomile tea bags, orange rind, berries, blueberries, mint leaves & ginger for four minutes ",
                                "STEP 2: Serve hot."

                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                     "Calories	271",
                                    "Total Fat	11 g",
                                    "Sodium	333 mg",
                                    "Potassium	479mg",
                                    "Total Carbohydrate	 35g",
                                    "Dietary Fiber	5g",
                                    "Protein	8g"
                                ]

                            },

                        ],
                        
                       
                        },
                         {
                        name: "Orange And Carrot Juice",
                        src: " https://cdn2.stylecraze.com/wp-content/uploads/2016/04/Good-Morning-Sunshine.jpg.webp",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                  "1 orange",
                                  "1 carrot",
                                  "1 tablespoon honey",
                                  "Coriander leaves",
                                  "Water",
                                  "Ice"                                
                            ]
                            },
                            {
                              name:"Preparation",
                              det:["STEP 1: Slice the carrot and peel the orange. Chop and toss them into the food processor.",
                                   "STEP 2: Add a tablespoon of honey and throw in some coriander leaves.",
                                   "STEP 3: Add a little water. Give it a spin.",
                                   "STEP 4: Add ice before drinking."
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "kcal 718",
                                    "fat 25g",
                                    "saturates 4.2g",
                                    "carbs 93g",
                                    "fibre 5.4g",
                                    "protein 34g"
                                    
                                    
                                ]

                            },

                        ],
                        
                       
                         }

                    
                ]
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
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");

* {
  font-family: "Raleway", sans-serif;
  text-decoration: none;
}

</style>
