import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

function FAQ() {
  const [selectedQn, setSelectedQn] = useState<number | null>(null);
  const qns = [
    {
      title: "What can I report?",
      desc: "Report anything you think may be a fraud, scam, or bad business practice.",
    },
    {
      title: "How long does an average case take to complete?",
      desc: "Although our experienced team will look to complete your case as soon as possible, each case is unique. On average this process takes from two weeks to two months.",
    },
    {
      title: "How do you proceed to recover lost funds?",
      desc: "We are able to gather a great deal of information on the scammer by utilizing tools we have developed, as well as our own experience in dealing with scammers and our extensive database of fraud criminals. Our use of these tools allows us to leverage information that will get the scammer to settle and pay back the money they took, in order for his identity to not be reported to his national law enforcers.",
    },
    {
      title: "What is the cost of pursuing a case via OnlineJustice?",
      desc: "The total cost of the services is comprised of two parts: First, we charge a fixed-fee of 299$ at the beginning of the engagement for services rendered in the relevant engagement with each customer. Second, depending on the complexity of your case and the tools we need, our experts will provide you with an exact quotation, where the initial 299$ deposit is substracted from the final fee. No other hidden fees will be added at any time.",
    },
    {
      title: "Why don't you charge me at the end of the process only?",
      desc: "Each case requires a significant amount of man-hours to investigate, process, and bring to successful completion. We charge a fixed-fee to cover the general legal services rendered and operational costs that we incur, hence the need to do so ahead of any action we undertake on your behalf.",
    },
    {
      title: "Where is OnlineJustice based?",
      desc: "OnlineJustice is owned and operated by Orange INF Tools LTD registered under #14186929 and located at 167-169 Great Portland Street, 5th Floor, London W1W 5PF.",
    },
    {
      title: "How do I know Online Justice is not a scam?",
      desc: "We invite you to check out the hundreds of great reviews by our clients to verify that we are a legitimate and reputable organization. As well as this, our dedicated team will happily forward you the relevant credentials and organize with you a video call with them upon request.",
    },
    {
      title: "Are you legal professionals?",
      desc: "The services are provided by and/or under the supervision of licensed attorneys. Mainly, we work with a team of legal professionals who provide recovery consulting services and practical assistance in the pursuit of recouping your stolen funds.",
    },
    {
      title: "Will your actions lead to the taking of scammers to court?",
      desc: "No, our services do not include court representation. But, our methods of recovering your lost money involve Alternative Dispute Resolution outside of court in order to speed up things. So we deal with the banks and relevant agencies that made the relevant transaction. We found this is a far more effective means of securing the recovery of the funds.",
    },
    {
      title: "Does it matter where I am based?",
      desc: "It doesn't matter where you are based, our team can help you get your money back. So if you have the relevant documentation needed, we can help you regardless of your location.",
    },
  ];
  return (
    <div
      id="faq"
      className="bg-[#232323] my-10 px-5 py-16 rounded-lg text-white"
    >
      <div className="text-center font-bold text-2xl">FAQ</div>
      <div className="flex flex-col gap-3 mt-5">
        {qns.map((qn, index) => (
          <div
            key={index}
            onClick={() => {
              if (selectedQn === index) {
                setSelectedQn(null)
              } else {
                setSelectedQn(index);
              }
            }}
            className={`${
              selectedQn === index && "border"
            }  overflow-y-hidden flex flex-col gap-4  border-[#464646] duration-500 transition-all rounded-md p-5`}
          >
            <div className="font-bold pb-1 gap-3 cursor-pointer flex justify-between text-lg">
              <span className="">{qn.title}</span>
              <div
                className={`${
                  selectedQn === index ? "-rotate-180" : ""
                } duration-500`}
              >
                <KeyboardArrowDown />
              </div>
            </div>
            <div
              className={`text-sm ${
                selectedQn === index ? "block" : "hidden"
              } duration-500 transition-all`}
            >
              {qn.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
