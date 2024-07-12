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
  }
];

export default products;