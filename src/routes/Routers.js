import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import PizzaDetails from "../pages/PizzaDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import SignUp from "../pages/RegistrationPage";
import SignIn from "../pages/LoginPage";
import MealKits from "../pages/MealKits";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
        {/*<Route path"/how-this-works" element={</>} />*/}
      <Route path="/pizzas" element={<MealKits />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/pizzas/:id" element={<PizzaDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

    </Routes>
  );
};

export default Routers;
