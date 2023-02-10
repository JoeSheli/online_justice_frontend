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
    <div key={key} className="flex min-w-[17rem] flex-col items-start border rounded-2xl p-5 gap-3">
      <div className="bg-[#DB1D60] p-3 rounded-lg">{icon}</div>
      <div className="font-bold text-lg capitalize">{title}</div>
      <div className="max-w-[50rem] text-[#707070]">{desc}</div>
    </div>
  );
}

export default PowerCoursels;
