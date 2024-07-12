import Grilled_Salmon_with_Quinoa from "../images/Grilled_Salmon_with_Quinoa.png";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import Vegetarian_Buddha_Bowl from "../images/Vegetarian_Buddha_Bowl.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import Protein_Pancakes from "../images/Protein_Pancakes.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import Mediterranean_Salad from "../images/Mediterranean_Salad.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import Chicken_Stir_Fry from "../images/Chicken_Stir_Fry.jpg";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

import Grilled_Tofu_Steak from "../images/Grilled Tofu Steak.jpg";
import Spinach_Ricotta_Stuffed_Shells from "../images/Spinach Ricotta Stuffed Shells.jpg";
import Teriyaki_Chicken_Bowl from "../images/Teriyaki Chicken Bowl.jpg";
import Lentil_Soup from "../images/Lentil Soup.jpg";
import BBQ_Jackfruit_Sandwich from "../images/BBQ Jackfruit Sandwich.jpg";
import Zucchini_Noodles_with_Pesto from "../images/Zucchini Noodles with Pesto.jpg";
import Sweet_Potato_Chili from "../images/Sweet Potato Chili.jpg";
import Avocado_Salmon_Sushi_Bowl from "../images/Avocado Salmon Sushi Bowl.jpg";
import Thai_Tofu_Curry from "../images/Thai Tofu Curry.jpg";
import Cauliflower_Steak from "../images/Cauliflower Steak.jpg";
import Quinoa_Stuffed_Bell_Peppers from "../images/Quinoa Stuffed Bell Peppers.jpg";
import Chickpea_Curry from "../images/Chickpea Curry.jpg";
import Caprese_Salad from "../images/Caprese Salad.jpg";
import Mushroom_Risotto from "../images/Mushroom Risotto.jpg";
import Falafel_Wrap from "../images/Falafel Wrap.jpg";
import Hawaiian_Poke_Bowl from "../images/Hawaiian Poke Bowl.jpg";
import Butternut_Squash_Soup from "../images/Butternut Squash Soup.jpg";
import Portobello_Burger from "../images/Portobello Burger.jpeg";
import Thai_Quinoa_Salad from "../images/Thai Quinoa Salad.jpg";
import Grilled_Chicken_Caesar_Salad from "../images/Grilled Chicken Caesar Salad.jpg";
import Turkey_Meatballs_with_Zoodles from "../images/Turkey Meatballs with Zoodles.jpg";
import Black_Bean_and_Quinoa_Salad from "../images/Black Bean and Quinoa Salad.jpg";
import Spicy_Tuna_Wrap from "../images/Spicy Tuna Wrap.jpg";
import Lemon_Herb_Chicken from "../images/Lemon Herb Chicken.jpg";
import Greek_Yogurt_Parfait from "../images/Greek Yogurt Parfait.jpg";


