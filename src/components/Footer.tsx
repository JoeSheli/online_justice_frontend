import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ReactComponent as LinkedIn } from "../assets/linkedIn.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Mail } from "../assets/message.svg";
import { ReactComponent as Location } from "../assets/location.svg";

function Footer() {
  const foooters = [
    "Home",
    "About us",
    "FAQ",
    "Resources",
    "Terms & Conditions",
    "Privacy  Policy",
  ];
  const others = [
    <a
      target="_blank"
      href="tel:+442045253282"
      className="flex items-center gap-3"
    >
      <Phone />
      <span>+44 204 525 3282</span>
    </a>,
    <div className="flex items-center gap-3">
      <Mail />
      <span>Info@email.com</span>
    </div>,
    <div className="flex items-center gap-3">
      <Location />
      <span>Lorem ipsum dolor sit amet, consectetur</span>
    </div>,
  ];
  return (
    <div className="bg-[#232323] text-white">
      <div className="max-w-[90rem] px-14 py-10 flex md:flex-row flex-col gap-10 mx-auto">
        <div className="flex border-r-2 border-[#383838] pr-10 py-6 max-w-[23rem] gap-5 flex-col">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <div>
            We are an organization dedicated to returning money stolen from
            those who have fallen victim to scams perpetrated by online
            criminals.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/online-justice/"
              className="cursor-pointer border-2 rounded-md p-3 border-[#383838]"
            >
              <LinkedIn />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/onlinejustice4u"
              className="cursor-pointer border-2 rounded-md p-3 border-[#383838]"
            >
              <Instagram />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/OnlineJustice4u"
              className="cursor-pointer border-2 rounded-md p-3 border-[#383838]"
            >
              <Facebook />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-10">
            <div className="text-2xl font-semibold">Menu</div>
            <div className="flex flex-wrap items-center gap-6 font-medium">
              {foooters.map((foter, index) => (
                <a
                  target={
                    index === 3 || index === 4 || index === 5
                      ? "_blank"
                      : "_top"
                  }
                  href={
                    index === 3
                      ? "https://onlinejustice.com/blog/"
                      : index === 4
                      ? "https://onlinejustice.com/terms-conditions/"
                      : index === 5
                      ? "https://onlinejustice.com/privacy-policy-2/"
                      : `#${foter.toLowerCase().split(" ").join("")}`
                  }
                  key={index}
                >
                  {foter}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-2xl font-semibold">Contact info</div>
            <div className="flex flex-wrap items-center gap-5 font-medium">
              {others.map((foter, index) => (
                <div key={index}>{foter}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
