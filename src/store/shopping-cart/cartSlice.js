import { createSlice } from "@reduxjs/toolkit";

const items =
    localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const totalAmount =
    localStorage.getItem("totalAmount") !== null
        ? JSON.parse(localStorage.getItem("totalAmount"))
        : 0;

const setItemFunc = (item, totalAmount) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
};

const initialState = {
  cartItems: items,
  totalAmount: totalAmount,
  finalizedPrice: 0,
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
        diningAccessories: [],
      });

      state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price),
          0
      );

      setItemFunc(
          state.cartItems.map((item) => item),
          state.totalAmount
      );
    },

    removeItem(state, action) {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);

      state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price),
          0
      );

      setItemFunc(
          state.cartItems.map((item) => item),
          state.totalAmount
      );
    },

    deleteItem(state, action) {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);

      state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price),
          0
      );

      setItemFunc(
          state.cartItems.map((item) => item),
          state.totalAmount
      );
    },

    updateMealTime(state, action) {
      const { id, mealTime } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.mealTime = mealTime;
        setItemFunc(state.cartItems, state.totalAmount);
      }
    },
    updateDeliveryDate(state, action) {
      const { id, selectedDay } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.selectedDay = selectedDay;
        setItemFunc(state.cartItems, state.totalAmount);
      }
    },
    updateDiningAccessories(state, action) {
      const { id, accessories } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.diningAccessories = accessories;
        setItemFunc(state.cartItems, state.totalAmount);
      }
    },
    updateSubscriptionFee(state, action) {
      state.subscriptionFee = action.payload;

      // Update finalized price
      state.finalizedPrice =  state.subscriptionFee;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
