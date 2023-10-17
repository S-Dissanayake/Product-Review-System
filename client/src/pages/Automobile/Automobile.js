/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import AlignItemsList from "../../components/ListItem/AlignItemsList";
import { Typography } from "@mui/material";

const Automobile = () => {
  const automobile = useSelector((state) => state.productReducer.automobile);

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="product-title">Automobile</div>

      <div style={{ backgroundColor: "#eee" }} className="list-container">
        {
          (automobile.length > 0  && automobile[0]?.brand)?
          automobile.map((product) => {
            return <AlignItemsList data={product} />;
          })
          :
          <Typography style={{color: "red"}}> No Data</Typography>
        }
      </div>
    </div>
  );
};

export default Automobile;
