import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchProductById from "../../actions/fetchProductById";
import { cardStyle, detailsStyle } from "./style";
/** @jsxImportSource @emotion/react */
import { Button } from "@mui/material";
import cartIcon from "./cart.jpeg";

const ProductDedicatedPage = () => {
  const [data, setData] = useState();
  const { id: productId } = useParams();

  useEffect(() => {
    fetchProductById(productId).then((data) => setData(data[0]));
  }, []);
  const {
    category,
    record_count: recordCount,
    company_name: companyName,
    company_address: companyAddress,
    website
  } = data || {};
  return (
    <div>
      <div css={cardStyle}>
        <img src={cartIcon} />
        <div css={detailsStyle}>
          <div>Category: {category}</div>
          <div>Record Count: {recordCount}</div>
          <div>
            Company: {companyName}, {companyAddress}
          </div>
          <div>Website: {website}</div>
          <Button variant="contained" onClick={() => {}}>
            Contact
        </Button>
        </div>
      </div>
    </div>
  );
};
export default ProductDedicatedPage;
