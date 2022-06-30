import React from "react";
import { backgroundImages } from "./constants";

function ChooseLocation({ background, setBackground }: any) {
  return (
    <div className="tw-min-h-full tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-10">
      <div className="tw-mb-4">
        Step 2: Select a background where you can chat with your pixelfriend
      </div>
      <div className="tw-grid tw-grid-cols-2 tw-grid-rows-2 tw-gap-4">
        {backgroundImages.map((backgroundImage, id) => (
          <div
            className={`tw-w-[300px] tw-h-[200px] tw-cursor-pointer tw-relative ${
              background === id && "tw-bg-white"
            }`}
            key={id}
            onClick={() => {
              setBackground(id);
            }}
          >
            <img
              src={`/background/${backgroundImage}`}
              className="tw-h-full tw-w-full tw-object-cover"
              alt="background"
            />
            {background === id && (
              <div className="tw-absolute tw-top-2 tw-right-2">
                <img
                  src="/icons/check.svg"
                  className="tw-h-6 tw-w-6"
                  alt="check"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseLocation;
