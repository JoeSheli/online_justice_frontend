import React from "react";
import { ReactComponent as Brands } from "../assets/Brands.svg";
import { ReactComponent as Yahoo } from "../assets/yahoo.svg";
import { ReactComponent as MarketWatch } from "../assets/marketwatch.svg";
import { ReactComponent as Benzinga } from "../assets/Benzinga.svg";
import { ReactComponent as AP } from "../assets/Card.svg";
import { ReactComponent as Digital } from "../assets/digital.svg";
function Contact() {
  return (
    <div className="flex justify-between pr-32 items-center">
      <div className="relative">
        <Brands />
        <a href="https://www.yahoo.com/" className="absolute top-10 left-0">
          <Yahoo />
        </a>
        <a
          href="https://www.marketwatch.com/"
          className="absolute top-10 right-0"
        >
          <MarketWatch />
        </a>
        <a href="https://apnews.com/" className="absolute bottom-32 left-0">
          <AP />
        </a>
        <a
          href="https://www.digitaljournal.com/"
          className="absolute bottom-32 right-0"
        >
          <Digital />
        </a>
        <a
          href="https://www.benzinga.com/"
          className="absolute top-[35%] left-[30%]"
        >
          <Benzinga />
        </a>
      </div>
      <div className="text-4xl font-bold">As seen on</div>
    </div>
  );
}

export default Contact;
