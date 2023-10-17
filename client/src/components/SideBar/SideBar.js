import React from "react";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import InventoryIcon from "@mui/icons-material/Inventory";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Tooltip from "@mui/material/Tooltip";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { Link } from "react-router-dom";

import "./sidebar.css";

const SideBar = () => {
  const userType = localStorage.getItem("userType");
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Tooltip leaveDelay={200} title="Dashboard">
              <Link to="/" className="link">
                <li className="sidebarListItem">
                  <DashboardCustomizeIcon
                    className="sidebarIcon"
                    style={{
                      color: "white",
                      fontSize: "large",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </li>
              </Link>
            </Tooltip>

            <Tooltip leaveDelay={200} title="Products">
              <Link to="/" className="link">
                <li className="sidebarListItem">
                  <InventoryIcon
                    className="sidebarIcon"
                    style={{
                      color: "white",
                      fontSize: "large",
                      width: "30px",
                      height: "30px",
                      marginTop: "50px",
                    }}
                  />
                </li>
              </Link>
            </Tooltip>

            <Tooltip leaveDelay={200} title="Services">
              <Link to="/Services" className="link">
                <li className="sidebarListItem">
                  <MiscellaneousServicesIcon
                    className="sidebarIcon"
                    style={{
                      color: "white",
                      fontSize: "large",
                      width: "30px",
                      height: "30px",
                      marginTop: "50px",
                    }}
                  />
                </li>
              </Link>
            </Tooltip>

            <Tooltip leaveDelay={200} title="Profile">
              <Link to="/profile" className="link">
                <li className="sidebarListItem">
                  <PersonPinIcon
                    className="sidebarIcon"
                    style={{
                      color: "white",
                      fontSize: "large",
                      width: "30px",
                      height: "30px",
                      marginTop: "50px",
                    }}
                  />
                </li>
              </Link>
            </Tooltip>

            <Tooltip leaveDelay={200} title="Add New Review">
              <Link to="/new-review" className="link">
                <li className="sidebarListItem">
                  <AddCircleOutlineIcon
                    className="sidebarIcon"
                    style={{
                      color: "white",
                      fontSize: "large",
                      width: "30px",
                      height: "30px",
                      marginTop: "50px",
                    }}
                  />
                </li>
              </Link>
            </Tooltip>

            {userType === "admin" || userType === "Admin" ? (
              <>
                <li className="sidebarListItem">
                  <HorizontalRuleIcon
                    className="sidebarIcon"
                    style={{
                      color: "white",
                      fontSize: "large",
                      width: "30px",
                      height: "30px",
                      marginTop: "50px",
                    }}
                  />
                </li>

                <Tooltip leaveDelay={200} title="Users">
                  <Link to="/new-review" className="link">
                    <li className="sidebarListItem">
                      <SupervisedUserCircleIcon
                        className="sidebarIcon"
                        style={{
                          color: "white",
                          fontSize: "large",
                          width: "30px",
                          height: "30px",
                          marginTop: "50px",
                        }}
                      />
                    </li>
                  </Link>
                </Tooltip>

                <Tooltip leaveDelay={200} title="Products & Services">
                  <Link to="/new-review" className="link">
                    <li className="sidebarListItem">
                      <PrecisionManufacturingIcon
                        className="sidebarIcon"
                        style={{
                          color: "white",
                          fontSize: "large",
                          width: "30px",
                          height: "30px",
                          marginTop: "50px",
                        }}
                      />
                    </li>
                  </Link>
                </Tooltip>
              </>
            ) : (
              <div></div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
