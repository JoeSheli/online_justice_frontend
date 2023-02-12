import React from "react";
import { ReactComponent as Brands } from "../assets/Brands.svg";
import { ReactComponent as Yahoo } from "../assets/yahoo.svg";
import { ReactComponent as MarketWatch } from "../assets/marketwatch.svg";
import { ReactComponent as Benzinga } from "../assets/Benzinga.svg";
import { ReactComponent as AP } from "../assets/Card.svg";
import { ReactComponent as Digital } from "../assets/digital.svg";
function Contact() {
  return (
    <div className="flex md:flex-row flex-col-reverse  md:mt-7 mt-14 gap-8 md:gap-20  justify-between lg:pr-32 items-center">
      <div className="relative  sm:w-[90%] w-full max-w-[30rem]">
        <Brands />
        <a
          target="_blank"
          href=" https://finance.yahoo.com/cryptocurrencies/onlinejustice-brings-policies-deal-online-210733210.html"
          className="absolute  top-0 sm:top-10 left-0"
        >
          <Yahoo className="sm:w-[10rem] w-[8rem]" />
        </a>
        <a
          target="_blank"
          href=" https://www.marketwatch.com/press-release/onlinejustice-brings-new-policies-to-deal-with-online-scams-and-frauds-2022-10-05?mod=search_headline"
          className="absolute top-0 sm:top-10 right-0"
        >
          <MarketWatch className="sm:w-[10rem] w-[8rem]" />
        </a>
        <a
          href=" https://apnews.com/press-release/newmediawire/technology-business-london-888ecd87c01025dfb2cbbd6bffe9ff8f"
          target="_blank"
          className="absolute sm:bottom-32 bottom-16 left-0"
        >
          <AP className="sm:w-[10rem] w-[8rem]" />
        </a>
        <a
          href=" https://www.digitaljournal.com/pr/onlinejustice-brings-new-policies-to-deal-with-online-scams-and-frauds"
          target="_blank"
          className="absolute sm:bottom-32 bottom-12 right-0"
        >
          <Digital className="sm:w-[10rem] w-[8rem]" />
        </a>
        <a
          href=" https://www.benzinga.com/pressreleases/22/10/29146053/onlinejustice-brings-new-policies-to-deal-with-online-scams-and-frauds"
          target="_blank"
          className="absolute top-[35%] left-[30%]"
        >
          <Benzinga className="sm:w-[10rem] w-[8rem]" />
        </a>
      </div>
      <div className="text-4xl font-bold">As seen on</div>
    </div>
  );
}

export default Contact;
