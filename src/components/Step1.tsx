import { KeyboardArrowDown } from "@mui/icons-material";
import { Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { validation } from "../atom";

function Step1() {
  const data = [
    {
      title: "An impersonator",
      desc: "(ex. fake government, business, love interest, grandchild)",
    },
    {
      title: "Job, investment, money-making opportunity, franchise",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Phone, internet, TV service",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Health",
      desc: "(ex. weight loss, eye care, treatment)",
    },
    {
      title: "Just an annoying call",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Online shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Sweepstakes, prize, lottery",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Credit, debt, loan",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Auto sale, repair",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Something else",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];
  const [selectedValue, setSelectedValue] = useRecoilState(validation);
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="border-b flex flex-col gap-5 py-5 w-full">
        <div className="font-bold text-2xl">
          Is your report about any of these common problems?
        </div>
        <div>
          Choose the best fit. If you don't see your problem, choose “Something
          else.”
        </div>
      </div>
      <div
        className=" flex flex-col gap-5"
        aria-labelledby="demo-customized-radios"
      >
        {data.map((item, index) => (
          <label
            key={index}
            onClick={() => setSelectedValue(index)}
            className="border flex justify-between items-center p-5 rounded-xl"
          >
            <div className="flex items-center">
              <Radio name="question" checked={selectedValue === index} />
              <div className="flex flex-col gap-2">
                <div className="font-medium">{item.title}</div>
                <div className="text-[#707070] text-sm">{item.desc}</div>
              </div>
            </div>
            <KeyboardArrowDown />
          </label>
        ))}
      </div>
    </div>
  );
}

export default Step1;
