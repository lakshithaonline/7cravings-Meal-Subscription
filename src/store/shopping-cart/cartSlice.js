import { createSlice } from "@reduxjs/toolkit";

const items =
    localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const totalAmount =
    localStorage.getItem("totalAmount") !== null
        ? JSON.parse(localStorage.getItem("totalAmount"))
        : 0;

const totalCalories =
    localStorage.getItem("totalCalories") !== null
        ? JSON.parse(localStorage.getItem("totalCalories"))
        : 0;

const setItemFunc = (item, totalAmount, totalCalories) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalCalories", JSON.stringify(totalCalories));
};

const initialState = {
  cartItems: items,
  totalAmount: totalAmount,
  totalCalories: totalCalories,
  finalizedPrice: 0,
  subscriptionFee: 0, // Initialize subscriptionFee in the state
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      state.cartItems.push({
        id: newItem.id,
        title: newItem.title,
        image01: newItem.image01,
        price: newItem.price,
        totalPrice: newItem.price,
        extraIngredients: newItem.extraIngredients,
        mealTime: newItem.mealTime,
        selectedDay: newItem.selectedDay,
        calorie_count: newItem.calorie_count,
        diningAccessories: [],
      });

      state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price),
          0
      );

      state.totalCalories = state.cartItems.reduce(
          (total, item) => total + Number(item.calorie_count),
          0
      );

      setItemFunc(
          state.cartItems.map((item) => item),
          state.totalAmount,
          state.totalCalories,
      );
    },

    removeItem(state, action) {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);

      state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price),
          0
      );

      state.totalCalories = state.cartItems.reduce(
          (total, item) => total + Number(item.calorie_count),
          0
      );

      setItemFunc(
          state.cartItems.map((item) => item),
          state.totalAmount,
          state.totalCalories
      );
    },

    deleteItem(state, action) {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);

      state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price),
          0
      );

      state.totalCalories = state.cartItems.reduce(
          (total, item) => total + Number(item.calorie_count),
          0
      );

      setItemFunc(
          state.cartItems.map((item) => item),
          state.totalAmount,
          state.totalCalories
      );
    },

    updateMealTime(state, action) {
      const { id, mealTime } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.mealTime = mealTime;
        setItemFunc(state.cartItems, state.totalAmount, state.totalCalories);
      }
    },
    updateDeliveryDate(state, action) {
      const { id, selectedDay } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.selectedDay = selectedDay;
        setItemFunc(state.cartItems, state.totalAmount, state.totalCalories);
      }
    },
    updateDiningAccessories(state, action) {
      const { id, accessories } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.diningAccessories = accessories;
        setItemFunc(state.cartItems, state.totalAmount, state.totalCalories);
      }
    },
    updateSubscriptionFee(state, action) {
      state.subscriptionFee = action.payload;

      // Update finalized price
      state.finalizedPrice = state.subscriptionFee;
    },
  },
});

export const cartActions = cartSlice.actions;

// Selector to get all items filtered by selectedDay and calculate total calorie count
export const selectItemsBySelectedDay = (state, selectedDay) => {
  const filteredItems = state.cart.cartItems.filter(item => item.selectedDay === selectedDay);
  const totalCalories = filteredItems.reduce((total, item) => total + Number(item.calorie_count), 0);
  return { filteredItems, totalCalories };
};

export default cartSlice;
