import React from "react";
import { BallTriangle } from "react-loader-spinner";

import "./loader.css";

const DefaultLoader = () => {
  return (
    <div className="loader-container">
      <BallTriangle
        className="ball-triangle"
        // size={100}
        height={100}
        width={100}
        radius={5}
        color="#0F4674"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default DefaultLoader;
