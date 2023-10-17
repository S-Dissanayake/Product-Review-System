/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import AlignItemsList from "../../components/ListItem/AlignItemsList";
import { Typography } from "@mui/material";

const Jewelry = () => {
  const jewelry = useSelector((state) => state.productReducer.jewelry);
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="product-title">Jewelry</div>

      <div style={{ backgroundColor: "#eee" }} className="list-container">
        {
        (jewelry.length > 0  && jewelry[0]?.brand)?
        jewelry.map((product) => {
          return <AlignItemsList data={product} />;
        })
        :
          <Typography style={{color: "red"}}> No Data</Typography>}
      </div>
    </div>
  );
};

export default Jewelry;
