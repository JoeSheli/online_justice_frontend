import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useState } from "react";

function FAQ() {
  const [selectedQns, setSelectedQns] = useState<number[]>([]);
  const qns = [
    {
      title: "What can I report?",
      desc: "Report anything you think may be a fraud, scam, or bad business practice",
    },
    {
      title: "How long does an average case take to complete?",
      desc: "Report anything you think may be a fraud, scam, or bad business practice",
    },
    {
      title: "How do I know Online Justice is not a scam?",
      desc: "Report anything you think may be a fraud, scam, or bad business practice",
    },
  ];
  return (
    <div className="bg-[#232323] mb-10 px-5 py-16 rounded-lg text-white">
      <div className="text-center font-bold text-2xl">FAQ</div>
      <div className="flex flex-col gap-10 mt-5">
        {qns.map((qn, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedQns(
                selectedQns.includes(index)
                  ? selectedQns.filter((selected) => selected !== index)
                  : [...selectedQns, index]
              );
            }}
            style={{ height: selectedQns.includes(index) ? qn.desc.length + 30 : 64 }}
            className={`${
              selectedQns.includes(index) && "border"
            }  overflow-y-hidden flex flex-col gap-4  border-[#464646] duration-500 transition-all rounded-md p-5`}
          >
            <div className="font-bold   cursor-pointer flex justify-between text-lg">
              <span>{qn.title}</span>
              <div
                className={`${
                  selectedQns.includes(index) ? "-rotate-180" : ""
                } duration-500`}
              >
                <KeyboardArrowDown />
              </div>
            </div>
            <div className="text-sm">{qn.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
