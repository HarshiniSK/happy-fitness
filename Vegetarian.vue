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
        name: "Vegetarian",
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
                        name: "Vegetable Lasagna",
                        src: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQy6Bvn2OHhcjuoKl5dF1XmiDL4r3Ppzojjw&usqp=CAU",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "1 tbsp rapeseed oil",
                                "2 onions sliced",
                                "2 large garlic cloves chopped",
                                "2 large courgettes diced (400g)",
                                "1 red 1 yellow pepper",
                                "400g deseeded and roughly sliced and chopped tomatoes",
                                "2 tbsp tomato purée",
                                "2 tsp vegetable bouillon",
                                "15g fresh basil chopped plus a few leaves",
                                "1 large aubergine sliced across length or width for maximum surface area",
                                "6 wholewheat lasagne sheets (105g)",
                                "125g vegetarian buffalo mozzarella, chopped"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                    "STEP 1: Cook the lasagna noodles in a large pot of boiling water for 10 minutes, or until al dente. Rinse with cold water, and drain.",
                                "STEP 2: In a large saucepan, cook and stir mushrooms, green peppers, onion, and garlic in oil. Stir in pasta sauce and basil; bring to a boil. Reduce heat, and simmer 15 minutes. ",
                                "STEP 3: Mix together ricotta, 2 cups mozzarella cheese.",
                                "STEP 4: Preheat oven to 350 degrees F (175 degrees C). Spread 1 cup tomato sauce into the bottom of a greased 9x13 inch baking dish. Layer 1/2 each, lasagna noodles, ricotta mix, sauce, and Parmesan cheese. Repeat layering, and top with remaining 2 cups mozzarella cheese.",
                                "STEP 5: Bake, uncovered, for 40 minutes. Let stand 15 minutes before serving."
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "Calories     314.1	", 
                                    "Calories from Fat     122.9 (39.1%)",
                                    "Total Fat     13.7g	", 
                                    "Saturated fat     5.5g",
                                    "Monounsaturated fat     3.3g",
                                    "Polyunsaturated fat     2.6g",
                                    "Cholesterol     31.6mg	",
                                    "Sodium     1005.7mg  ",
                                    "Potassium     384.2mg	",
                                    "Carbohydrates      32g",
                                    "Net carbs     27.8g",	
                                    "Sugar     5.7g"	,
                                    "Fiber      4.3g	18%",
                                    "Protein     15.5g	"
                                ]

                            },

                        ],
                        
                       
                        
                    },
                     {
                        name: "Mushroom Stroganoff",
                        src: " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4eqxqDVD6fKAUFnA1zGHYPCxsIyWOKasL-Q&usqp=CAU",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "basmati rice 200g",
                                "dried porcini mushrooms 15g",
                                "vegetable oil 1 tbsp",
                                "flat mushrooms 6, sliced",
                                "onion 1, thinly sliced",
                                "garlic 2 cloves, crushed",
                                "sweet smoked paprika 1 tbsp",
                                "tomato purée 1 tbsp",
                                "half-fat soured cream 200ml",
                                "flat-leaf parsley a handful of leaves, chopped"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1 Tip the rice into a small lidded pan with 400ml of water and a pinch of salt. Bring to the boil, turn down to a very gentle simmer, put on a lid and cook gently for 10 minutes. Remove from the heat and leave to steam for another 10 minutes before fluffing up with a fork.",
                                "STEP 2 Meanwhile, put the porcini mushrooms into a small bowl and pour over 150ml of just-boiled water. Heat the oil in a large non- stick frying pan and fry the flat mushrooms and onion for 10 minutes until all of the water has evaporated and everything is beginning to caramelise.",
                                "STEP 3 Add the garlic, paprika and tomato purée, and cook for 1 minute. Meanwhile, drain the porcini, keeping the liquid, and roughly chop. Add to the pan, along with the soaking liquid, turn down the heat to low and cook gently for 10 minutes, adding a splash of water if it’s a little thick. Stir through the soured cream and season.",
                                "STEP 4 Spoon the rice onto plates, spoon over the stroganoff and scatter with parsley."
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    " Calories 329",
                                    "fat 9g",
                                    "saturates 1g",
                                    "carbs 50g",
                                    "sugars 8g",
                                    "fibre 4g",
                                    "protein 11g",
                                    "salt 0.7g"
                                    
                                ]

                            },

                        ],
                        
                       
                     },
                      {
                        name: "Masala Oats",
                        src: " https://149366112.v2.pressablecdn.com/wp-content/uploads/2015/04/oats.jpg",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "3/4 cup Plain  Oats",
                                "1/2 cup chopped Vegetables (Carrots, Beans, Cauliflower, Peas",
                                "1 small chopped Onion",
                                "1 small chopped Tomato",
                                "1 Green Chilly chopped",
                                "1/2 tsp grated Ginger",
                                "10 – 12 Curry Leaves",
                                "1 tsp Mustard Seeds (Rai)",
                                "1/2 tsp Red Chilly Powder",
                                "1/2 tsp Coriander Powder","1/2 tsp garam Masala Powder",
                                "1/2 tsp Turmeric Powder","Salt to taste",
                                "2 cups water",
                                "1 tblsp Coriander Leaves",
                                "1 tsp Ghee / Oil"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: In a pan dry roast the oats on low flame for 5 mins. Take it out in a dry plate. Keep aside.",
                                "STEP 2: In the same pan now heat oil, add the mustard seeds. When the mustard begins to crackle add the curry leaves.",
                                "STEP 3: Now add the chopped onions and grated ginger.",
                                "STEP 4: Stir fry till the onions gets pink and translucent. Do not let them become brown or they will taste bitter.",
                                "STEP 5: Now add the chopped mix vegetables. Add the salt and cook for 5 mins so that they are partially cooked.",
                                "STEP 6: Now add the turmeric powder, green chilly red chilly powder, coriander powder, garam masala powder and chopped tomatoes.",
                                "STEP 7: Cook till the tomatoes get partially cooked.",
                                "STEP 8: Now add the dry roasted oats.",
                                "STEP 9: Also add 2 cups of water. Mix everything well.",
                                "STEP 10: Cover and cook for 5 mins. Now stir well with the ladle and add the chopped coriander leaves.Sprinkle lemon juice.",
                                "Your yummy healthy masala oats are ready. Serve it with tangy green chutney to make it more delectable. You can also serve dahi with it."
                                                
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "148    Cal",
                                    "26g    Carbs",
                                    "2g     Fat",
                                    "4g     Protein"
                                ]

                            },

                        ],
                        
                       
                      }, {
                        name: "Mixed Vegetable Pancake",
                        src: " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkGNQKMZn3WeMH6D37UJNte-wsSLDENg--2Q&usqp=CAU",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "40 gms Fine Wheat Flour (Maida)",
                                "100 ml Milk",
                                "3 tsp Oil",
                                "a pinch of Salt",
                                " 50 gms Potato (Aloo)",
                                "50 gms Cauliflower (Phool gobi)",
                                "50 gms Carrot (Gajar)",
                                "75 gms Peas (Matar)",
                                "50 gms Tomato (Tamatar)",
                                "1 tblsp Butter",
                                "1/2 tblsp Tomato Sauce",
                                "Salt and Chilli Powder to taste"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: To make the pancakes sift the flour along with the salt.",
                                "STEP 2: Add the egg and gradually add the milk.",
                                "STEP 3: Mix and beat thoroughly till the batter is smooth and free of lumps.",
                                "STEP 4: Allow the batter to remain in a cool piece for about an hour.",
                                "STEP 5: Heat little oil in a frying pan.",
                                "STEP 6: Pour a spoonful of the batter on it.",
                                "STEP 7: Cook one side till it is light brown and then turn the side.",
                                "STEP 8: Now cook on the other side.",
                                "STEP 9: Make the pancakes of all the batter.",
                                "STEP 10: To make the filling cut the vegetables into small pieces and carrots in shreds.",
                                "STEP 11: Heat butter in a pan , add the vegetables and the seasoning.",
                                "STEP 12: Coook it on low flame till vegetables are done.",
                                "STEP 13:Now add tomato sauce.",
                                "STEP 14:Spread this filling on the pancakes and roll them and serve hot with the chutney."
                                
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    " Calories	198.2",
                                    "Total Fat	6.2 g",
                                    "Cholesterol	2.5 mg",
                                    "Sodium	379.0 mg",
                                    "Potassium	369.6 mg",
                                    "Total Carbohydrate	30.4 g",
                                    "Dietary Fiber	5.9 g",
                                    "Sugars	5.0 g",
                                    "Protein	8.6 g"
                                    
                                ]

                            },

                        ],
                        
                       
                      },
                       
                        {
                        name: "Sesame Paneer ",
                        src: " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFXFQ5HzkkpNTGCT00Ea_LNQDb4U8FlvFHOg&usqp=CAU",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "200 gm cottage cheese(paneer) How to make paneer",
                                "4 tblsp refined flour",
                                "2-3 garlic buds ",
                                "1/2 cup water",
                                "1/2 tsp red chilly powder",
                                "1/2 tsp chat masala",
                                "salt to taste",
                                "1/2 cup bread powder",
                                "1 tblsp semolina",
                                "4 tblsp sesame seeds ",
                                "a pinch of dry red colour ",
                                "oil for frying"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Cut thick triangular paneer slices. Sprinkle salt and chat masala on both the sides and keep aside.",
                                "STEP 2: Mix remaining ingredients in a bowl and make a batter.",
                                "STEP 3: Dip paneer slices in the batter and coat it on all the sides.",
                                "STEP 4: Heat oil at low flame.",
                                "STEP 5: Deep fry all paneer slices until golden brown.",
                                "STEP 6: Take them out on a kitchen paper so as to soak extra oil.",
                                "STEP 7: Serve hot with some sauce or chutney."

                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                     "Calories	217",
                                    "Total Fat	14.3.1 g",
                                    "Cholesterol	0 mg",
                                    "Sodium	0.9 mg",
                                    "Potassium	162.6 mg",
                                    "Total Carbohydrate	14.1 g",
                                    "Dietary Fiber	0.9 g",
                                    "Protein	8.1 g"
                                ]

                            },

                        ],
                        
                       
                        },
                         {
                        name: "Beetroot hummus toasts",
                        src: " https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/12/beetroot.jpg?itok=X8GcYucs",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "2 slices seeded wholemeal soda bread",
                                "210g can chickpeas, drained",
                                "200g ready-cooked beetroot, sliced",
                                "1 tbsp lemon juice",
                                "1 small garlic clove",
                                "1 tsp rapeseed oil",
                                "30g feta, crumbled",
                                "6 pitted Kalamata olives, halved",
                                "a few fresh mint leaves"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:["STEP 1: Toast the bread – if the slices are quite long, halve them first.",
                                   "STEP 2: Meanwhile, tip the chickpeas into a bowl with half the beetroot, the lemon juice, garlic and oil, and blitz with a stick blender to make hummus. Spread on the toast, top with the remaining beetroot and scatter with feta, olives and mint."
                                
                                
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "kcal 381",
                                    "fat 12g",
                                    "saturates 3g",
                                    "carbs 47g",
                                    "sugars 11g",
                                    "fibre 11g",
                                    "protein 16g",
                                    "salt 1g"
                                    
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