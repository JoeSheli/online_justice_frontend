import { ChevronRight } from "@mui/icons-material";
import React from "react";

function Step({
  number,
  title,
  desc,
  showNext,
  key,
}: {
  number: number;
  title: string;
  desc: string;
  showNext: boolean;
  key: number;
}) {
  return (
    <div key={key} className="flex items-center gap-5">
      <div className="flex items-start flex-col gap-4">
        <div
          className="py-3 px-5 rounded-md"
          style={{ background: "rgba(240, 240, 240, 0.04)" }}
        >
          {number}
        </div>
        <div className="font-bold text-lg">{title}</div>
        <div className="max-w-[15rem]">{desc}</div>
      </div>
      {showNext && <ChevronRight sx={{fontSize: 35}}/>}
    </div>
  );
}

export default Step;
