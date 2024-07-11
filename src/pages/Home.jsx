import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import homeone from "../assets/images/homeOneImg.jpg";
import "../styles/hero-section.css";

const Home = () => {
    return (
        <Helmet title="Home">
            <div className="single-scroll-page">
                {/* Section 1 */}
                <section className="section section-1 vh-100">
                    <Container className="h-100">
                        <Row className="h-100">
                            <Col lg="8" md="6" className="h-100">
                                <div className="hero__content">
                                    <h5 className="mb-3">Weekly Meal Kits</h5>
                                    <h1 className="mb-4 hero__title">
                                        Enjoy Personalized Meals <br /> for Every Goal
                                    </h1>
                                    <p className="mb-4">
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
                                            style={{ marginLeft: "5px" }}
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
                <section className="section section-2 vh-100">
                    <Container className="h-100">
                        <Row className="h-100">
                            <Col lg="4" md="6" className="h-100">
                                <h2>Section 2</h2>
                                <p>Add your content here for Section 2.</p>
                            </Col>
                            <Col lg="6" md="6" className="h-100">
                                {/* Add relevant content for Section 2 */}
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Section 3 */}
                <section className="section section-3 vh-100">
                    <Container className="h-100">
                        <Row className="h-100">

                            <Col lg="8" md="6" className="h-100">
                                <h2>Section 3</h2>
                                <p>Add your content here for Section 3.</p>
                            </Col>
                            <Col lg="6" md="6" className="h-100">
                                {/* Add relevant content for Section 3 */}
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Section 4 */}
                <section className="section section-4 vh-100">
                    <Container className="h-100">
                        <Row className="h-100">
                            <Col lg="4" md="6" className="h-100">
                                <h2>Section 4</h2>
                                <p>Add your content here for Section 4.</p>
                            </Col>
                            <Col lg="8" md="6" className="h-100">
                                {/* Add relevant content for Section 4 */}
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </Helmet>
    );
};

export default Home;