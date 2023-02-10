import { Button, IconButton, Popover } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../assets/topLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "@mui/icons-material";
function Navigation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const navs = ["Home", "About us", "FAQ", "Resources"];
  return (
    <div className="bg-white z-50 sticky top-0  min-w-screen">
      <div className="bg-white  max-w-[90rem] mx-auto p-2 sm:px-14 flex items-center justify-between py-5">
        <div className="flex gap-12 items-center">
          <Link to="/">
            <img src={Logo} className="sm:w-auto w-[12rem]"/>
          </Link>
          <div className="lg:flex hidden items-center gap-10 lg">
            {navs.map((nav, index) => (
              <a
                href={
                  index === 3
                    ? "https://onlinejustice.com/blog/"
                    : `#${nav.toLowerCase().split(" ").join("")}`
                }
                key={index}
                className={`hover:text-[#DB1D60] cursor-pointer ${
                  index === 0 && "text-[#DB1D60] text-sm font-medium"
                }`}
              >
                {nav}
              </a>
            ))}
          </div>
        </div>
        <div className="lg:hidden flex ">
          <IconButton onClick={handleClick}>
            <Menu />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            className="p-5"
          >
            {[...navs, "Call Us", "Report"].map((nav, index) => (
              <div
                key={index}
                onClick={() => {
                  if (index === 5 || index === 4) {
                    navigate("/form");
                  }
                }}
                className="px-2 py-1 min-w-[10rem] font-medium cursor-pointer hover:text-white hover:bg-[#DB1D60]"
              >
                {nav}
              </div>
            ))}
          </Popover>
        </div>
        <div className="lg:flex hidden items-center gap-5">
          <Button
            href="tel:+442045253282"
            className="w-[100px] sm:w-[120px]"
            variant="outlined"
            style={{
              textTransform: "capitalize",
              color: "#DB1D60",
              border: "1px solid #DB1D60",
              padding: "10px",
            }}
          >
            Call us
          </Button>
          <Link to="/form">
            <Button
              className="w-[100px] sm:w-[120px]"
              variant="contained"
              style={{
                background: "#DB1D60",
                padding: "10px",
                textTransform: "capitalize",
              }}
            >
              Report
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
