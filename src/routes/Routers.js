import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import PizzaDetails from "../pages/PizzaDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import SignUp from "../pages/RegistrationPage";
import SignIn from "../pages/LoginPage";
import MealKits from "../pages/MealKits";
import UserProfile from "../pages/UserProfile";
import HowItWorks from "../pages/HowItWorks";
import ContactUs from "../pages/ContactUs";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
             <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pizzas" element={<MealKits />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/pizzas/:id" element={<PizzaDetails />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<UserProfile />} />
        </Routes>
    );
};

export default Routers;
