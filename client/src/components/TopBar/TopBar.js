/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./topBar.css";

const TopBar = ({ navigation }) => {

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.setItem("userToken", null);
    localStorage.setItem("userType", null);
    navigate("/login");

    window.location.reload(true);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <Link to="/" className="link">
          <div className="topLeft">
            <span className="logo">Product & Service Review System</span>
          </div>
        </Link>
        <div className="topRight">
          <Link to={"/"} className="link">
            <Button
              variant="outline-danger"
              className="sign-out-button"
              onClick={() => {
                handleSignOut();
              }}
            >
              Sign Out
            </Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
