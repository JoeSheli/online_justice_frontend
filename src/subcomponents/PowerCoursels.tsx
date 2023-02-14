import React, { ReactNode } from "react";

function PowerCoursels({
  icon,
  title,
  desc,
  key,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  key: number;
}) {
  return (
    <div
      key={key}
      className="flex bg-white group duration-500 hover:bg-[#232323] hover:text-white cursor-pointer min-w-[20rem] flex-col items-start border rounded-2xl p-7 gap-3"
    >
      <div className="bg-[#DB1D60] duration-500 group-hover:bg-[#312e2e] p-3 rounded-lg">{icon}</div>
      <div className="font-bold text-lg capitalize">{title}</div>
      <div className="max-w-[50rem] duration-500 group-hover:text-white text-[#707070]">{desc}</div>
    </div>
  );
}

export default PowerCoursels;
