/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles.css";
import AlignItemsList from "../../components/ListItem/AlignItemsList";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const Banking = () => {
  const banking = [];

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="product-title">Electronic</div>

      <div style={{ backgroundColor: "#eee" }} className="list-container">
        {
        (banking.length > 0  && banking[0]?.brand)?
        banking.map((product) => {
          return <AlignItemsList data={product} />;
        })
        :
        <Typography style={{color: "red"}}> No Data</Typography>
        }
      </div>
    </div>
  );
};

export default Banking;
