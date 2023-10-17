/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import AlignItemsList from "../../components/ListItem/AlignItemsList";
import { Typography } from "@mui/material";

const Toys = () => {
  const toys = useSelector((state) => state.productReducer.toys);
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="product-title">Toys</div>

      <div style={{ backgroundColor: "#eee" }} className="list-container">
        {(toys.length > 0  && toys[0]?.brand)?
        toys.map((product) => {
          return <AlignItemsList data={product} />;
        })
        :
          <Typography style={{color: "red"}}> No Data</Typography>
      }
      </div>
    </div>
  );
};

export default Toys;
