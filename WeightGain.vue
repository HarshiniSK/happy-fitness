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
        name: "WeightGain",
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
                        name: "Dry Fruit Shake ",
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSC9AwUJtJC_O2F1N5_2TP5KAC4xxczjTKOdQ&usqp=CAU",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "¼ cup almonds",
                                "¼ cup unsalted pistachios, shelled",
                                "¼ cup cashews",
                                "¼ cup raisins",    
                                "7 to 8 dates, chopped",
                                "2 to 3 dried figs, chopped",
                                "1 pinch saffron",
                                "2.5 cups milk - chilled soy or dairy milk",
                                "sugar as required",
                                "a few dry fruits for garnish - either slice or chop the dry fruits."
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                    "STEP 1: Soak figs in hot water for 30 minutes or in regular water for 2 to 3 hours. ",
                                    "STEP 2: Then add the dry fruits in a blender jar. ",
                                    "STEP 3: Add ½ cup milk and blend to a semi fine or fine paste. ",
                                    "STEP 4: Then add the remaining 2 cups milk. You can also add sugar if you want. ",
                                    "STEP 5: Blend well again. Stir and pour in glasses.Garnish with a few dry fruits slices and serve dry fruits milkshake immediately. "
                                    
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "Calories 181",
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
                        name: "Super green shake",
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRK0-znXPE669Osa9u7kZyzPWMFE1LRNYXC4A&usqp=CAU",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "1 cup (237 ml) of spinach", 
                                "1 avocado, 1 banana", 
                                "1 cup (237 ml) of pineapple and 1 scoop of unflavored or vanilla whey protein."
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Mix all the ingredients in a blender.",
                                "STEP 2: Sieve and serve."
                                
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
                        name: "Scrambled Eggs",
                        src: "https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Scrambled-with-Milk-930x620.jpg",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "4	large Eggs",
                                "1/4 cup	milk",
                                "pinch	salt",
                                "pinch	pepper",
                                "2 tsp.	butter"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Beat eggs, milk, salt and pepper in medium bowl until blended.",
                                "STEP 2: Heat butter in large nonstick skillet over medium heat until hot. Pour in egg mixture. As eggs begin to set, gently Pull the eggs across the pan with a spatula, forming large soft curds.",
                                "STEP 3: Continue cooking—pulling, lifting and folding eggs—until thickened and no visible liquid egg remains. Do not stir constantly. REMOVE from heat. Serve immediately."
                                
                                ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "Calories: 196",
                                    "Total fat: 14 g",
                                    "Saturated fat: 6 g",
                                    "Polyunsaturated fat: 2 g",
                                    "Monounsaturated fat: 5 g"
                                    
                                ]

                            },

                        ],

                        
                       
                     },
                      
                      {
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
                        name: "Curried Chicken Salad",
                        src: "https://pearlpoint.org/wp-content/uploads/2017/11/recipeimage-18.jpeg",
                         content:[
                          {
                            name : "Ingredients",
                            det:[
                                "1 small onion, sliced thinly",
                                "4 boneless, skinless chicken breast halves",
                                "2 teaspoons curry powder, divided",
                                "1/4 teaspoon garlic salt",
                                "1/4 cup orange juice",
                                "1 15-ounce can mandarin oranges, drained well",
                                " 4 scallions, chopped finely",
                                "1 cup golden raisins",
                                "2 tablespoons sweetened, flaked coconut, divided",
                                "1/4 cup light mayonnaise",
                                "24 whole-wheat crackers or your choice of bread"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Preheat oven to 400°F.",
                                "STEP 2: Scatter onion slices on the bottom of a medium baking dish. Place chicken in baking dish and sprinkle with curry and garlic salt. Pour orange juice around chicken.",
                                "STEP 3: Bake for 15 minutes or until cooked through. Cool, then cut into bite-sized pieces.",
                                "STEP 4 In a medium bowl, mix chicken, oranges, scallions, raisins, and 1 tablespoon of coconut. Stir in mayonnaise.",
                                "STEP 5: Transfer to serving bowl and top with remaining coconut. Serve with whole-wheat crackers, pita bread, whole wheat bread, or on top of salad greens!"

                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                     "Calories	300",
                                    "Total Fat	7 g"
                                ]

                            },

                        ],
                        
                       
                        },
                         {
                        name: "Orange Pineapple Smoothie",
                        src: " https://pearlpoint.org/wp-content/uploads/2017/11/recipeimage-32.jpeg",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                  "1 banana",
                                  "2 cups pineapple chunks packed in juice and drained",
                                  "1 cup orange juice",
                                  "1/4 cup nonfat milk",
                                  "2 Tbsp. honey",
                                  "4-5 ice cubes"                                
                            ]
                            },
                            {
                              name:"Preparation",
                              det:["STEP 1: Place all ingredients in blender and puree until smooth.",
                                   "STEP 2: Stir and Serve"
                                   
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "292 calories", 
                                    "0 g. total fat (0 g. saturated fat)", 
                                    "73 g. carbohydrates", 
                                    "4 g. protein", 
                                    "4 g. dietary fiber", 
                                    "20 mg. sodium"
                                    
                                    
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

