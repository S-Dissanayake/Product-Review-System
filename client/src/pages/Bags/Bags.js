/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import AlignItemsList from "../../components/ListItem/AlignItemsList";
import { Typography } from "@mui/material";

const Bags = () => {
  const bags = useSelector((state) => state.productReducer.bags);
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="product-title">Bags</div>

      <div style={{ backgroundColor: "#eee" }} className="list-container">
        {
        (bags.length > 0  && bags[0]?.brand)?
        bags.map((product) => {
          return <AlignItemsList data={product} />;
        })
        :
        <Typography style={{color: "red"}}> No Data</Typography>
      }
      </div>
    </div>
  );
};

export default Bags;
