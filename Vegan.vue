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
        name: "Vegan",
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
                        name: "Pineapple Sorbet",
                        src: " https://hurrythefoodup.com/wp-content/uploads/2015/04/Pinapple-Sorbet-With-Mint.jpg",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "1 can pineapple chunks (1 can = 20oz in juice, or ½ real pineapple)",
                                "1 cup mint, fresh"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                    "STEP 1: Drain the tin or chop up the real pineapple and put in bowl in freezer (it should take around 2 hours to freeze). Save a few chunks or a ring for garnish.",
                                    "STEP 2: When it’s frozen use a hand blender or food processor to blend, along with mint (also keep a few mint leaves aside). ",
                                    "STEP 3: If you're using fresh pineapple then I suggest blending first and freezing after, it seems to work better.",
                                    "STEP 4: When nicely mixed, place in bowls and garnish each with the remaining chunks and leaves.",
                                    "STEP 5: Serve immediately or put back in freezer until needed."
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
                        name: "Tangy Avocado Toast",
                        src: " https://peasandcrayons.com/wp-content/uploads/2019/04/avocado-toast-cherry-tomato-salsa-recipe-2.jpg",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "1 slice bread (ideally whole grain)",
                                "4 cherry tomatoes",
                                "1 tsp olive oil",
                                "½ medium avocado (½ avocado = about 50g)",
                                "1 tsp lemon juice",
                                "salt and pepper to taste"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Cut the cherry tomatoes in half.",
                                "STEP 2: Throw them in a pan with olive oil and let them fry until soft (about 5 minutes).",
                                "STEP 3: Meanwhile mash your avocado and sprinkle in some lemon.",
                                "STEP 4:Now assemble everything together, season with salt and pepper. Sublime.", 
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
                        name: "Banana Oatmeal Cookies",
                        src: " https://hurrythefoodup.com/wp-content/uploads/2015/03/Banana-Oats-Fitness-Cookies-4-250x250.jpg",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "2 ripe banana",
                               " 1 cup rolled oats (oatmeal or porridge oats work really well)",
                                "1 tsp cinnamon",
                                "1 small handful raisins",
                                "1 small handful walnuts (crumbled)",
                                "1 small handful sesame seeds (toasted)"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Preheat the oven to 180°C (360°F)",
                                "STEP 2: Get a bowl and and mash the bananas until they’re mushy",
                                "STEP 3: Add the cup of oats and any of the optional ingredients",
                                "STEP 4: Stir until everything is nicely mixed.",
                                "STEP 5: Put baking paper on the tray so the cookies don’t stick. If you don’t have that make sure to grease the baking tray with butter (or olive oil if you’re vegan)",
                                "STEP 6: To make the cookie shape just grab a spoon and scoop a decent amount from the mixture onto the baking tray like I did in the photo above. It’s super quick and easy.",
                                "STEP 7: Off it goes into the oven for about 15 – 20 minutes.Done!!"
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
                        name: "Vegan Energy Bar",
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4g_YN0-S7dCyoGdqs36MFJUpL9YMsEQbZTQ&usqp=CAU",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "5 dates, dried",
                                "4 figs",
                                "3 tbsp almonds",
                                "3 tbsp hazelnuts",
                                "3 tbsp oatmeal",
                                "1 tbsp sesame seeds",
                                "3 tbsp agave syrup (or maple syrup)"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Pop the stones out of the dates and put them, the dried figs and half of the almonds and hazelnuts into a food processor and process until the mixture is uniform in texture.",
                                "STEP 2: Roughly chop the rest of almonds and hazelnuts.",
                                "STEP 3: Pour the mixture into a mixing bowl and add the rest of almonds and hazelnuts, the oatmeal, sesame seeds and agave/maple syrup. Mix well with a spoon.",
                                "STEP 4: Lay the mixture between two oven paper sheets and flatten the dough (using a roller or similar) to about 0.5cm thick.",
                                "STEP 5: Stick it in the fridge for at least two hours, all night if possible.",
                                "STEP 6: Cut into bars and store wrapped in the oven paper inside sealed container."
                                
                                
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
                        name: " Quinoa Salad",
                        src: " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUUytr7iXTghKPoAHBc9z_KpoW1oqtDkIw1Q&usqp=CAU",
                         content:[
                          {
                            name : "Ingredients",
                            det:[
                                "¾ cup quinoa",
                                "1 stick lemongrass",
                                "¼ papaya (¼ = roughly 300g; alternatively use mango)",
                                "1 handful peanuts",
                                "2 tbsp sesame seeds",
                                "1 tbsp peanut oil (or olive oil)",
                                "1 handful sugar snap peas (green snaps are also fine)",
                                "½ red onion",
                                "1 bunch Thai basil, fresh (regular basil is fine too)",
                                "1 bunch mint, fresh",
                                "3 tsp coconut flakes",
                                "1 tsp hot sauce (eg. sriracha)",
                                "½ tbsp lemon juice",
                                "1 thumb ginger, fresh (grated)",
                                "salt"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Cook the quinoa according to instructions. Smack the lemongrass stick on the table to “open it up”, add it to the quinoa with a pinch of salt. ",
                                "STEP 2: When the quinoa is ready, remove the lemongrass.",
                                "STEP 3: While the quinoa is cooking, peel the papaya, take out the seeds and cut into small cubes. Add them to a mixing bowl.",
                                "STEP 4: If using mango, the easiest way to get the flesh out is to cut the sides off and use a glass to separate the skin from fruit.",
                                "STEP 5: Chop the peanuts roughly, then roast them (if not already roasted) together with the sesame seeds in a pan on medium heat for 2-3 minutes. Off they go into the bowl as well.",
                                "STEP 6: In the same pan and with some peanut oil gently fry the pea snaps for 1 minute and tip them into the bowl as well.",
                                "STEP 7: Thinly slice the red onion, chop the thai basil and mint leaves. Together with the quinoa, mix it all with the other ingredients.",
                                "STEP 8: Finish the salad off with lemon (or lime) juice, coconut flakes, hot sauce and the grated ginger. If you fancy garlic, now is the time to grate it in as well."

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
                        name: "Tofu Bolognese",
                        src: " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZh-5afqDKnbKFN8xp5xdSBOFbotyyA518AA&usqp=CAU",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                  "3 tbsp olive oil",
                                  "14 oz firm tofu ",
                                  "9 oz pasta ,(wholegrain )",
                                  "1 red onion",
                                  "2 clove garlic",
                                  "1 small can tomatoes (1 small can = 14.5 oz)",
                                  "2 tbsp tomato paste",
                                  "1 handful basil, fresh (or 2 tbsp frozen or dry basil)",
                                  "1 tsp maple syrup (or brown sugar)",
                                  "salt and pepper to taste"                                
                            ]
                            },
                            {
                              name:"Preparation",
                              det:["STEP 1: Cook the pasta as instructed. Once finished, add a tbsp of olive oil and some salt and oregano for taste.",
                                   "STEP 2: Dice the onion and garlic into small pieces.",
                                   "STEP 3: Heat up oil in a pan and add the onion and garlic. Saute for 2-3 minutes. Now pour in the chopped tomatoes, tomato paste, basil, maple syrup, salt and pepper. Let it simmer",
                                   "STEP 4: Dice the tofu into small pieces or crumble it for a mince like effect.",
                                   "STEP 5: Heat up oil to medium heat in a large frying pan and add the tofu. Add some salt and let it fry for 15 min or until it’s crunchy. Make sure to stir occasionally, have patience and taste test occasionally! If you crumbled it, reduce cooking time by about 3 minutes.",
                                   "STEP 6: Once everything is ready, stick some pasta on your plate, pour the sauce on top and add the tofu.Enjoy!!"
                                
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
