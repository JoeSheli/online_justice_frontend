import { Button } from "@mui/material";
import React from "react";
import Logo from "../assets/topLogo.png";
import { Link } from "react-router-dom";
function Navigation() {
  const navs = ["Home", "About us", "FAQ", "Resources"];
  return (
    <div className="bg-white flex items-center justify-between py-5">
      <div className="flex gap-12 items-center">
        <Link to="/">
          <img src={Logo} />
        </Link>
        {navs.map((nav, index) => (
          <div
            key={index}
            className={`hover:text-[#DB1D60] cursor-pointer ${
              index === 0 && "text-[#DB1D60] text-sm font-medium"
            }`}
          >
            {nav}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <Link to="/form">
          <Button
            variant="outlined"
            style={{
              textTransform: "capitalize",
              color: "#DB1D60",
              border: "1px solid #DB1D60",
              padding: "10px 70px",
            }}
          >
            Call us
          </Button>
        </Link>
        <Link to="/form">
          <Button
            variant="contained"
            style={{
              background: "#DB1D60",
              padding: "10px 70px",
              textTransform: "capitalize",
            }}
          >
            Report
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
