import React from "react";
import { ReactComponent as People } from "../assets/people.svg";
function CyberDefense() {
  return (
    <div className="flex md:flex-row flex-col gap-10 justify-between items-center w-full">
      <div className="flex flex-col gap-5 max-w-[29rem]">
        <div className="text-[2rem] font-medium capitalize leading-[2.5rem]">
          Spreading cyber defense for our clients
        </div>
        <div className="text-[#707070] leading-[1.3rem] text-[1.15rem]">
          We are a one-stop-shop for Online Cyber Defense Solutions - an
          organization dedicated to our client's Information Security and Cyber
          Defense in all ways and shapes. Our team of experts and specialists
          put the client's defense ahead in order to solve the issue and ensure
          it won't repeat.In Online Justice, you can find the best, the
          quickest, and the most immediate solution for information security and
          cyber issues, blockchain analysis, and more.
        </div>
      </div>
      <People className="md:min-w-[25rem] w-[25rem]" />
    </div>
  );
}

export default CyberDefense;
