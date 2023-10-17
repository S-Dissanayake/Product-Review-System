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

const LandingGrid = () => {
  const isProductsFetched = useSelector(
    (state) => state.notificationReducer.isProductsFetched
  );

  return (
    <div className="container">
      <div className="container-row">
        <div className="product-title">PRODUCTS</div>
        <div className="container-column-landing-grid">
          <div className="row">
            <div className="col secondary-col-padding">
              <ProductBox
                name="Electronic"
                icon={MicrowaveIcon}
                link="electronic"
                isProductsFetched={isProductsFetched}
              />

              <ProductBox
                name="Fashion"
                icon={CheckroomIcon}
                link="fashion"
                isProductsFetched={isProductsFetched}
              />
            </div>

            <div className="col secondary-col-padding">
              <ProductBox
                name="Jewelry"
                icon={DiamondIcon}
                link="jewelry"
                isProductsFetched={isProductsFetched}
              />
              <ProductBox
                name="Bags/Shoes"
                icon={RollerSkatingIcon}
                link="bags-shoes"
                isProductsFetched={isProductsFetched}
              />
            </div>

            <div className="col secondary-col-padding">
              <ProductBox
                name="Toys"
                icon={SmartToyIcon}
                link="toys"
                isProductsFetched={isProductsFetched}
              />
              <ProductBox
                name="Beauty/Health"
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

export default LandingGrid;
