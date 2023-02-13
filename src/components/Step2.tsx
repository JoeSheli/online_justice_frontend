import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { Step2Values } from "../atom";
import Ask2 from "../subcomponents/Ask2";
import Ask3, { ReusedTextField } from "../subcomponents/Ask3";

function Step2() {
  const [step2Values, setStep2Values] = useRecoilState(Step2Values);
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="border-b flex flex-col gap-5 py-5 w-full">
        <div className="font-bold text-3xl">Report details</div>
        <div>
          Please share as much as you know. The details help law enforcement
          investigations.
        </div>
      </div>
      <Ask2 question="Did you send the scammer payment of any kind?" />
      <div className="flex sm:items-start sm:flex-nowrap flex-wrap items-end gap-5 justify-between">
        <Ask3
          value={step2Values.payment.value}
          number
          setValue={(value) =>
            setStep2Values({
              ...step2Values,
              payment: { ...step2Values.payment, value },
            })
          }
          setHelperText={(value: any) =>
            setStep2Values({
              ...step2Values,
              payment: { ...step2Values.payment, helperText: value },
            })
          }
          helperText={step2Values.payment.helperText}
          question="How much money did you pay the scammer in total? ($)"
          type="simple"
          placeholder="Paid amount ($)"
        />
        <Ask3
          question="How did you pay or send the money?"
          type="simple"
          placeholder="Please specif how"
        />
      </div>
      <div className="flex sm:items-start sm:flex-nowrap flex-wrap items-end gap-5 justify-between">
        <Ask3
          // value={''}
          setValue={(value) =>
            setStep2Values({
              ...step2Values,
              date: { ...step2Values.date, value },
            })
          }
          setHelperText={(value: any) =>
            setStep2Values({
              ...step2Values,
              date: { ...step2Values.date, helperText: value },
            })
          }
          question="When did you most recently pay or send money?"
          type="date"
          placeholder="MM / DD / YYYY"
        />
        <Ask3
          value={step2Values.heardScam.value}
          setValue={(value) =>
            setStep2Values({
              ...step2Values,
              heardScam: { ...step2Values.heardScam, value },
            })
          }
          question="How did you first learn abouth the scam"
          type="select"
          data={[{ label: "Online", value: "online" }]}
        />
      </div>
      <div className="font-bold mb-3 mt-10 text-3xl">
        Details about the scammer
      </div>
      <Ask3
        // value={government}
        // setValue={setGovernment}
        // valueRef={governmentHelperText}
        question=" Which government agency did they pretend to be? "
        type="simple"
        placeholder="Type Government agency name"
      />
      <div className="flex sm:items-start sm:flex-nowrap flex-wrap items-end gap-5 justify-between">
        <Ask3
          // value={firstname}
          // setValue={setFirstname}
          // valueRef={firstnameHelperText}
          question=" Name of the person you doubt with "
          type="simple"
          placeholder="Firstname"
        />
        <div className="w-full mt-6">
          <Ask3
            // value={lastname}
            // setValue={setLastname}
            // valueRef={lastnameHelpertext}
            type="simple"
            placeholder="Lastname"
          />
        </div>
      </div>
      <Ask2 question="Do you know any other information about the scammer (phone, website, etc.)?" />
      <div className="font-bold  text-3xl">Comment</div>
      <div className="-mt-2">
        Describe what happened. Tell us what happened in your own words. Include
        specific details you remember. Do not include any sensitive information,
        such as SSN, DOB, driver's license numbers, account numbers, medical
        history, etc.
      </div>
      <ReusedTextField
        multiline
        className=""
        label="Type..."
        rows={5}
        variant="filled"
      />
    </div>
  );
}

export default Step2;
