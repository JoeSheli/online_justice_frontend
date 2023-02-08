import React from "react";
import { ReactComponent as Scams } from "../assets/scams.svg";
import { ReactComponent as Lottery } from "../assets/lottery.svg";
import PowerCoursels from "../subcomponents/PowerCoursels";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

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
      desc: "We can provide help and guidance for victims of crypto scams, Forex scams, binary options scams and more",
    },
    {
      icon: <Scams />,
      title: "Romance scams",
      desc: "We can provide help and guidance for victims of crypto scams, Forex scams, binary options scams and more",
    },
    {
      icon: <Lottery />,
      title: "e-commerce scams",
      desc: "We can provide help and guidance for victims of crypto scams, Forex scams, binary options scams and more",
    },
  ];

  return (
    <div className="flex flex-col my-10 gap-6 items-center">
      <div className="text-3xl font-medium">The Power of Online Justice</div>
      <div className="text-center text-[0.9rem] max-w-[40rem] leading-6 text-[#707070]">
        Your report is shared with more than 3,000 law enforcers and enters our
        database of fraud criminals. Upon your demand, our cybersecurity experts
        will investigate your particular case and look into recovering a
        substantial part if not all of your lost funds.
      </div>
      <div className="flex w-full gap-5">
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
            padding: "15px 15px",
          }}
        >
          Contact an expert
        </Button>
      </Link>
    </div>
  );
}

export default OnlineJustice;
