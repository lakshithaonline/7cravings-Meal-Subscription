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

const ProductCard = ({ item, selectedDay }) => {
    const { id, title, image01, price, extraIngredients, mealTime, hashtags } = item;
    const dispatch = useDispatch();
    console.log('Selected Day in ProductCard:', selectedDay);

    const addToCart = () => {
        console.log('Adding to cart:', {
            id,
            title,
            image01,
            price,
            extraIngredients,
            mealTime,
            selectedDay,
            hashtags,
        });

        dispatch(
            cartActions.addItem({
                id,
                title,
                image01,
                price,
                extraIngredients,
                mealTime,
                selectedDay,
            })
        );
    };

    // Define styles using the styled function
    const ProductCardWrapper = (props) => (
        <Card
            sx={{
                outline: 1,
                outlineColor: "#a9a9a9",
                maxWidth: 300,
                minHeight: 375,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
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
        <CardContent sx={{ padding: "16px" }} {...props} />
    );

    const ProductCardTitle = (props) => (
        <Typography
            variant="h6"
            component="div"
            sx={{
                fontWeight: "bold",
                marginBottom: 0,
                fontSize: "1.1rem",
            }}
            {...props}
        />
    );

    const ProductCardHashtags = ({ hashtags }) => (
        <div
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "2px",
            }}
        >
            {hashtags.map((tag, index) => (
                <Typography
                    key={index}
                    variant="body2"
                    color="textSecondary"
                    sx={{
                        borderRadius: "3px",
                        backgroundColor: "#cecece",
                        padding: "4px 8px",
                        fontSize: "0.5rem",
                        whiteSpace: "nowrap",
                        marginBottom: "2px",
                        minWidth: "fit-content",
                        maxWidth: "fit-content",
                        display: "inline-flex", // Ensure hashtags display in a row
                        alignItems: "center", // Center content vertically
                        marginRight: "3px",
                    }}
                >
                    {tag}
                </Typography>
            ))}
        </div>
    );

    const ProductCardPrice = (props) => (
        <Typography
            variant="body1"
            color="textSecondary"
            sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#666",
                marginTop: 1,
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
                width: "80%",
                height: 40,
                marginLeft: "auto",
                marginRight: "auto",
            }}
            onClick={addToCart}
            {...props}
        >
            Add to Cart
        </Button>
    );

    return (
        // component={Link} to={`/mealkits/${id}`}
        <ProductCardWrapper>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={image01}
                    alt={title}
                    sx={{
                        height: 150,
                    }}
                />
                <ProductCardContent>
                    <ProductCardTitle>{title}</ProductCardTitle>
                    <ProductCardHashtags hashtags={hashtags}/>
                    <ProductCardPrice>${price}</ProductCardPrice>
                </ProductCardContent>
            </CardActionArea>
            <ProductCardButton />
        </ProductCardWrapper>
    );
};

export default ProductCard;
