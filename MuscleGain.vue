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
        name: "MuscleGain",
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
                        name: "Steak & Bean Burrito Bowl",
                        src: "https://i0.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/458046441/protein-dinner-blogger-steakbowl.jpg?ssl=1",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "4 3- ounce steaks boneless any cut",
                                "4 cups romaine lettuce washed and chopped",
                                "½ cup Mexican blend or mozzarella cheese shredded",
                                "1/2 cup sour cream optional",
                                "1/2 cup thinly sliced onions",
                                "1/2 cup thinly sliced bell peppers",
                                "1/2 cup chopped tomatoes",
                                "1 cup black beans canned",
                                "1/2 cup yellow corn canned",
                                "2 teaspoons oil",
                                "5-6 cups cooked cilantro lime rice",
                                "Cilantro lime marinade"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                    "STEP 1: Marinate the steak in the cilantro lime marinade for 2-3 hours in the fridge. If you are in a rush you can also marinate the steak and cook it right away. After the steak has marinated, heat a heavy duty pan or griddle and coat with 1 teaspoon of oil, cook the steaks for 2-3 minutes on each side then remove.",
                                    "STEP 2: After removing the steak from the pan add the sliced onions and bell peppers. be sure not to wash the pan in order to keep all the flavor of the steak. cook the onions and peppers for 2-5 minutes or until the edges are golden.",
                                    "STEP 3: While the steak is cooking chop the veggies and arrange along with the cilantro lime rice in a big bowl or platter. After the steak is cooked and cut layer the burrito bowls in small individual bowls.",
                                    "STEP 4: Place a layer of rice, a layer of beans, tomatoes, and corn, a layer of steak and onions, a layer of salad, and then top with a sprinkle of cheese and a teaspoon of sour cream."
                                    
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "450 calories", 
                                    "13 g fat (5 g saturated fat)", 
                                    "563 mg sodium", 
                                    "42 g carbs (6 g fiber, 3 g sugar)", 
                                    "41 g protein (calculated without sour cream and with ½ cup brown rice per serving)"
                                ]

                            },

                        ],
                        
                       
                        
                    },
                     {
                        name: "Baked Caprese Chicken",
                        src: "https://i0.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/112799182/protein-dinner-blogger-capresechicken.jpg?ssl=1",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "6oz/180g small chicken breasts (2 pieces)", 
                                "boneless and skinless",
                                "1/2 cup sun dried tomato (oil packed. Use enough to cover the chicken, cut into strips)",
                                "4 slices mozzarella cheese (or other melting cheese of choice)",
                                "leaves Handful of spinach",
                                "2 tsp olive oil"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Preheat oven to 180C/350F.",
                                "STEP 2: Whisk together the Italian Dressing ingredients in a bowl. It will be thicker than salad dressing.",
                                "STEP 3: Cut a pocket into each chicken breast, taking care not to cut all the way though.",
                                "STEP 4: Coat the chicken (inside and out) with the Italian Dressing.",
                                "STEP 5: Place chicken on work surface. Stuff with sun dried tomato, top with cheese then finish with spinach leaves. Just stuff in as much as you can.",
                                "STEP 6: Seal with toothpicks (just stick them in on the diagonal - see photo in post).",
                                "STEP 7: Heat oil in an ovenproof skillet over high heat. Add chicken and cook for 1 1/2 minutes on each side, or until golden.",
                                "STEP 8: Transfer to oven and cook for 15 minutes, or until cheese is melted and bubbly and chicken is cooked through. Rest for 3 minutes before serving, drizzled with the juices in the skillet."                          
                                ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    " 416 calories", 
                                    "22 g fat (7 g saturated fat)", 
                                    "780 mg sodium", 
                                    "10 g carbs (2 g fiber, 5 g sugar)", 
                                    "46 g protein"
                                    
                                ]

                            },

                        ],

                        
                       
                     },
                      {
                        name: "Shrimp Scampi",
                        src: "https://i2.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/775615522/protein-dinner-blogger-shrimpscampi.jpg?ssl=1",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "8 ounces linguine",
                                "2 tablespoons unsalted butter",
                                "1 pound medium shrimp, peeled and deveined",   
                                "3 cloves garlic, minced",
                                "1/4 teaspoon crushed red pepper flakes, or more, to taste",
                                "1/4 cup white wine*",
                                "1/4 cup freshly squeezed lemon juice",
                                "Kosher salt and freshly ground black pepper, to taste",
                                "Zest of 1 lemon",
                                "2 tablespoons chopped fresh parsley leaves",
                                "1/4 cup freshly grated Parmesan"
                                
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: In a large pot of boiling salted water, cook pasta according to package instructions; drain well.",
                                "STEP 2: Melt butter in a large skillet over medium high heat. Add shrimp, garlic and red pepper flakes. Cook, stirring occasionally, until pink, about 2-3 minutes.",
                                "STEP 3: Stir in wine and lemon juice; season with salt and pepper, to taste. Bring to a simmer; remove from heat and stir in pasta, lemon zest and parsley.",
                                "STEP 4: Serve immediately, garnished with Parmesan, if desired."
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    " 342 calories", 
                                    "8 g fat (4 g saturated fat)", 
                                    "317 mg sodium",
                                    "32 g carbs (2 g fiber, 1 g sugar)", 
                                    "31 g protein"
                                ]

                            },

                        ],
                        
                       
                      }, {
                        name: "Grilled Halibut & Salsa",
                        src: "https://i2.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/652085367/protein-dinner-blogger-halibut.jpg?ssl=1",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "2 6- ounce halibut filets",
                                "extra virgin olive oil",
                                "kosher salt and freshly ground black pepper",
                                "For the Tomato Avocado Salsa",
                                "1 pint heirloom cherry tomatoes sliced",
                                "1 avocado peeled, pitted and chopped",
                                "1/2 shallot thinly sliced",
                                "2 sprigs basil leaves only, slivered",
                                "1 tablespoon extra virgin olive oil",
                                "1 1/2 teaspoons golden balsamic vinegar I use DeLallo brand",
                                "kosher salt and freshly ground black pepper"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Preheat the grill on high heat. Drizzle the halibut filets with olive oil and season with kosher salt and freshly ground black pepper. Oil the grill grates with grapeseed oil then place the filets on the grill. Gently press the fish down on the grate and cook for 5 minutes on each side or until the fish is opaque and flakes easily.",
                                "STEP 2: While fish is cooking, add the sliced cherry tomatoes, avocado, shallot, and basil to a medium size bowl. Drizzle with the olive oil and golden balsamic vinegar and toss to coat. Season with kosher salt and freshly ground black pepper.",
                                "STEP 3: Top the fish with the Tomato and Avocado Salsa or try this Mango Salsa for a sweeter taste."
                               
                                
                                
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
                        name: "Zoodles With Crispy Tofu",
                        src: " https://i2.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/635665664/protein-dinner-blogger-tofuzoodles.jpg?ssl=1",
                         content:[
                          {
                            name : "Ingredients",
                            det:[
                                "1/2 cup peanut butter",
                                "1/3 cup sesame oil",
                                "1/3 cup light low sodium soy sauce",
                                "1/4 cup rice vinegar",
                                "2 tablespoons chili paste (like sambal oelek)",
                                "2 tablespoons sugar",
                                "1 clove garlic, minced",
                                "1 knob of fresh ginger, peeled and grated",
                                "zoodles and tofu",
                                "12 ounces extra firm tofu",
                                "4–6 zucchini",
                                "sesame seeds and scallions for topping"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Chili Sesame Sauce: Shake all the sauce ingredients in a jar or toss them in the food processor and give them a whirl. If you’re going to have this cold, refrigerate your sauce for a while.",
                                "STEP 2: Tofu: Press excess moisture out of the tofu. Cut into bite sized pieces. Heat a tiny bit of oil in a nonstick pan. Add the tofu and stir fry until golden brown. Add about 1/2 cup sauce and simmer until the sauce starts to evaporate / absorb into the tofu and becomes browned in the pan. Keep gently flipping and scraping browned bits off the bottom – after a while, you should end up with nicely golden brown tofu with some little yummy browned bits from the sauce.",
                                "STEP 3: All Together: Spiralize your zucchini and toss with about 1/4 cup sauce per serving. Top with tofu, sesame seeds, and scallions. Serve immediately."

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
                        name: "Cobb Salad",
                        src: " https://i1.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/393430035/protein-dinner-blogger-cobb.jpg?ssl=1",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                  "10 cups mixed salad greens",
                                  "8 ounces shredded cooked chicken breast",
                                  "4 slices turkey bacon , cooked to a desired crispness and crumbled",
                                  "3 large hard boiled eggs , sliced",
                                  "1 cup cherry tomatoes , halved",
                                  "1 avocado , sliced"                                
                            ]
                            },
                            {
                              name:"Preparation",
                              det:["STEP 1: Prepare the dressing by combining all ingredients in a mixing bowl; whisk together until thoroughly combined. Set aside.",
                                   "STEP 2: Arrange salad greens on a large plate.",
                                   "STEP 3: Arrange chicken, bacon, egg, tomatoes, avocado, and blue cheese on top of the salad greens.",
                                   "STEP 4: Drizzle the salad with previously prepared dressing and Serve"
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "400 calories",
                                    "25 g fat (6 g saturated fat)", 
                                    "462 mg sodium", 
                                    "19 g carbs (5 g fiber, 3 g sugar)", 
                                    "31 g protein "
                                    
                                    
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
