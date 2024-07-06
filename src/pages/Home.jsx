import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import deliveryImg from "../assets/images/heroNEW.png";
import "../styles/hero-section.css";

const Home = () => {
  return (
      <Helmet title="Home">
        <section>
          <Container className="vh-100" component="main" maxWidth="xs">  {/*remove this after adding contents  className="vh-100" component="main" maxWidth="xs"*/}
            <Row>
              <Col lg="6" md="6">
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
                        marginLeft: '10px',
                        padding: '8px 16px',
                        border: '2px solid #212245',
                        borderRadius: '5px',
                        backgroundColor: 'transparent',
                        color: '#212245',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '47px',
                        transition: 'background-color 0.3s, color 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#212245';
                        e.target.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#212245';
                      }}
                  >
                    How it works <i className="ri-arrow-right-s-line" style={{ marginLeft: '5px' }}></i>
                  </Link>
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="hero__img">
                  <img src={deliveryImg} alt="delivery-guy" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
  );
};

export default Home;