const products = [
  {
    id: "1",
    title: "Grilled Salmon with Quinoa",
    price: 12.99,
    image01: Grilled_Salmon_with_Quinoa,
    image02: product_02_image_02,
    image03: product_02_image_03,
    meal_category: "Protein Boost",
    mealTime: "Lunch",
    dietary_options: ["Pescatarian", "Gluten-free"],
    desc: "Delicious grilled salmon served with nutritious quinoa.",
    hashtags: ["LOW CARB", "LOW-CALORIE", "NO ADDED GLUTEN", "KID FRIENDLY"],
  },
  {
    id: "2",
    title: "Vegetarian Buddha Bowl",
    price: 10.49,
    image01: Vegetarian_Buddha_Bowl,
    image02: product_03_image_02,
    image03: product_03_image_03,
    meal_category: "Light and Green",
    mealTime: "Dinner",
    dietary_options: ["Vegetarian", "Vegan", "Gluten-free"],
    desc: "A balanced vegetarian bowl packed with fresh veggies and grains.",
    hashtags: ["LOW-CALORIE",  "NUTRITIOUS","KID FRIENDLY"],
  },
  {
    id: "3",
    title: "Protein Pancakes",
    price: 8.99,
    image01: Protein_Pancakes,
    image02: product_04_image_02,
    image03: product_04_image_03,
    meal_category: "Protein Boost",
    mealTime: "Breakfast",
    dietary_options: ["Gluten-free"],
    desc: "Fluffy pancakes rich in protein, perfect for a hearty breakfast.",
    hashtags: ["HIGH PROTEIN", "LOW-CALORIE", "NO ADDED GLUTEN", "KID FRIENDLY"],
  },
  {
    id: "4",
    title: "Mediterranean Salad",
    price: 9.99,
    image01: Mediterranean_Salad,
    image02: product_05_image_02,
    image03: product_05_image_03,
    meal_category: "Light and Green",
    mealTime: "Lunch",
    dietary_options: ["Vegetarian", "Vegan", "Gluten-free"],
    desc: "Fresh salad with Mediterranean flavors and a light dressing.",
    hashtags: ["LOW-CALORIE", "VEGAN","NO ADDED GLUTEN", "KID FRIENDLY"],
  },
  {
    id: "5",
    title: "Chicken Stir-Fry",
    price: 11.49,
    image01: Chicken_Stir_Fry,
    image02: product_06_image_02,
    image03: product_06_image_03,
    meal_category: "Yummy Junkies",
    mealTime: "Dinner",
    dietary_options: ["Gluten-free"],
    desc: "Savory chicken stir-fried with vegetables and served hot.",
    hashtags: ["HIGH PROTEIN", "LOW-CALORIE", "NO ADDED GLUTEN"],
  },
  {
    id: "6",
    title: "Grilled Tofu Steak",
    price: 10.99,
    image01: Grilled_Tofu_Steak,
    meal_category: "Protein Boost",
    mealTime: "Dinner",
    dietary_options: ["Vegetarian", "Vegan", "Gluten-free"],
    desc: "Hearty tofu steak grilled to perfection.",
    hashtags: ["HIGH PROTEIN", "LOW-CALORIE", "VEGETARIAN"],
  },
  {
    id: "7",
    title: "Spinach Ricotta Stuffed Shells",
    price: 9.49,
    image01: Spinach_Ricotta_Stuffed_Shells,
    meal_category: "Yummy Junkies",
    mealTime: "Dinner",
    dietary_options: ["Vegetarian"],
    desc: "Delicious stuffed pasta shells with spinach and ricotta cheese.",
    hashtags: ["COMFORT FOOD", "VEGETARIAN", "KID FRIENDLY"],
  },
  {
    id: "8",
    title: "Teriyaki Chicken Bowl",
    price: 11.99,
    image01: Teriyaki_Chicken_Bowl,
    meal_category: "Yummy Junkies",
    mealTime: "Lunch",
    dietary_options: ["Gluten-free"],
    desc: "Flavorful teriyaki chicken served over rice with vegetables.",
    hashtags: ["ASIAN CUISINE", "GLUTEN-FREE", "KID FRIENDLY"],
  },
  {
    id: "9",
    title: "Lentil Soup",
    price: 7.99,
    image01: Lentil_Soup,
    meal_category: "Comfort Food",
    mealTime: "Lunch",
    dietary_options: ["Vegetarian", "Vegan"],
    desc: "Hearty lentil soup packed with vegetables and spices.",
    hashtags: ["COMFORT FOOD", "VEGAN", "HEARTY"],
  },
  {
    id: "10",
    title: "BBQ Jackfruit Sandwich",
    price: 8.99,
    image01: BBQ_Jackfruit_Sandwich,
    meal_category: "Yummy Junkies",
    mealTime: "Lunch",
    dietary_options: ["Vegetarian", "Vegan", "Gluten-free"],
    desc: "Savory BBQ jackfruit sandwich with coleslaw on whole wheat bun.",
    hashtags: ["VEGETARIAN", "BBQ FLAVOR", "KID FRIENDLY"],
  },
  {
    id: "11",
    title: "Zucchini Noodles with Pesto",
    price: 9.49,
    image01: Zucchini_Noodles_with_Pesto,
    meal_category: "Light and Green",
    mealTime: "Dinner",
    dietary_options: ["Vegetarian", "Vegan", "Gluten-free"],
    desc: "Healthy zucchini noodles tossed in pesto sauce.",
    hashtags: ["LOW-CALORIE", "NUTRITIOUS", "KID FRIENDLY"],
  },
  {
    id: "12",
    title: "Sweet Potato Chili",
    price: 8.99,
    image01: Sweet_Potato_Chili,
    meal_category: "Comfort Food",
    mealTime: "Dinner",
    dietary_options: ["Vegetarian", "Vegan", "Gluten-free"],
    desc: "Hearty chili made with sweet potatoes and beans.",
    hashtags: ["COMFORT FOOD", "VEGAN", "GLUTEN-FREE"],
  },
  {
    id: "13",
    title: "Avocado Salmon Sushi Bowl",
    price: 12.49,
    image01: Avocado_Salmon_Sushi_Bowl,
    meal_category: "Yummy Junkies",
    mealTime: "Lunch",
    dietary_options: ["Pescatarian", "Gluten-free"],
    desc: "Fresh sushi bowl with avocado, salmon, and sushi rice.",
    hashtags: ["ASIAN CUISINE", "PESCETARIAN", "HEALTHY"],
  },
  {
    id: "14",
    title: "Thai Tofu Curry",
    price: 10.99,
    image01: Thai_Tofu_Curry,
    meal_category: "Yummy Junkies",
    mealTime: "Dinner",
    dietary_options: ["Vegetarian", "Vegan", "Gluten-free"],
    desc: "Spicy Thai curry with tofu and vegetables.",
    hashtags: ["ASIAN CUISINE", "SPICY", "VEGETARIAN"],
  },
  {
    id: "15",
    title: "Cauliflower Steak",
    price: 9.99,
    image01: Cauliflower_Steak,
    meal_category: "Light and Green",
    mealTime: "Dinner",
    dietary_options: ["Vegetarian", "Vegan", "Gluten-free"],
    desc: "Roasted cauliflower steak with herbs and spices.",
    hashtags: ["VEGETARIAN", "HEALTHY", "GLUTEN-FREE"],
  },
  {
    id: "16",
    title: "Quinoa Stuffed Bell Peppers",
    price: 9.99,
    image01: Quinoa_Stuffed_Bell_Peppers,
    meal_category: "Light and Green",
    mealTime: "Dinner",
    dietary_options: ["Vegetarian", "Vegan", "Gluten-free"],
    desc: "Bell peppers stuffed with quinoa, vegetables, and herbs.",
    hashtags: ["HEALTHY", "VEGETARIAN", "GLUTEN-FREE"],
  },
  {
    id: "17",
    title: "Chickpea Curry",
    price: 8.49,
    image01: Chickpea_Curry,
    meal_category: "Yummy Junkies",
    mealTime: "Dinner",
    dietary_options: ["Vegetarian", "Vegan", "Gluten-free"],
    desc: "Rich and creamy curry made with chickpeas and spices.",
    hashtags: ["VEGAN", "CURRY LOVERS", "GLUTEN-FREE"],
  },
  {
    id: "18",
    title: "Caprese Salad",
    price: 7.99,
    image01: Caprese_Salad,
    meal_category: "Light and Green",
    mealTime: "Lunch",
    dietary_options: ["Vegetarian"],
    desc: "Classic Italian salad with fresh tomatoes, mozzarella, and basil.",
    hashtags: ["ITALIAN CUISINE", "VEGETARIAN", "FRESH"],
  },
  {
    id: "19",
    title: "Mushroom Risotto",
    price: 10.99,
    image01: Mushroom_Risotto,
    meal_category: "Comfort Food",
    mealTime: "Dinner",
    dietary_options: ["Vegetarian"],
    desc: "Creamy risotto with mushrooms, garlic, and Parmesan cheese.",
    hashtags: ["RISOTTO", "COMFORT FOOD", "VEGETARIAN"],
  },
  {
    id: "20",
    title: "Falafel Wrap",
    price: 8.99,
    image01: Falafel_Wrap,
    meal_category: "Light and Green",
    mealTime: "Lunch",
    dietary_options: ["Vegetarian", "Vegan"],
    desc: "Homemade falafel wrapped in pita bread with veggies and tahini sauce.",
    hashtags: ["MIDDLE EASTERN", "VEGETARIAN", "WRAP"],
  },
  {
    id: "21",
    title: "Hawaiian Poke Bowl",
    price: 11.49,
    image01: Hawaiian_Poke_Bowl,
    meal_category: "Yummy Junkies",
    mealTime: "Lunch",
    dietary_options: ["Pescatarian", "Gluten-free"],
    desc: "Fresh poke bowl with tuna, rice, avocado, and sesame seeds.",
    hashtags: ["POKE BOWL", "ASIAN CUISINE", "PESCETARIAN"],
  },
  {
    id: "22",
    title: "Butternut Squash Soup",
    price: 7.99,
    image01: Butternut_Squash_Soup,
    meal_category: "Light and Green",
    mealTime: "Lunch",
    dietary_options: ["Vegetarian", "Vegan", "Gluten-free"],
    desc: "Creamy soup made with roasted butternut squash and spices.",
    hashtags: ["SOUP", "COMFORT FOOD", "HEARTY"],
  },
  {
    id: "23",
    title: "Portobello Burger",
    price: 9.49,
    image01: Portobello_Burger,
    meal_category: "Yummy Junkies",
    mealTime: "Dinner",
    dietary_options: ["Vegetarian"],
    desc: "Grilled portobello mushroom cap served as a burger with toppings.",
    hashtags: ["VEGETARIAN", "BURGER", "GRILLED"],
  },
  {
    id: "24",
    title: "Thai Quinoa Salad",
    price: 8.99,
    image01: Thai_Quinoa_Salad,
    meal_category: "Light and Green",
    mealTime: "Lunch",
    dietary_options: ["Vegetarian", "Vegan", "Gluten-free"],
    desc: "Refreshing salad with quinoa, vegetables, and Thai-inspired dressing.",
    hashtags: ["THAI CUISINE", "QUINOA", "VEGETARIAN"],
  },
  {
    id: "25",
    title: "Grilled Chicken Caesar Salad",
    price: 11.49,
    image01: Grilled_Chicken_Caesar_Salad,
    meal_category: "Protein Boost",
    mealTime: "Lunch",
    dietary_options: ["Gluten-free"],
    desc: "Classic Caesar salad topped with grilled chicken and a light dressing.",
    hashtags: ["HIGH PROTEIN", "LOW-CALORIE", "GLUTEN-FREE"],
  },
  {
    id: "26",
    title: "Turkey Meatballs with Zoodles",
    price: 10.99,
    image01: Turkey_Meatballs_with_Zoodles,
    meal_category: "Protein Boost",
    mealTime: "Dinner",
    dietary_options: ["Gluten-free"],
    desc: "Lean turkey meatballs served over zucchini noodles with marinara sauce.",
    hashtags: ["HIGH PROTEIN", "LOW-CARB", "GLUTEN-FREE"],
  },
  {
    id: "27",
    title: "Black Bean and Quinoa Salad",
    price: 9.49,
    image01: Black_Bean_and_Quinoa_Salad,
    meal_category: "Protein Boost",
    mealTime: "Lunch",
    dietary_options: ["Vegetarian", "Vegan", "Gluten-free"],
    desc: "A protein-packed salad with black beans, quinoa, and fresh veggies.",
    hashtags: ["HIGH PROTEIN", "VEGAN", "GLUTEN-FREE"],
  },
  {
    id: "28",
    title: "Spicy Tuna Wrap",
    price: 11.99,
    image01: Spicy_Tuna_Wrap,
    meal_category: "Protein Boost",
    mealTime: "Lunch",
    dietary_options: ["Pescatarian"],
    desc: "A spicy tuna wrap with fresh veggies and a zesty dressing.",
    hashtags: ["HIGH PROTEIN", "PESCETARIAN", "SPICY"],
  },
  {
    id: "29",
    title: "Lemon Herb Chicken",
    price: 12.49,
    image01: Lemon_Herb_Chicken,
    meal_category: "Protein Boost",
    mealTime: "Dinner",
    dietary_options: ["Gluten-free"],
    desc: "Juicy chicken breast marinated in lemon and herbs, served with a side of vegetables.",
    hashtags: ["HIGH PROTEIN", "LOW-CALORIE", "GLUTEN-FREE"],
  },
  {
    id: "30",
    title: "Greek Yogurt Parfait",
    price: 7.99,
    image01: Greek_Yogurt_Parfait,
    meal_category: "Protein Boost",
    mealTime: "Breakfast",
    dietary_options: ["Vegetarian", "Gluten-free"],
    desc: "A nutritious parfait made with Greek yogurt, fresh berries, and granola.",
    hashtags: ["HIGH PROTEIN", "LOW-CALORIE", "VEGETARIAN"],
  }
];

export default products;
