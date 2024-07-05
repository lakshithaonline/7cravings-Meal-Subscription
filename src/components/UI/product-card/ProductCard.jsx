import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ProductCard = (props) => {
    const { id, title, image01, price, extraIngredients } = props.item;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                image01,
                price,
                extraIngredients,
            })
        );
    };

    // Define styles using the styled function
    const ProductCardWrapper = (props) => (
        <Card
            sx={{
                maxWidth: 300,
                minHeight: 375,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "0.3s",
                borderRadius: 2,
                "&:hover": {
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                },
            }}
            {...props}
        />
    );

    const ProductCardContent = (props) => (
        <CardContent
            sx={{
                padding: "16px",
            }}
            {...props}
        />
    );

    const ProductCardTitle = (props) => (
        <Typography
            variant="h6"
            component="div"
            sx={{
                fontWeight: "bold",
                marginBottom: 1,
                fontSize: "1.1rem",
            }}
            {...props}
        />
    );

    const ProductCardPrice = (props) => (
        <Typography
            variant="body1"
            color="textSecondary"
            sx={{
                fontSize: "1rem",
                color: "#666",
            }}
            {...props}
        />
    );

    const ProductCardButton = (props) => (
        <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{
                marginBottom: 2,
                width: '80%',
                height: 40,
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            onClick={addToCart} // Assuming addToCart is defined elsewhere
            {...props}
        >
            Add to Cart
        </Button>
    );

    return (
        <ProductCardWrapper>
            <CardActionArea component={Link} to={`/pizzas/${id}`}>
                <CardMedia
                    component="img"
                    image={image01}
                    alt={title}
                    sx={{
                        height: 200,
                    }}
                />
                <ProductCardContent>
                    <ProductCardTitle>{title}</ProductCardTitle>
                    <ProductCardPrice>${price}</ProductCardPrice>
                </ProductCardContent>
            </CardActionArea>
            <ProductCardButton />
        </ProductCardWrapper>
    );
};

export default ProductCard;
