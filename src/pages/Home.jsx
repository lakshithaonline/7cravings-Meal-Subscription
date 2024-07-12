import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import homeone from "../assets/images/homeOneImg.jpg";
import "../styles/hero-section.css";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    {
        img: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Breakfast',
    },
    {
        img: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg',
        title: 'Burger',
    },
    {
        img: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Camera',
    },
    {
        img: 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Coffee',
    },
    {
        img: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Hats',
    },
    {
        img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Honey',
    },
    {
        img: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Basketball',
    },
    {
        img: 'https://images.pexels.com/photos/2365945/pexels-photo-2365945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Fern',
    },
    {
        img: 'https://images.pexels.com/photos/2059150/pexels-photo-2059150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

const Home = () => {
    return (
        <Helmet title="Home">
            <div className="single-scroll-page">
                {/* Section 1 */}
                <section className="section section-1 vh-100" style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/1600732/pexels-photo-1600732.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}>
                    <Container className="h-100">
                        <br/><br/>
                        <Row className="h-100">
                            <Col lg="8" md="6" className="h-100">
                                <div className="hero__content">
                                    <h5 className="mb-3">Weekly Meal Kits</h5>
                                    <h1 className="mb-4 hero__title">
                                        Enjoy Personalized Meals <br/> for Every Goal
                                    </h1>
                                    <p className="mb-4 desc">
                                        Discover our diverse menu tailored to your lifestyle. From
                                        healthy choices to high protein and weight loss supportive
                                        meals, we have options to support your goals.
                                    </p>
                                    <Link to="/menu" className="order__btn">
                                        Choose Meal Kit
                                    </Link>
                                    <Link
                                        to="/how-it-works"
                                        className="order__btn"
                                        style={{
                                            marginLeft: "10px",
                                            padding: "8px 16px",
                                            border: "2px solid #212245",
                                            borderRadius: "5px",
                                            backgroundColor: "transparent",
                                            color: "#212245",
                                            textDecoration: "none",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: "47px",
                                            transition: "background-color 0.3s, color 0.3s",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "#212245";
                                            e.target.style.color = "#ffffff";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "transparent";
                                            e.target.style.color = "#212245";
                                        }}
                                    >
                                        How it works{" "}
                                        <i
                                            className="ri-arrow-right-s-line"
                                            style={{marginLeft: "5px"}}
                                        ></i>
                                    </Link>
                                </div>
                            </Col>
                            <Col lg="4" md="6" className="h-100">
                                <div className="rectangle__one">
                                    <div className="rec__one_text">
                                        <h1 className="rec_one_t"> Make your </h1>
                                        <h1 className="rec_one_t"> own </h1>
                                        <h1 className="rec_one_t"> Meal kit </h1>
                                        <h1 className="rec_one_t"> Today </h1>
                                        <div className="reg_now_sec">
                                            <Link to="/menu" className="reg_now_btn">
                                                Start Cooking
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            10% Discount on your first meal kit!!
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Section 2 */}
                <section className="section section-2 vh-200">
                    <Container className="h-100">
                        <br/><br/>
                        <Row className="h-100">
                            <Col lg="4" md="6" className="h-100">
                                <div style={{paddingTop: "10px"}}>
                                    <h2>50+ Recipes Every Week! </h2>

                                    <h5>Our expanded menu gives you more choice and even more price flexibility. So you
                                        can easily cook your favorite meals—without breaking a sweat.</h5>
                                    <br/>
                                    <h2>Ease Your Stress On Your Food </h2>

                                    <h5>More time-More work </h5>
                                </div>
                                <div className="ex_men_sec">
                                    <Link to="/menu" className="ex_men_btn">
                                        Explore Menue
                                    </Link>
                                </div>
                            </Col>
                            <Col lg="8" md="6" className="h-500">

                                <Box sx={{width: '100%', height: 450, overflowY: 'scroll'}}>
                                    <ImageList variant="masonry" cols={3} gap={8}>
                                        {itemData.map((item) => (
                                            <ImageListItem key={item.img}>
                                                <img
                                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                                    alt={item.title}
                                                    loading="lazy"
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </Box>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Section 3 */}
                <section className="section section-3 vh-100">
                    <Container className="h-100">
                        <Row className="h-100">
                            <h2 className="Sec__two__heading">Explore By Categories</h2>
                            <Col lg="8" md="6" className="h-100">

                                <p>Add your content here for Section 3.</p>
                            </Col>
                            <Col lg="6" md="6" className="h-100">
                                {/* Add relevant content for Section 3 */}
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </Helmet>
    );
};

export default Home;
