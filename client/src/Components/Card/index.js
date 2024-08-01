import React from "react";
import { cardStyle, detailsStyle } from "./style";
/** @jsxImportSource @emotion/react */
import { Paper, Button } from "@mui/material";
import cartIcon from "./cart.jpeg";

const Card = ({
  category,
  record_count: recordCount,
  company_name: companyName,
  company_address: companyAddress,
  website,
}) => {
  return (
    <Paper elevation={3}>
      <div css={cardStyle}>
        <img src={cartIcon} />
        <div css={detailsStyle}>
          <div>Category: {category}</div>
          <div>Record Count: {recordCount}</div>
          <div>Company: {companyName}, {companyAddress}</div>
          <div>Website: {website}</div>
          <Button variant="contained" onClick={() => {}}>Contact</Button>
        </div>
      </div>
    </Paper>
  );
};
export default Card;
