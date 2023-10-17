/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Divider from "@mui/material/Divider";
import Ratings from "../Ratings/Ratings";

import "./styles.css";

export default function ReviewList(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col user-name">{props.data.user_name.toUpperCase()}</div>
        <div className="col comment">{props.data.comment}</div>
        <div className="col">
          <Ratings value={props.data.rating} />
        </div>
      </div>
      <Divider variant="inset" component="li" />
    </div>
  );
}
