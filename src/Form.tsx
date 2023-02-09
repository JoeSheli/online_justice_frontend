import { ArrowBack, East } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./assets/topLogo.png";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import StepCounter from "./subcomponents/StepCounter";

function Form() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);
  return (
    <div className="max-w-[90rem] mx-auto px-6 md:px-14">
      <div className="flex flex-col gap-10 py-5">
        <div className="flex  items-center justify-between">
          <div
            onClick={() => {
              if (currentStep === 1) {
                navigate("/");
              } else {
                setCurrentStep(currentStep - 1);
              }
            }}
            className="flex gap-2 cursor-pointer items-center"
          >
            <ArrowBack />
            <div>Back</div>
          </div>
          <img src={Logo} />
          <div></div>
        </div>
        <div className="flex flex-col items-end gap-4 rounded-xl border p-5">
          <StepCounter step={currentStep} />
          {currentStep === 1 ? (
            <Step1 />
          ) : currentStep === 2 ? (
            <Step2 />
          ) : (
            <Step3 />
          )}
          <div className="flex gap-5">
            {currentStep > 1 && (
              <Button
                style={{ color: "black", textTransform: "capitalize" }}
                className="capitalize"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                previous question
              </Button>
            )}
            <Button
              variant="contained"
              style={{
                background: "#DB1D60",
                padding: "10px 70px",
                textTransform: "capitalize",
              }}
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              {currentStep === 3 ? (
                <div className="flex items-center gap-3">
                  <span>Submit</span>
                  <East />
                </div>
              ) : (
                "Continue"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
