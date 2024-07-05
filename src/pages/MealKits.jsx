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
  AccordionDetails, ToggleButton, ToggleButtonGroup,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import products from '../assets/fake-data/products';
import ProductCard from '../components/UI/product-card/ProductCard';
import Helmet from '../components/Helmet/Helmet';
import ReactPaginate from 'react-paginate';
import '../styles/pagination.css';
import SearchIcon from '@mui/icons-material/Search';
import CommonSection from '../components/UI/common-section/CommonSection';
import Button from "@mui/material/Button";

const MealKits = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [mealCategory, setMealCategory] = useState('All');
  const [mealMethod, setMealMethod] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDay, setSelectedDay] = useState('1/7');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Filter products based on selected meal category and method
  const searchedProduct = products.filter((product) => {
    // Filter by meal category
    if (mealCategory !== 'All' && product.meal_category !== mealCategory) {
      return false;
    }
    // Filter by meal method
    if (mealMethod !== 'All' && product.meal_Time !== mealMethod) {
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

  const handleCategoryChange = (event) => {
    setMealCategory(event.target.value);
    setPageNumber(0); // Reset page number when filters change
  };

  const handleMethodTimeChange = (event) => {
    setMealMethod(event.target.value);
    setPageNumber(0); // Reset page number when filters change
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPageNumber(0); // Reset page number when a search query changes
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    // Optionally, you can perform a search action here if needed
  };

  const handleResetFilters = () => {
    setMealCategory('All');
    setMealMethod('All');
    setSearchQuery('');
    setPageNumber(0); // Reset page number
  };

  const handleDayChange = (event, newDay) => {
    if (newDay !== null) {
      setSelectedDay(newDay);
      setPageNumber(0); // Reset page number when day changes
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
              <Box mb={2} width="100%" display="flex" justifyContent="center">
                <ToggleButtonGroup
                    value={selectedDay}
                    exclusive
                    onChange={handleDayChange}
                    aria-label="day selector"
                >
                  {Array.from({ length: 7 }, (_, i) => (
                      <ToggleButton key={i} value={`${i + 1}/7`} aria-label={`${i + 1}/7`}>
                        {`${i + 1}/7`}
                      </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Box>
              <Box mb={2} width="100%" display="flex" justifyContent="center">
                <FormControl fullWidth style={{ maxWidth: '350px' }}>
                  <InputLabel id="meal-time-label">Meal Time</InputLabel>
                  <Select labelId="meal-time-label" value={mealCategory} onChange={handleMethodTimeChange}>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Breakfast">Breakfast</MenuItem>
                    <MenuItem value="Lunch">Lunch</MenuItem>
                    <MenuItem value="Dinner">Dinner</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mb={2} width="100%" display="flex" justifyContent="center">
                <FormControl fullWidth style={{ maxWidth: '350px' }}>
                  <InputLabel id="meal-category-label">Meal Category</InputLabel>
                  <Select labelId="meal-category-label" value={mealCategory} onChange={handleCategoryChange}>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Quick Meals">Quick Meals</MenuItem>
                    <MenuItem value="Healthy Choices">Healthy Choices</MenuItem>
                    <MenuItem value="High Protein">High Protein</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mb={2} width="100%" display="flex" justifyContent="center">
                <FormControl fullWidth style={{ maxWidth: '350px' }}>
                  <InputLabel id="meal-method-label">Meal Method</InputLabel>
                  <Select labelId="meal-method-label" value={mealMethod} onChange={handleMethodTimeChange}>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                    <MenuItem value="Gluten-free">Gluten-free</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mb={2} width="100%" display="flex" justifyContent="center">
                <Button variant="contained" color="primary" onClick={handleResetFilters} style={{width: '350px'}}>
                  Reset Filters
                </Button>
              </Box>

            </Grid>

            {/* Middle (Item display) */}
            <Grid item xs={12} lg={6} mt={5}>
              <Grid container spacing={3}>
                {displayPage.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                      <ProductCard item={item} />
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
              <Box mb={2} width="80%" justifyContent="center">
                {days.map((day, index) => (
                    <Accordion key={index} style={{ width: '350px' }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel-${index}-content`} id={`panel-${index}-header`}>
                        <Typography>{day}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {/* Your content for each day goes here */}
                        {/* Example: */}
                        <Typography>
                          Lorem ipsum dolor sit amet, consecrate disciplining elite. Null vitae elite libero.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Helmet>
  );
};

export default MealKits;
