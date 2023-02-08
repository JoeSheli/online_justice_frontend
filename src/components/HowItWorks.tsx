import React from "react";
import Step from "../subcomponents/Step";

function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Tell what happened",
      desc: "Find out what you can do to protect yourself. You can sollicit free consulting from our cybersecurity experts.",
    },
    {
      step: 2,
      title: "Get your next steps",
      desc: "Find out what you can do to protect yourself. You can sollicit free consulting from our cybersecurity experts.",
    },
    {
      step: 3,
      title: "Help stop fraud",
      desc: "Find out what you can do to protect yourself. You can sollicit free consulting from our cybersecurity experts.",
    },
  ];

  return (
    <div className="bg-[#232323] my-16 gap-10 rounded-lg text-white px-10 py-8 flex items-center">
      <div className="flex flex-col border-r-2 border-r-[#4b4b4b] border-solid py-8 pr-16 gap-4">
        <div className="text-2xl font-semibold max-w-[5rem] ">
          How it Works?
        </div>
        <div className="text-sm">Submit reports just in 3 step</div>
      </div>
      {steps.map(({ step, title, desc }, index) => (
        <Step
          showNext={index !== steps.length - 1}
          number={step}
          title={title}
          desc={desc}
          key={index}
        />
      ))}
    </div>
  );
}

export default HowItWorks;
