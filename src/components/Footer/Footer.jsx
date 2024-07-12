import React from "react";
import { ListGroup } from "reactstrap";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

import logo from "../../assets/images/logodymmy_copped.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__logo">
            <img src={logo} alt="logo"/>
            <p>Your partner in achieving your health goals. Discover our weekly meal kits
              designed for your lifestyle, delivered fresh to your door.</p>
          </div>
          <div className="footer__delivery-time">
            <h5 className="footer__title mb-3">Delivery Time</h5>
            <ListGroup>
              <div className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </div>
              <div className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </div>
            </ListGroup>
          </div>
          <div className="footer__contact">
            <h5 className="footer__title mb-3">Contact</h5>
            <p>Location: Galle Road, Colombo 03, Sri Lanka</p>
            <p><strong>Phone: 077000000</strong></p>
            <p><strong>Email: support@7cravings.com</strong></p>
          </div>
          <div className="footer__newsletter">
            <h5 className="footer__title mb-3">Newsletter</h5>
            <p>Subscribe to our newsletter</p>
            <div className="newsletter__input">
              <input type="email" placeholder="Enter your email"/>
              <button type="button">
                <i className="ri-send-plane-line"></i>
              </button>
            </div>
            <div className="footer__social-media mt-3">
              <h5 className="footer__title mb-3">Follow Us</h5>
              <div className="social-media-icons">
                <Facebook className="social-icon"/>
                <Twitter className="social-icon"/>
                <Instagram className="social-icon"/>
                <LinkedIn className="social-icon"/>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
