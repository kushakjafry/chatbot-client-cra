import React from "react";

function Tab({
  step,
  text,
  active = false,
}: {
  step: number;
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className="md:tw-w-[200px] tw-py-3 tw-px-7 tw-bg-white tw-mx-3 md:tw-mx-7 tw-rounded-lg"
      style={active ? { boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" } : {}}
    >
      <span className="tw-px-2 tw-rounded-full tw-bg-gray-300 tw-mr-3">
        {step}
      </span>
      <span className="">{text}</span>
    </div>
  );
}

export default Tab;
