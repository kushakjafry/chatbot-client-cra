import React from "react";
import { pixelFriends } from "./constants";

function ChoosePixelFriend({ pixelFriendId, setPixelFriendId }: any) {
  return (
    <div className="tw-min-h-full tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-10">
      <div className="tw-mb-4">Step 1: Select a face for your pixelfriend</div>
      <div className="tw-grid tw-grid-cols-3 tw-grid-rows-2 tw-gap-4">
        {pixelFriends.map((image, id) => (
          <div
            className={`tw-w-[300px] tw-h-[200px] tw-cursor-pointer tw-relative ${
              pixelFriendId === id && "tw-bg-white"
            }`}
            key={id}
            onClick={() => {
              console.log(id);
              setPixelFriendId(id);
            }}
          >
            <img
              src={`/model/${image}`}
              className="tw-h-full tw-w-full tw-object-cover"
              alt="model"
            />
            {pixelFriendId === id && (
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

export default ChoosePixelFriend;
