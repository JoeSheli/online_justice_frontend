import React from "react";
import Step from "../subcomponents/Step";

function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Tell what happened",
      desc: "Report a scam, a company, or an unwanted call.",
    },
    {
      step: 2,
      title: "Get your next steps",
      desc: "Find out what you can do to protect yourself. You can sollicit free consulting from our cybersecurity experts.",
    },
    {
      step: 3,
      title: "Help stop fraud",
      desc: "We use and share reports with our law enforcement partners to help with investigations.",
    },
  ];

  return (
    <div className="bg-[#232323] my-16 gap-10 rounded-lg overflow-x-auto md:flex-row flex-col md:w-full mx-auto w-fit text-white px-10 py-8 flex">
      <div className="flex sm:min-w-[15rem] flex-col sm:border-r-2 sm:border-b-0  border-b-2 border-r-[#4b4b4b] border-solid py-8 pr-16 gap-4">
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
