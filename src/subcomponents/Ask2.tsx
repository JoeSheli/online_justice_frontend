import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

function Ask2({
  question,
  setValue,
}: {
  question: string;
  setValue?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const labels = ["Yes", "No"];
  return (
    <RadioGroup
      onChange={(e) => {
        setValue!(e.target.value === "Yes");
      }}
      className="flex flex-col gap-4"
    >
      <div>{question}</div>
      <div className="flex items-center">
        <div>
          {labels.map((label, index) => (
            <FormControlLabel
              value={label}
              key={index}
              label={label}
              control={<Radio />}
            />
          ))}
        </div>
      </div>
    </RadioGroup>
  );
}

export default Ask2;
