import { Button } from "@mui/material";
import React from "react";
import Logo from "../assets/logo.png";
function Navigation() {
  const navs = ["Home", "About us", "FAQ", "Resources"];
  return (
    <div className="bg-white flex items-center justify-between py-5">
      <div className="flex gap-10 items-center">
        <img src={Logo} />
        {navs.map((nav, index) => (
          <div key={index} className={`hover:text-[#DB1D60] cursor-pointer ${index === 0 && "text-[#DB1D60]"}`}>
            {nav}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <Button
          variant="outlined"
          style={{ textTransform: "capitalize", color: "#DB1D60", border: "1px solid #DB1D60", padding: "10px 80px" }}
        >
          Call us
        </Button>
        <Button
          variant="contained"
          style={{
            background: "#DB1D60",
            padding: "10px 80px",
            textTransform: "capitalize",
          }}
        >
          Report
        </Button>
      </div>
    </div>
  );
}

export default Navigation;
