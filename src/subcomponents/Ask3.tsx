import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  OutlinedInputProps,
  Select,
  styled,
  TextField,
  type TextFieldProps,
} from "@mui/material";
import React, { useState } from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #89CFF0",
    overflow: "hidden",
    background: "#f7e5de8a",
    color: "black",

    width: "100%",
    fontWeight: "bold",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
  marginTop: "1px",

  "&.Mui-focused": {
    marginTop: "-1px",
  },
  "& .MuiInputBase-input": {
    margin: "0 -10px",
    borderRadius: 4,
    border: "1px solid #ced4da",
    padding: "20px 8px",
    marginTop: "-5px",
  },
}));

export const ReusedTextField = styled((props: TextFieldProps) => (
  <TextField
    InputLabelProps={{ style: { color: "gray" } }}
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1.5px solid gray",
    overflow: "hidden",
    borderRadius: 4,
    background: "white",
    fontWeight: "semibold",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    //   "&.Mui-focused": {
    //     borderColor: "#f47646",
    //   },
  },
}));
function Ask3({
  question,
  type,
  placeholder,
  data,
}: {
  question?: string;
  type: string;
  placeholder?: string;
  data?: string[];
}) {
  const [date, setDate] = useState<any>(null);
  return (
    <div className="flex gap-3 justify-end   w-full flex-col">
     {question && <div className="font-medium">{question}</div>}
      {type === "simple" ? (
        <ReusedTextField label={placeholder} variant="filled" />
      ) : type === "select" ? (
        <FormControl variant="standard">
          <InputLabel id="demo-customized-select-label">Select</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<BootstrapInput />}
            placeholder="Select"
            label="Select"
          >
            <MenuItem value={10}>Value 1</MenuItem>
            <MenuItem value={20}>Value 2</MenuItem>
            <MenuItem value={30}>Value 3</MenuItem>
          </Select>
        </FormControl>
      ) : (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="MM / DD / YYYY"
            inputFormat="MM/DD/YYYY"
            value={date}
            onChange={(e) => setDate(e)}
            renderInput={(params) => (
              <TextField placeholder="MM / DD / YYYY" {...params} />
            )}
          />
        </LocalizationProvider>
      )}
    </div>
  );
}

export default Ask3;
