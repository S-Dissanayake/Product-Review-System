/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import AlignItemsList from "../../components/ListItem/AlignItemsList";
import { Typography } from "@mui/material";


const BeautyHealth = () => {
  const beauty = useSelector((state) => state.productReducer.beauty);
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="product-title">Beauty & Health</div>

      <div style={{ backgroundColor: "#eee" }} className="list-container">
        {
        (beauty.length > 0  && beauty[0]?.brand)?
        beauty.map((product) => {
          return <AlignItemsList data={product} />;
        })
      :
      <Typography style={{color: "red"}}> No Data</Typography>
      }
      </div>
    </div>
  );
};

export default BeautyHealth;
