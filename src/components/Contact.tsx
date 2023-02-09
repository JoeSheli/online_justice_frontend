import React from "react";
import { ReactComponent as Brands } from "../assets/Brands.svg";
import { ReactComponent as Yahoo } from "../assets/yahoo.svg";
import { ReactComponent as MarketWatch } from "../assets/marketwatch.svg";
import { ReactComponent as Benzinga } from "../assets/Benzinga.svg";
import { ReactComponent as AP } from "../assets/Card.svg";
import { ReactComponent as Digital } from "../assets/digital.svg";
function Contact() {
  return (
    <div className="flex md:flex-row flex-col-reverse  gap-20  justify-between lg:pr-32 items-center">
      <div className="relative  w-full sm:w-[35rem] h-full sm:h-[35rem]">
        <Brands />
        <a
          href="https://www.yahoo.com/"
          className="absolute  top-0 sm:top-10 left-0"
        >
          <Yahoo className="sm:w-auto w-[10rem]" />
        </a>
        <a
          href="https://www.marketwatch.com/"
          className="absolute top-0 sm:top-10 right-0"
        >
          <MarketWatch className="sm:w-auto w-[10rem]" />
        </a>
        <a
          href="https://apnews.com/"
          className="absolute sm:bottom-32 bottom-16 left-0"
        >
          <AP className="sm:w-auto w-[10rem]" />
        </a>
        <a
          href="https://www.digitaljournal.com/"
          className="absolute sm:bottom-32 bottom-12 right-0"
        >
          <Digital className="sm:w-auto  w-[10rem]" />
        </a>
        <a
          href="https://www.benzinga.com/"
          className="absolute top-[35%] left-[30%]"
        >
          <Benzinga className="sm:w-auto w-[10rem]" />
        </a>
      </div>
      <div className="text-4xl font-bold">As seen on</div>
    </div>
  );
}

export default Contact;
