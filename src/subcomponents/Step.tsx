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
    <div key={key} className="flex sm:min-w-[15rem] ">
      <div className="flex p-7 group rounded-2xl duration-500 hover:bg-[#DB1D60] items-start flex-col gap-4">
        <div
          className="py-3 px-5 text-lg group-hover:bg-white duration-700 group-hover:text-black rounded-md"
          style={{ background: "rgba(240, 240, 240, 0.04)" }}
        >
          {number}
        </div>
        <div className="font-bold text-lg">{title}</div>
        <div className="max-w-[15rem]">{desc}</div>
      </div>
      {showNext && <ChevronRight sx={{ fontSize: 35 }} className="sm:block my-auto hidden" />}
    </div>
  );
}

export default Step;
