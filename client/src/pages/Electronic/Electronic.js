/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles.css";
import AlignItemsList from "../../components/ListItem/AlignItemsList";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const Electronic = () => {
  const electronics = useSelector((state) => state.productReducer.electronics);

  // console.log(electronics);
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="product-title">Electronic</div>

      <div style={{ backgroundColor: "#eee" }} className="list-container">
        {
        (electronics.length > 0  && electronics[0]?.brand)?
        electronics.map((product) => {
          return <AlignItemsList data={product} />;
        })
        :
        <Typography style={{color: "red"}}> No Data</Typography>
        }
      </div>
    </div>
  );
};

export default Electronic;
