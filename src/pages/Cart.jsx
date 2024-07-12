import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import { MenuItem, Select, Checkbox, ListItemText, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";

const diningAccessoriesOptions = [
    "Cutlery",
    "Chopsticks",
    "Napkins",
    "Straws",
    "Disposable Plates",
];

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();

    const handleMealTimeChange = (event, id) => {
        const mealTime = event.target.value;
        dispatch(cartActions.updateMealTime({ id, mealTime }));
    };

    const handleDayChange = (event, id) => {
        const selectedDay = event.target.value;
        dispatch(cartActions.updateDeliveryDate({ id, selectedDay }));
    };

    const handleAccessoriesChange = (event, id) => {
        const value = event.target.value;
        dispatch(cartActions.updateDiningAccessories({ id, accessories: value }));
    };

    const deleteItem = (id) => {
        dispatch(cartActions.deleteItem(id));
    };

    return (
        <Helmet title="Cart">
            <CommonSection title="Your Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            {cartItems.length === 0 ? (
                                <h5 className="text-center">Your cart is empty</h5>
                            ) : (
                                <>
                                    <h5 className="mb-5">Summary of your order</h5>
                                    <table className="table table-borderless mb-5 align-middle">
                                        <thead>
                                        <tr>
                                            <th className="text-center">Image</th>
                                            <th className="text-center">Title</th>
                                            <th className="text-center">Price</th>
                                            <th className="text-center">Meal Time</th>
                                            <th className="text-center">Delivery Day</th>
                                            <th className="text-center">Dining Accessories</th>
                                            <th className="text-center">Remove</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {cartItems.map((item) => (
                                            <Tr
                                                key={item.id}
                                                item={item}
                                                handleMealTimeChange={handleMealTimeChange}
                                                handleDayChange={handleDayChange}
                                                handleAccessoriesChange={handleAccessoriesChange}
                                                deleteItem={deleteItem}
                                            />
                                        ))}
                                        </tbody>
                                    </table>
                                </>
                            )}

                            <div className="mt-4">
                                <h6>
                                    Subtotal: $
                                    <span className="cart__subtotal">{totalAmount.toFixed(2)}</span>
                                </h6>
                                <p>Taxes and shipping will calculate at checkout</p>
                                <div className="cart__page-btn">
                                    <button className="addTOCart__btn me-4">
                                        <Link to="/mealkits">Continue Shopping</Link>
                                    </button>
                                    <button className="addTOCart__btn">
                                        <Link to="/checkout">Proceed to checkout</Link>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Tr = ({ item, handleMealTimeChange, handleDayChange, handleAccessoriesChange, deleteItem }) => {
    const { id, image01, title, price, mealTime, selectedDay, diningAccessories } = item;

    return (
        <tr>
            <td className="text-center cart__img-box">
                <img src={image01} alt="" />
            </td>
            <td className="text-center">{title}</td>
            <td className="text-center">${price}</td>
            <td className="text-center">
                <FormControl variant="outlined" fullWidth>
                    <Select
                        labelId={`meal-time-label-${id}`}
                        value={mealTime}
                        onChange={(event) => handleMealTimeChange(event, id)}
                    >
                        <MenuItem value="Breakfast">Breakfast</MenuItem>
                        <MenuItem value="Lunch">Lunch</MenuItem>
                        <MenuItem value="Dinner">Dinner</MenuItem>
                    </Select>
                </FormControl>
            </td>
            <td className="text-center">
                <FormControl variant="outlined" fullWidth>
                    <Select
                        labelId={`delivery-day-label-${id}`}
                        value={selectedDay}
                        onChange={(event) => handleDayChange(event, id)}
                    >
                        {Array.from({ length: 7 }, (_, i) => (
                            <MenuItem key={i} value={`${i + 1}/7`}>
                                {`${i + 1}/7`}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </td>
            <td className="text-center">
                <FormControl variant="outlined" fullWidth>
                    <Select
                        labelId={`dining-accessories-label-${id}`}
                        multiple
                        value={diningAccessories || []}
                        onChange={(event) => handleAccessoriesChange(event, id)}
                        renderValue={(selected) => selected.join(", ")}
                    >
                        {diningAccessoriesOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                <Checkbox checked={(diningAccessories || []).indexOf(option) > -1} />
                                <ListItemText primary={option} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </td>
            <td className="text-center cart__item-del">
                <i className="ri-delete-bin-line" onClick={() => deleteItem(id)}></i>
            </td>
        </tr>
    );
};

export default Cart;
