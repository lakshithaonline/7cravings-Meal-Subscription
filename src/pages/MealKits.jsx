import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  InputAdornment,
  IconButton
} from "@mui/material";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";
import SearchIcon from "@mui/icons-material/Search";
import CommonSection from "../components/UI/common-section/CommonSection";
import TextField from "@mui/material/TextField";

const MealKits = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [mealCategory, setMealCategory] = useState("All");
  const [mealMethod, setMealMethod] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Assuming products are now meal kits with appropriate properties like category and method
  const searchedProduct = products.filter(product => {
    // Filter based on selected meal category and method
    if (mealCategory !== "All" && product.category !== mealCategory) {
      return false;
    }
    if (mealMethod !== "All" && product.method !== mealMethod) {
      return false;
    }
    return true;
  });

  const productPerPage = 20;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
      visitedPage,
      visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleCategoryChange = (event) => {
    setMealCategory(event.target.value);
    setPageNumber(0); // Reset page number when filters change
  };

  const handleMethodChange = (event) => {
    setMealMethod(event.target.value);
    setPageNumber(0); // Reset page number when filters change
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPageNumber(0); // Reset page number when search query changes
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    // Optionally, you can perform a search action here if needed
  };

  return (
      <Helmet title="Subscription Meal Kits">
        <CommonSection title="Choose Your Meal Kit" />
        <Container>
          <Grid container>
            {/* Left side (Filters) */}
            <Grid item xs={12} lg={3} mt={5}>
              <Box mb={2}>
                <Box mb={2}>
                  <form onSubmit={handleSearchSubmit}>
                    <TextField
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
                <FormControl fullWidth>
                  <InputLabel id="meal-category-label">Meal Time</InputLabel>
                  <Select
                      labelId="meal-category-label"
                      value={mealCategory}
                      onChange={handleCategoryChange}
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Breakfast">Breakfast</MenuItem>
                    <MenuItem value="Lunch">Lunch</MenuItem>
                    <MenuItem value="Dinner">Dinner</MenuItem>
                    {/* Add more categories as needed */}
                  </Select>
                </FormControl>
              </Box>
              <Box mb={2}>
                <FormControl fullWidth>
                  <InputLabel id="meal-category-label">Meal Category</InputLabel>
                  <Select
                      labelId="meal-category-label"
                      value={mealCategory}
                      onChange={handleCategoryChange}
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Quick Meals">Quick Meals</MenuItem>
                    <MenuItem value="Healthy Choices">Healthy Choices</MenuItem>
                    <MenuItem value="High protein">High protein</MenuItem>
                    {/* Add more categories as needed */}
                  </Select>
                </FormControl>
              </Box>
              <Box mb={2}>
                <FormControl fullWidth>
                  <InputLabel id="meal-method-label">Meal Method</InputLabel>
                  <Select
                      labelId="meal-method-label"
                      value={mealMethod}
                      onChange={handleMethodChange}
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                    <MenuItem value="Gluten-free">Gluten-free</MenuItem>
                    {/* Add more methods as needed */}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* Right side (Item display) */}
            <Grid item xs={12} lg={9} mt={5} >
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
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    containerClassName="paginationBttns"
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Helmet>
  );
};

export default MealKits;
