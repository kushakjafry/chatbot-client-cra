import React from "react";

interface IntroProps {
  setShowIntro: (showIntro: boolean) => void;
  loadedModel: boolean;
}

function Intro({ setShowIntro, loadedModel }: IntroProps) {
  return (
    <>
      <div className="tw-mb-7 tw-w-full">
        Lifestory lets you record the moments of your life you would want to
        save as a blog. You can view all your recordings in the Lifestory
        session and see your all the events of your life that you have recorded
        and saved.You can choose to share this on the community to inspire
        millions of others too.
      </div>
      {loadedModel && (
        <div className="tw-w-full tw-flex tw-justify-between">
          <button
            className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-py-2 tw-px-4 tw-rounded"
            onClick={() => {
              setShowIntro(false);
            }}
          >
            Start
          </button>
          <button className="">Back</button>
        </div>
      )}
    </>
  );
}

export default Intro;
