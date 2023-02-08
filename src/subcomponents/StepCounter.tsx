import React from "react";

function StepCounter({ step }: { step: number }) {
  const steps = ["Start", "Details", "About you"];
  return (
    <div className="flex gap-5 w-full">
      {steps.map((stepdescription, i) => (
        <div className="flex flex-col gap-3 w-full">
         {  i < step  ? <div className="font-semibold">{stepdescription}</div> : <div className="h-[1.47rem]"></div>}
          <div
            key={i}
            className={`w-full h-3 rounded-full ${
              i < step ? "bg-[#232323]" : "bg-[#F0F0F0]"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default StepCounter;
