import { TextField } from "@mui/material";
import React from "react";
import Ask2 from "../subcomponents/Ask2";
import Ask3, { ReusedTextField } from "../subcomponents/Ask3";

function Step2() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="border-b flex flex-col gap-5 py-5 w-full">
        <div className="font-bold text-3xl">Report details</div>
        <div>
          Please share as much as you know. The details help law enforcement
          investigations.
        </div>
      </div>
      <Ask2 question="Did you send the scammer payment of any kind?" />
      <div className="flex gap-5 justify-between">
        <Ask3
          question="How much money did you pay the scammer in total? ($)"
          type="simple"
          placeholder="Paid amount ($)"
        />
        <Ask3
          question="How did you pay or send the money?"
          type="select"
          data={["Paypal"]}
        />
      </div>
      <div className="flex gap-5 justify-between">
        <Ask3
          question="How much money did you pay the scammer in total? ($)"
          type="date"
          placeholder="Paid amount ($)"
        />
        <Ask3
          question="How did you pay or send the money?"
          type="select"
          data={["Paypal"]}
        />
      </div>
      <div className="font-bold mb-3 mt-10 text-3xl">
        Details about the scammer
      </div>
      <Ask3
        question=" Which government agency did they pretend to be? "
        type="simple"
        placeholder="Type Government agency name"
      />
      <div className="flex gap-5 justify-between">
        <Ask3
          question=" Name of the person you dealt with "
          type="simple"
          placeholder="Firstname"
        />
        <Ask3 type="simple" placeholder="Lastname" />
      </div>
      <Ask2 question="Do you know any other information about the scammer (phone, website, etc.)?" />
      <div className="font-bold  text-3xl">Comment</div>
      <div className="-mt-2">
        Describe what happened. Tell us what happened in your own words. Include
        specific details you remember. Do not include any sensitive information,
        such as SSN, DOB, driver's license numbers, account numbers, medical
        history, etc.
      </div>
      <ReusedTextField multiline className="" label="Type..."  rows={5} variant="filled"/>
    </div>
  );
}

export default Step2;
