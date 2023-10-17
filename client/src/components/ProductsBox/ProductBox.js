import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const ProductBox = (props) => {
  return (
    <>
      {props?.isProductsFetched ? (
        <Link to={`/${props?.link}`} className="link">
          <div className="row row-container">
            <div className="col">{props.name}</div>
            <div className="col icon-container">
              <props.icon />
            </div>
          </div>
        </Link>
      ) : (
        <Link to={`/${props?.link}`} className="link">
          <div className="row row-container">
            <div className="col">{props?.name}</div>
            <div className="col icon-container">
              <props.icon />
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default ProductBox;
