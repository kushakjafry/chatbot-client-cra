import React, { useEffect, useState } from "react";
import MaterialInput from "../../UI/MaterialInput";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

// declare global {
//   interface Window {
//     SpeechRecognition: any;
//     webkitSpeechRecognition: any;
//   }
// }

function Chat({ questionText, getQuestions, setLoadingQuestions }: any) {
  const [answer, setAnswer] = useState("");
  const [currentSpeech, setCurrentSpeech] = useState("");
  let { transcript, listening, resetTranscript } = useSpeechRecognition({
    transcribing: true,
  });

  useEffect(() => {
    if (listening && transcript) {
      setCurrentSpeech(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    resetTranscript();

    if (!listening && currentSpeech.length > 0) {
      setAnswer(answer ? answer + " " + currentSpeech : currentSpeech);
      setCurrentSpeech("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listening]);

  const handleAnswerChange = (event: any) => {
    setAnswer(event.target.value);
  };

  const handleEnterPress = (event: any) => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setLoadingQuestions(true);
    getQuestions();
  };

  const handleMicClick = () => {
    if (listening) SpeechRecognition.stopListening();
    else SpeechRecognition.startListening({ continuous: true });
  };
  return (
    <>
      <div className="tw-w-4/5 tw-mb-7">{questionText}</div>
      <div className="tw-w-4/5 tw-mb-7">
        <MaterialInput
          value={
            listening && answer
              ? answer + " " + currentSpeech
              : listening
              ? currentSpeech
              : answer
          }
          onChange={handleAnswerChange}
          name="message"
          placeholder="Type Here. And Press enter to submit"
          onKeyDown={handleEnterPress}
          disabled={listening}
        >
          <div
            className="tw-absolute tw-top-0 tw-right-0 tw-text-white tw-cursor-pointer"
            onClick={handleMicClick}
          >
            <img
              src={listening ? "/icons/mic-circle.svg" : "/icons/mic-1.svg"}
              className="tw-h-6 tw-w-6 tw-fill-white"
              alt="mic"
            />
          </div>
        </MaterialInput>
      </div>
    </>
  );
}

export default Chat;
