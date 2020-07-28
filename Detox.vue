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
                        src: " data:image/jpeg;base64,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",
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
