import React from "react";
import { ReactComponent as Scams } from ".assets/scams.svg";
import { ReactComponent as Lottery } from ".assets/lottery.svg";
import PowerCoursels from ".subcomponents/PowerCoursels";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaLandmark,
  FaBriefcase,
  FaMoneyBill,
  FaBook,
} from "react-icons/fa";
function OnlineJustice() {
  const experts = [
    {
      icon: <Scams />,
      title: "Investment scams",
      desc: "We can provide help and guidance for victims of crypto scams, Forex scams, binary options scams and more",
    },
    {
      icon: <Lottery />,
      title: "Lottery scams",
      desc: "We can provide help and guidance for victims of lottery scams, prize win scams, sweepstakes cams, online gambling scams and more.",
    },
    {
      icon: <FaHeart color="white" />,
      title: "Romance scams",
      desc: "We can provide help and guidance for victims of romance scams, Military romance scams, extortion, intimate blackmail and more.",
    },
    {
      icon: <FaShoppingCart color="white" />,
      title: "e-commerce scams",
      desc: "We can provide help and guidance for victims of marketplace scams, online shopping scams and more. ",
    },
    {
      icon: <FaLandmark color="white" />,
      title: "Loan scams",
      desc: `We can provide help and
      guidance for victims of loan
      fee scams, no credit check
      scams, debt consolidation
      scams and more.`,
    },
    {
      icon: <FaBriefcase color="white" />,
      title: "Employment scams",
      desc: `We can provide help and
      guidance for victims of
      online employment scam,
      data entry job scams and
      more.`,
    },
    {
      icon: <FaBook color="white"/>,
      title: "Tax Refund scams",
      desc: `We can provide help and
      guidance for victims of tax
      refund scams and more.`,
    },
    {
      icon: <FaMoneyBill color="white"/>,
      title: "Inheritance scams",
      desc: `We can provide help and
      guidance for victims of
      fake inheritance scams and
      more.`,
    },
  ];

  return (
    <div className="flex flex-col my-10 gap-6 items-center">
      <div className="text-3xl text-center font-medium">
        The Power of Online Justice
      </div>
      <div className="text-center text-[0.9rem] max-w-[40rem] leading-6 text-[#707070]">
        Your report is shared with more than 3,000 law enforcers and enters our
        database of fraud criminals. Upon your demand, our cybersecurity experts
        will investigate your particular case and look into recovering a
        substantial part if not all of your lost funds.
      </div>
      <div className="flex experts overflow-x-auto pb-4 w-full gap-5">
        {experts.map((expert, index) => (
          <PowerCoursels
            key={index}
            icon={expert.icon}
            title={expert.title}
            desc={expert.desc}
          />
        ))}
      </div>
      <Link to="/form">
        <Button
          style={{
            textTransform: "capitalize",
            color: "#DB1D60",
            border: "1px solid #DB1D60",
            padding: "20px",
          }}
          className="text-lg hover:text-white duration-500 hover:bg-[#DB1D60]"
        >
          Contact an expert
        </Button>
      </Link>
    </div>
  );
}

export default OnlineJustice;
