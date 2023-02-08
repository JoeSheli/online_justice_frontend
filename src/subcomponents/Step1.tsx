import React from "react";
import DisplayQuestion from "./DisplayQuestion";

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
      {data.map((d, i) => (
        <DisplayQuestion key={i} desc={d.desc} title={d.title} />
      ))}
    </div>
  );
}

export default Step1;
