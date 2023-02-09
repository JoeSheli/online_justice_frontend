import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

function Ask2({ question }: { question: string }) {
  const labels = ["Yes", "No"];
  return (
    <div className="flex flex-col gap-4">
      <div>{question}</div>
      <div className="flex items-center">
        <div
        >
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
    </div>
  );
}

export default Ask2;
