import { atom, RecoilState } from "recoil";

export const validation: RecoilState<any> = atom({
  key: "validation",
  default: null,
});

export const Step2Values: RecoilState<any> = atom({
  key: "Step2Values",
  default: {
    firstname: { value: "", helperText: "" },
    lastname: { value: "", heperText: "" },
    payment: { value: "", helperText: "" },
    government: { value: "", helperText: "" },
    date: { value: null, helperText: "" },
    heardScam: { value: "", helperText: "" },
  },
});

export const finalValues: RecoilState<any> = atom({
  key: "finalValues",
  default: {
    firstname: { value: "", helperText: "" },
    lastame: { value: "", helperText: "" },
  },
});
