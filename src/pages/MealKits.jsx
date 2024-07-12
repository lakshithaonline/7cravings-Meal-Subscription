import React, { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  InputAdornment,
  IconButton,
  TextField,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
  Button, AlertTitle,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import products from '../assets/fake-data/products';
import ProductCard from '../components/UI/product-card/ProductCard';
import Helmet from '../components/Helmet/Helmet';
import ReactPaginate from 'react-paginate';
import '../styles/pagination.css';
import SearchIcon from '@mui/icons-material/Search';
import CommonSection from '../components/UI/common-section/CommonSection';

import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import Alert from "@mui/material/Alert";

const MealKits = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [mealCategory, setMealCategory] = useState('All In One');
  const [mealMethod, setMealMethod] = useState('All In One');
  const [dietaryOptions, setDietaryOptions] = useState('All In One');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDay, setSelectedDay] = useState('1/7');

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  console.log('cart items', cartItems);
  console.log('Totally amount', totalAmount);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Calculate unique delivery days
  const uniqueDays = Array.from(new Set(cartItems.map(item => item.selectedDay)));
  const uniqueDayCount = uniqueDays.length;

  let alertMessage = null;
  if (uniqueDayCount < 5) {
    alertMessage = (
        <Alert severity="warning" sx={{ mb: 2 }}>
          <AlertTitle>Warning</AlertTitle>
          Please select at least 5 days to proceed.
        </Alert>
    );
  }

  // Filter products based on selected meal category, method, and dietary options
  const searchedProduct = products.filter((product) => {
    // Filter by meal category
    if (mealCategory !== 'All In One' && product.meal_category !== mealCategory) {
      return false;
    }
    // Filter by meal method
    if (mealMethod !== 'All In One' && product.mealTime !== mealMethod) {
      return false;
    }
    // Filter by dietary options
    if (dietaryOptions !== 'All In One' && !product.dietary_options.includes(dietaryOptions)) {
      return false;
    }
    // Filter by search query
    return !(searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const productPerPage = 20;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPageNumber(0);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
  };

  const handleMethodTimeChange = (event) => {
    setMealMethod(event.target.value);
    setPageNumber(0);
  };

  const handleCategoryChange = (event) => {
    setMealCategory(event.target.value);
    setPageNumber(0);
  };

  const handleDietaryOptionsChange = (event) => {
    setDietaryOptions(event.target.value);
    setPageNumber(0);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setMealMethod('All In One');
    setMealCategory('All In One');
    setDietaryOptions('All In One');
    setPageNumber(0);
  };

  const handleDayChange = (event, newDay) => {
    if (newDay !== null) {
      setSelectedDay(newDay);
      setPageNumber(0);
    }
  };


  return (
      <Helmet title="Subscription Meal Kits">
        <CommonSection title="Choose Your Meal Kit" />
        <Container maxWidth={false} disableGutters style={{ padding: 0 }}>
          <Grid container spacing={2} style={{ width: '100%', margin: 0 }}>
            {/* Left side (Filters) */}
            <Grid item xs={12} lg={3} mt={5} container alignItems="center" direction="column">
              <Box mb={2} width="100%" display="flex" justifyContent="center">
                <form onSubmit={handleSearchSubmit}>
                  <TextField
                      style={{ width: '350px' }}
                      label="Search"
                      variant="outlined"
                      fullWidth
                      value={searchQuery}
                      onChange={handleSearchChange}
                      InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                              <IconButton type="submit">
                                <SearchIcon />
                              </IconButton>
                            </InputAdornment>
                        ),
                      }}
                  />
                </form>
              </Box>
              <Box mb={2} display="flex" justifyContent="center">
                <Paper elevation={3} sx={{ width: '350px', padding: '16px', position: 'relative', border: '1px solid #c2c2c2', boxShadow: 'none' }}>
                  <Typography
                      variant="caption"
                      sx={{
                        position: 'absolute',
                        top: '-10px',
                        left: '9px',
                        backgroundColor: 'white',
                        padding: '0 4px',
                        borderColor: 'black',
                        borderWidth: '1px'
                      }}
                  >
                    Delivery Day
                  </Typography>
                  {alertMessage}
                  <ToggleButtonGroup
                      value={selectedDay}
                      exclusive
                      onChange={handleDayChange}
                      aria-label="day selector"
                      fullWidth
                  >
                    {Array.from({ length: 7 }, (_, i) => (
                        <ToggleButton key={i} value={`${i + 1}/7`} aria-label={`${i + 1}/7`}>
                          {`${i + 1}/7`}
                        </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Paper>
              </Box>
              <Box mb={2} width="100%" display="flex" justifyContent="center">
                <FormControl fullWidth style={{ maxWidth: '350px' }}>
                  <InputLabel id="meal-time-label">Meal Time</InputLabel>
                  <Select
                      labelId="meal-time-label"
                      value={mealMethod}
                      onChange={handleMethodTimeChange}
                      label="Meal Time"
                  >
                    <MenuItem value="All In One">All In One</MenuItem>
                    <MenuItem value="Breakfast">Breakfast</MenuItem>
                    <MenuItem value="Lunch">Lunch</MenuItem>
                    <MenuItem value="Dinner">Dinner</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mb={2} width="100%" display="flex" justifyContent="center">
                <FormControl fullWidth style={{ maxWidth: '350px' }}>
                  <InputLabel id="meal-category-label">Meal Category</InputLabel>
                  <Select
                      labelId="meal-category-label"
                      value={mealCategory}
                      onChange={handleCategoryChange}
                      label="Meal Category"
                  >
                    <MenuItem value="All In One">All In One</MenuItem>
                    <MenuItem value="Yummy Junkies">Yummy Junkies</MenuItem>
                    <MenuItem value="Protein Boost">Protein Boost</MenuItem>
                    <MenuItem value="Light and Green">Light and Green</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mb={2} width="100%" display="flex" justifyContent="center">
                <FormControl fullWidth style={{ maxWidth: '350px' }}>
                  <InputLabel id="dietary-options-label">Dietary Options</InputLabel>
                  <Select
                      labelId="dietary-options-label"
                      value={dietaryOptions}
                      onChange={handleDietaryOptionsChange}
                      label="Dietary Options"
                  >
                    <MenuItem value="All In One">All In One</MenuItem>
                    <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                    <MenuItem value="Gluten-free">Gluten-free</MenuItem>
                    <MenuItem value="Vegan">Vegan</MenuItem>
                    <MenuItem value="Pescatarian">Pescatarian</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mb={2} width="100%" display="flex" justifyContent="center">
                <Button variant="contained" color="success" onClick={handleResetFilters} style={{ width: '350px' }}>
                  Reset Filters
                </Button>
              </Box>

            </Grid>

            {/* Middle (Item display) */}
            <Grid item xs={12} lg={6} mt={5} container alignItems="center" direction="column">
              <Grid container spacing={3}>
                {displayPage.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                      <ProductCard item={item} selectedDay={selectedDay} />
                    </Grid>
                ))}
              </Grid>
              <div className="d-flex justify-content-center mt-4 mb-4">
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={changePage}
                    previousLabel={'Prev'}
                    nextLabel={'Next'}
                    containerClassName="paginationBttns"
                />
              </div>
            </Grid>

            {/* Right side (Accordion for Days) */}
            <Grid item xs={12} lg={3} mt={5} container alignItems="center" direction="column">
              <Box width="80%">
                {/* Total Amount Container */}
                <Box
                    sx={{
                      bgcolor: 'success.main',
                      color: 'success.contrastText',
                      p: 2,
                      mb: 2,
                      borderRadius: 1,
                      textAlign: 'center',
                      boxShadow: 'none',
                    }}
                >
                  <Typography variant="h5" gutterBottom>Total Amount: ${totalAmount.toFixed(2)}</Typography>
                </Box>

                {/* Accordion Sections for Each Day */}
                {days.map((day, index) => (
                    <Accordion key={index} sx={{ width: '100%', marginBottom: '12px', border: 'none' }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel-${index}-content`} id={`panel-${index}-header`}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{day}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container spacing={2}>
                          {cartItems
                              .filter(item => item.selectedDay === `${index + 1}/7`) // Filter items for current day
                              .map(item => (
                                  <Grid item xs={12} key={item.id}>
                                    <Paper elevation={0} variant="outlined" sx={{ border: '1px solid #ddd', borderRadius: '4px', boxShadow: 'none' }}>
                                      <Box p={2}>
                                        <Typography variant="subtitle2">{item.title}</Typography>
                                        <Typography variant="body2" color="textSecondary">Meal Time: {item.mealTime}</Typography>
                                        {/* Add more details as needed */}
                                      </Box>
                                    </Paper>
                                  </Grid>
                              ))}
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                ))}
                <Box
                    component={Link}
                    to="/cart"
                    sx={{
                      bgcolor: 'success.main',
                      color: 'success.contrastText',
                      p: 1,
                      mb: 2,
                      borderRadius: 1,
                      height: 50,
                      textAlign: 'center',
                      textDecoration: 'none', // Ensure no underline for Link
                      display: 'block', // Make sure Link takes full width of the Box
                    }}
                >
                  <Typography variant="h5" gutterBottom>
                    Processed
                  </Typography>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Helmet>
  );
};

export default MealKits;
