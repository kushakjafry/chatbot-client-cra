import React from "react";
import { useNavigate } from "react-router-dom";

function FinalStep({ name }: any) {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("chatbot", { replace: true });
  };
  return (
    <div className="tw-min-h-1/2 tw-max-w-[350px] tw-flex tw-flex-col">
      <h1 className="tw-font-bold tw-text-lg tw-mb-6">Lets get you Started</h1>
      <p>You are about to meet your pixelfriend, {name}.</p>
      <br />
      <p>
        Audio and Video data will be kept secure and only used to analyse your
        emotions and body language throughout the conversation.
      </p>
      <br />

      <p>
        {" "}
        By clicking "Start" you are agreeing to our{" "}
        <a href="/privacy-policy" className="tw-underline tw-text-blue-500">
          Privacy Policy
        </a>
        .
      </p>
      <div className="tw-mt-4">
        <button
          className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-py-2 tw-px-4 tw-rounded"
          onClick={handleStart}
        >
          START
        </button>
      </div>
    </div>
  );
}

export default FinalStep;
