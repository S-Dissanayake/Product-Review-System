/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import AlignItemsList from "../../components/ListItem/AlignItemsList";
import { Typography } from "@mui/material";

const Furniture = () => {
  const furniture = useSelector((state) => state.productReducer.furniture);
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="product-title">Furniture</div>

      <div style={{ backgroundColor: "#eee" }} className="list-container">
        {(furniture.length > 0  && furniture[0]?.brand)?
        furniture.map((product) => {
          return <AlignItemsList data={product} />;
        })
      :
      <Typography style={{color: "red"}}> No Data</Typography>
      }
      </div>
    </div>
  );
};

export default Furniture;
