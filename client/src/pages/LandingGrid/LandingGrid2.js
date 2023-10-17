/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import DiamondIcon from "@mui/icons-material/Diamond";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import RollerSkatingIcon from "@mui/icons-material/RollerSkating";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import BedIcon from "@mui/icons-material/Bed";
import ProductBox from "../../components/ProductsBox/ProductBox";
import { Outlet } from "react-router-dom";
import "./styles.css";
import { useSelector } from "react-redux";

const LandingGrid2 = () => {
  const isProductsFetched = true;

  return (
    <div className="container">
      <div className="container-row">
        <div className="product-title">SERVICES</div>
        <div className="container-column-landing-grid">
          <div className="row">
            <div className="col secondary-col-padding">
              <ProductBox
                name="Banking"
                icon={MicrowaveIcon}
                link="banking"
                isProductsFetched={isProductsFetched}
              />

              <ProductBox
                name="Transpotation"
                icon={CheckroomIcon}
                link="fashion"
                isProductsFetched={isProductsFetched}
              />
            </div>

            <div className="col secondary-col-padding">
              <ProductBox
                name="Communication"
                icon={DiamondIcon}
                link="jewelry"
                isProductsFetched={isProductsFetched}
              />
              <ProductBox
                name="Social"
                icon={RollerSkatingIcon}
                link="bags-shoes"
                isProductsFetched={isProductsFetched}
              />
            </div>

            <div className="col secondary-col-padding">
              <ProductBox
                name="Health Care"
                icon={SmartToyIcon}
                link="toys"
                isProductsFetched={isProductsFetched}
              />
              <ProductBox
                name="Agriculture"
                icon={SelfImprovementIcon}
                link="beauty-health"
                isProductsFetched={isProductsFetched}
              />
            </div>

            <div className="col secondary-col-padding">
              <ProductBox
                name="Automobile"
                icon={CarRepairIcon}
                link="automobile"
                isProductsFetched={isProductsFetched}
              />
              <ProductBox
                name="Furniture"
                icon={BedIcon}
                link="furniture"
                isProductsFetched={isProductsFetched}
              />
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default LandingGrid2;
