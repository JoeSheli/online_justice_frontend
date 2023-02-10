import { ArrowBack, East } from "@mui/icons-material";
import { Alert, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import Logo from "./assets/topLogo.png";
import { Step2Values, validation } from "./atom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import StepCounter from "./subcomponents/StepCounter";
import Shake from "react-reveal/Shake";
import { ValidationGroup } from "mui-validate";
function Form() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const navigate = useNavigate();
  const [error, setError] = useState<string[]>([]);
  const selectedValue = useRecoilValue(validation);
  const [spier, setSpier] = useState(false);
  const [secondsPassed, setSecondsPassed] = useState(0);
  useEffect(() => {
    if (secondsPassed === 4) {
      setError([]);
    } else if (secondsPassed === 0) {
      setTimeout(() => {
        setSpier(!spier);
      }, 5);
    }
  }, [secondsPassed]);
  useEffect(() => {
    if (error) {
      setSecondsPassed(0);
      setSpier(!spier);
      const interval = setInterval(() => {
        setSecondsPassed((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [error]);
  const [step2Values, setStep2values] = useRecoilState(Step2Values);
  return (
    <div className="max-w-[90rem] mx-auto px-6 md:px-14">
      <ValidationGroup>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col gap-10 py-5"
        >
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
          {error.length > 0 && (
            <Shake spy={spier}>
              <Alert severity="error">{error.map((f) => f)}</Alert>
            </Shake>
          )}
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
                type="submit"
                variant="contained"
                style={{
                  background: "#DB1D60",
                  padding: "10px 70px",
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  if (currentStep === 1) {
                    if (selectedValue === null || selectedValue === undefined) {
                      setError(["Enter your choice"]);
                      setSecondsPassed(0);
                      return;
                    }
                    setCurrentStep(currentStep + 1);
                  } else if (currentStep === 2) {
                    // check if one of  step2values has helperText
                    if (
                      step2Values?.date?.helperText ||
                      !step2Values?.date?.value
                    ) {
                      error.push("Enter date you gave your money ");
                      setStep2values({
                        ...step2Values,
                        date: {
                          ...step2Values.date,
                          helperText: "Enter date you gave your money ",
                        },
                      });
                    }
                    if (step2Values.heardScam.value.length === 0) {
                      error.push("Enter how you heard about the scam");
                      setStep2values({
                        ...step2Values,
                        heardScam: {
                          ...step2Values.heardScam,
                          helperText: "Enter how you heard about the scam ",
                        },
                      });
                    }
                    setSecondsPassed(0)
                    setError(error)
                    // check if date has value and check if
                  }
                  if (error.length === 0) {
                    setCurrentStep(currentStep + 1)
                  }
                }}
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
        </form>
      </ValidationGroup>
    </div>
  );
}

export default Form;