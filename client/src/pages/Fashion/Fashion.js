/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import AlignItemsList from "../../components/ListItem/AlignItemsList";
import { Typography } from "@mui/material";

const Fashion = () => {
  const fashion = useSelector((state) => state.productReducer.fashion);
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="product-title">Fashion</div>

      <div style={{ backgroundColor: "#eee" }} className="list-container">
        {
        (fashion.length > 0  && fashion[0]?.brand)?
        fashion.map((product) => {
          return <AlignItemsList data={product} />;
        })
        :
        <Typography style={{color: "red"}}> No Data</Typography>
      }
      </div>
    </div>
  );
};

export default Fashion;
