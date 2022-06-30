import React from "react";
import MaterialInput from "../UI/MaterialInput";
import { backgroundImages, pixelFriends } from "./constants";

function ChooseName({ background, pixelFriendId, name, setName }: any) {
  return (
    <div className="tw-min-h-full tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-10">
      <div className="tw-mb-4">Step 3: Choose a name for your PixelFriend</div>
      <div
        className="tw-w-[300px] tw-h-[200px] tw-relative"
        style={{
          background: `url(/background/${backgroundImages[background]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={`/model/${pixelFriends[pixelFriendId]}`}
          className="tw-h-full tw-w-full tw-object-cover"
          alt="pixelfriend"
        />
      </div>
      <div className="tw-mt-5 tw-w-[300px]">
        <MaterialInput
          name="name"
          value={name}
          placeholder="Type the name here"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default ChooseName;
