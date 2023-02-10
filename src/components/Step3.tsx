import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { finalValues } from "../atom";
import Ask2 from "../subcomponents/Ask2";
import Ask3 from "../subcomponents/Ask3";

function Step3() {
  const [values, setValues] = useRecoilState(finalValues)
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="border-b flex flex-col gap-5 py-5 w-full">
        <div className="font-bold text-3xl">About You</div>
      </div>
      <Ask2 question="Are you filing this report for someone else?" />
      <div className="flex gap-5 justify-between">
        <Ask3 question="Your name" type="simple" placeholder="Firstname" />
        <Ask3 type="simple" placeholder="Lastname" />
      </div>
      <div className="flex md:flex-nowrap  flex-wrap gap-5 items-center justify-between">
        <Ask3 type="select" question="Country or region" />
        <div></div>
        <Ask3 question="City" type="select" />
        <div></div>
        <Ask3
          type="simple"
          question="State/Province/Region"
          placeholder="State/Province/Region"
        />
      </div>
      <div className="flex md:flex-nowrap  flex-wrap gap-5 items-center justify-between">
        <Ask3
          type="simple"
          question="Zip/Postal Code"
          placeholder="Zip/Postal Code"
        />
        <Ask3
          type="simple"
          question="Phone Number"
          placeholder="Phone Number"
        />
        <Ask3 type="select" question="Phone Type" />
      </div>
      <div className="text-[gray] text-[0.95rem]">
        Zip/Postal code, phone number, phone type, and email are required if you
        want to later update your report online.{" "}
      </div>
      <div className="flex md:flex-nowrap  flex-wrap gap-5 items-center justify-between">
        <Ask3 type="select" question="Age Range" />
        <div></div>
        <Ask3 type="select" question="Military Status" />
        <div></div>
        <Ask3 type="select" question="Military Rank" />
        <div></div>
        <Ask3 type="select" question="Military Branch" />
      </div>
      <Ask2 question="Are you filing on behalf of your small business or organization?"/>
    </div>
  );
}

export default Step3;
