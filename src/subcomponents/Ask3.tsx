import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  OutlinedInputProps,
  Select,
  styled,
  TextField,
  type TextFieldProps,
} from "@mui/material";
import { useState } from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useRecoilState } from "recoil";
import { Step2Values } from "../atom";

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
  number,
  placeholder,
  data,
  value,
  setValue,
  helperText: valueRef,
  setHelperText,
}: {
  question?: string;
  type: string;
  placeholder?: string;
  data?: any[];
  number?: boolean;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  helperText?: any;
  setHelperText?: any;
}) {
  const [values, setValues] = useRecoilState(Step2Values);
  return (
    <div className="flex gap-3 justify-end   w-full flex-col">
      {question ? <div className="font-medium">{question}</div> : <div></div>}
      {type === "simple" ? (
        <ReusedTextField
          onChange={(e) => {
            if (number) {
              if (!/^[0-9\b]+$/.test(e.target.value)) {
                setValue!("");
              } else {
                setValue!(e.target.value);
              }
            } else {
              setValue!(e.target.value);
            }
          }}
          error={valueRef !== undefined || valueRef !== null}
          helperText={valueRef}
          label={placeholder}
          variant="filled"
          id="outlined-required"
          className="w-full"
          value={value}
        />
      ) : type === "select" ? (
        <FormControl variant="standard">
          <InputLabel id="demo-customized-select-label">Select</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<BootstrapInput />}
            placeholder="Select"
            label="Select"
            onChange={(e) => {
              setValue!(e.target.value as string);
            }}
          >
            {data?.map((data, index) => (
              <MenuItem key={index} value={data.value}>
                {data.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{valueRef}</FormHelperText>
        </FormControl>
      ) : (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="MM / DD / YYYY"
            inputFormat="MM/DD/YYYY"
            value={values.date.value}
            onChange={(e) => {
              setValues({ ...values, date: { value: e, helperText: "" } });
            }}
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
