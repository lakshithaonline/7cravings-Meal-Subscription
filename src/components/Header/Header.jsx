import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/logodymmy_copped.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar"; // Import Avatar component
import "../../styles/header.css";
import { logout } from "../../store/userSlice";
import { auth } from "../../services/firebaseConfig";
import {ListItem, ListItemText} from "@mui/material";
import {Divider, List} from "rsuite";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "How it works",
    path: "/how-it-works",
  },
  {
    display: "MealKits",
    path: "/mealkits",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Dropdown menu state
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  // Open dropdown menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close dropdown menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Sign out function
  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Firebase sign out
      dispatch(logout()); // Dispatch logout action to update Redux state
      navigate("/signin"); // Navigate to sign-in page after sign-out
    } catch (error) {
      console.error("Error signing out:", error.message);
      // Handle error if needed
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
      if (headerRef.current) {
        headerRef.current.classList.toggle("header__shrink", isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header className="header" ref={headerRef}>
        <Container>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo" onClick={() => navigate("/home")}>
              <img src={logo} alt="logo" />
            </div>
            {/* ======= menu ======= */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu d-flex align-items-center gap-5">
                <div className="header__closeButton">
                <span onClick={toggleMenu}>
                  <i className="ri-close-fill"></i>
                </span>
                </div>
                {nav__links.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className={(navClass) => (navClass.isActive ? "active__menu" : "")}
                        onClick={toggleMenu}
                    >
                      {item.display}
                    </NavLink>
                ))}
              </div>
            </div>

            {/* ======== nav right icons ========= */}
            <div className="nav__right d-flex align-items-center gap-4">
              {/* Profile dropdown menu */}
              {isAuthenticated ? (
                  <>
                    <IconButton onClick={handleMenu} size="large">
                      {anchorEl ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                      <Avatar alt="User Avatar" src="/broken-image.jpg" />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        PaperProps={{
                          style: {
                            marginTop: '8px',
                            borderRadius: '8px',
                            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
                            minWidth: '150px',
                            backgroundColor: '#a9a9a9',
                          },
                        }}
                    >
                      <List component="nav" aria-label="main mailbox folders">
                        <ListItem button component={Link} to="/profile" onClick={handleClose}>
                          <ListItemText primary="Profile" />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={handleClose}>
                          <ListItemText primary="Settings" />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={handleClose}>
                          <ListItemText primary="Billing" />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={handleSignOut}>
                          <ListItemText primary="Sign Out" />
                        </ListItem>
                      </List>
                    </Menu>

                  </>
              ) : (
                  <Button
                      onClick={() => navigate("/signin")}
                      className="profile__icon"
                      variant="outlined"
                      sx={{
                        borderColor: "#35A575",
                        color: "black",
                        fontWeight: "600",
                        fontSize: "subtitle2.fontSize",
                        "&:hover": {
                          backgroundColor: "#35A575",
                          borderColor: "#35A575",
                          color: "white",
                        },
                        borderRadius: "4px",
                        padding: "6px 16px",
                      }}
                  >
                    Sign In
                  </Button>
              )}
            </div>
          </div>
        </Container>
      </header>
  );
};

export default Header;
