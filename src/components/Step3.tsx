import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { finalValues } from ".atom";
import Ask2 from ".subcomponents/Ask2";
import Ask3 from ".subcomponents/Ask3";

function Step3() {
  const [values, setValues] = useRecoilState(finalValues);
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="border-b flex flex-col gap-5 py-5 w-full">
        <div className="font-bold text-3xl">About You</div>
      </div>
      <Ask2 question="Are you filing this report for someone else?" />
      <div className="flex gap-5 justify-between">
        <Ask3
          value={values.firstname.value}
          setValue={(value) => {
            setValues({
              ...values,
              firstname: { ...values.firstname, value },
            });
          }}
          helperText={values.firstname.helperText}
          question="Your name"
          type="simple"
          placeholder="Firstname"
        />
        <Ask3
          value={values.lastname.value}
          setValue={(value) =>
            setValues({
              ...values,
              lastname: { ...values.lastname, value },
            })
          }
          helperText={values.lastname.helperText}
          type="simple"
          placeholder="Lastname"
        />
      </div>
      <div className="flex md:flex-nowrap  flex-wrap gap-5 items-center justify-between">
        <Ask3 type="select" question="Country or region" />
        <div></div>
        <Ask3 question="City" type="select" />
        <div></div>
        <Ask3
          type="simple"
          question="State/Province/Region"
          placeholder="State/Province/Region"
        />
      </div>
      <div className="flex mb-10 md:flex-nowrap  flex-wrap gap-5 items-center justify-between">
        <Ask3
          type="simple"
          question="Zip/Postal Code"
          placeholder="Zip/Postal Code"
        />
        <Ask3
          type="simple"
          question="Phone Number"
          placeholder="Phone number"
          value={values.phoneNumber.value}
          setValue={(value) =>
            setValues({
              ...values,
              phoneNumber: { ...values.phoneNumber, value },
            })
          }
          helperText={values.phoneNumber.helperText}
        />
        <Ask3
          type="simple"
          question="Email address"
          placeholder="Info@email.com"
          value={values.email.value}
          setValue={(value) =>
            setValues({
              ...values,
              email: { ...values.email, value },
            })
          }
          helperText={values.email.helperText}
        />
      </div>
    </div>
  );
}

export default Step3;
