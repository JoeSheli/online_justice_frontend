import { KeyboardArrowDown } from "@mui/icons-material";
import { Radio } from "@mui/material";
import React from "react";

function DisplayQuestion({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border flex justify-between items-center p-5 rounded-xl">
      <div className="flex items-center">
        <Radio />
        <div className="flex flex-col gap-2">
          <div className="font-medium">{title}</div>
          <div className="text-[#707070] text-sm">{desc}</div>
        </div>
      </div>
      <KeyboardArrowDown />
    </div>
  );
}

export default DisplayQuestion;
