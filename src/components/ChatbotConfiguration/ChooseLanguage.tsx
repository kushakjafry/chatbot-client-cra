import React from "react";
import { languageList, voicesList } from "./constants";

function ChooseLanguage({ name, voice, language, setLanguage, setVoice }: any) {
  return (
    <div className="tw-min-h-full tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-10">
      <div className="tw-mb-4">
        Step 4: Select language and a voice for {name}
      </div>
      <div className="tw-w-1/2 tw-mt-4">
        <label
          htmlFor="language"
          className="tw-block tw-mb-2 tw-text-sm tw-text-gray-500"
        >
          What language would you like to speak to {name} in?
        </label>
        <select
          value={language}
          onChange={(event) => {
            setLanguage(event.target.value);
          }}
          id="language"
          className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-w-full tw-p-2.5"
        >
          {languageList.map(({ language, language_code }) => (
            <option key={language} value={language_code}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <div className="tw-w-1/2 tw-mt-4">
        <label
          htmlFor="voice"
          className="tw-block tw-mb-2 tw-text-sm tw-text-gray-500"
        >
          What accent and voice would you like {name} to talk in?
        </label>
        <select
          value={voice}
          onChange={(e) => setVoice(e.target.value)}
          id="voice"
          className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-w-full tw-p-2.5"
        >
          {voicesList.map((voiceFromList) => (
            <option key={voiceFromList} value={voiceFromList}>
              {voiceFromList}
            </option>
          ))}
        </select>
      </div>
      {voice && language && (
        <div className="tw-mt-4 tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
          <span className="tw-mr-2">Test Voice</span>{" "}
          <span>
            <img
              src="/icons/speaker.svg"
              className="tw-h-4 tw-w-4 tw-inline-flex"
              alt="speaker"
            />{" "}
          </span>
        </div>
      )}
    </div>
  );
}

export default ChooseLanguage;
