/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import fetchProducts from "../../actions/fetchProducts";
import Card from "../../Components/Card";
import { cardsWrapperStyle, pageViewStyle } from "./style";
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const categories = [
  "billboard",
  "seeds",
  "pesticides",
  "machinery",
  "tools",
  "clothing",
  "footwear",
];
const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filters, setFilter] = useState([]);
  useEffect(() => {
    fetchProducts().then(({ products }) => {
      setProducts(products);
      setFilteredProducts(products);
    });
  }, []);
  useEffect(() => {
    let newFilteredProducts;
    if (searchText) {
      newFilteredProducts = products.filter(({ company_name: companyName }) =>
        companyName.includes(searchText)
      );
    } else {
      newFilteredProducts = products;
    }
    if (filters && filters.length) {
      newFilteredProducts = newFilteredProducts.filter(({ category }) =>
        filters.includes(category)
      );
    }
    setFilteredProducts(newFilteredProducts);
  }, [searchText, filters]);

  const onFilterChange = (cat) => {
    if (!filters.includes(cat)) {
      setFilter([...filters, cat]);
    } else {
      const index = filters.indexOf(cat);
      if (index > -1) {
        filters.splice(index, 1);
      }
      setFilter([...filters]);
    }
  };

  return (
    <div>
      <div css={pageViewStyle}>
        <div className="search-bar">
          <div className="search-wrapper">
            <TextField
              id="outlined-basic"
              label="Search..."
              variant="outlined"
              onChange={(event) => {
                const value = event.target.value;
                setSearchText(value);
              }}
            />
          </div>
          <FormGroup>
            {categories.map((category) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.includes(category)}
                      onChange={() => onFilterChange(category)}
                    />
                  }
                  label={category}
                />
              );
            })}
          </FormGroup>
        </div>
        <div css={cardsWrapperStyle}>
          {filteredProducts.map((product, index) => {
            return <Card {...product} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
