import React, { useState } from "react";
import ChooseLanguage from "./ChooseLanguage";
import ChooseLocation from "./ChooseLocation";
import ChooseName from "./ChooseName";
import ChoosePixelFriend from "./ChoosePixelFriend";
import { stepHeadings } from "./constants";
import FinalStep from "./FinalStep";
import Tab from "./Tab";

function ChatbotConfiguration() {
  const [step, setStep] = useState(1);
  const [pixelFriendId, setPixelFriendId] = useState<number | undefined>(
    undefined
  );
  const [background, setBackground] = useState<number | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [language, setLanguage] = useState<string | undefined>(undefined);
  const [voice, setVoice] = useState<string | undefined>(undefined);

  const mapStepToState = [pixelFriendId, background, name, language && voice];
  const disabled =
    step < 5 &&
    (mapStepToState[step - 1] === undefined ||
      (typeof mapStepToState[step - 1] === "string" &&
        (mapStepToState[step - 1]! as string).length === 0));

  const handleNextClick = () => {
    setStep(step + 1);
  };
  return (
    <div className="tw-container tw-mx-auto tw-min-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-16">
      {step < 5 && (
        <>
          <h1 className="tw-font-medium tw-leading-tight tw-text-4xl tw-mb-6">
            {stepHeadings[step - 1]}
          </h1>
          <div className="tw-flex tw-items-center tw-justify-around">
            <Tab step={1} text="Friend" active={step === 1} />
            <Tab step={2} text="Location" active={step === 2} />
            <Tab step={3} text="Name" active={step === 3} />
            <Tab step={4} text="Language" active={step === 4} />
          </div>
        </>
      )}
      {step === 1 && (
        <ChoosePixelFriend
          pixelFriendId={pixelFriendId}
          setPixelFriendId={setPixelFriendId}
        />
      )}
      {step === 2 && (
        <ChooseLocation background={background} setBackground={setBackground} />
      )}
      {step === 3 && (
        <ChooseName
          background={background}
          pixelFriendId={pixelFriendId}
          name={name}
          setName={setName}
        />
      )}
      {step === 4 && (
        <ChooseLanguage
          name={name}
          language={language}
          voice={voice}
          setVoice={setVoice}
          setLanguage={setLanguage}
        />
      )}
      {step === 5 && <FinalStep name={name} />}
      <div className="tw-mt-6 tw-w-full tw-flex tw-justify-between">
        <button
          className="tw-text-black tw-border tw-border-solid tw-py-2 tw-px-4 tw-mr-3 tw-rounded"
          disabled={step === 1}
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Back
        </button>
        {step < 5 && (
          <button
            className={`${
              disabled
                ? "tw-bg-gray-400"
                : "tw-bg-blue-500 hover:tw-bg-blue-700"
            } tw-text-white tw-py-2 tw-px-4 tw-rounded`}
            onClick={handleNextClick}
            disabled={disabled}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default ChatbotConfiguration;
