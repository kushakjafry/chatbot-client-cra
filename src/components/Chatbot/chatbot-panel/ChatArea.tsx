import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import ChatHeader from "./ChatHeader";
import Intro from "./Intro";

function ChatArea({
  showIntro,
  questionText,
  setShowIntro,
  getQuestions,
  setQuestionText,
  loadedModel,
}: any) {
  const [loadingQuestions, setLoadingQuestions] = useState(!questionText);
  useEffect(() => {
    setLoadingQuestions(false);
  }, [questionText]);
  return (
    <>
      <div className=" tw-h-16 tw-pr-20 tw-pt-10 ">
        <ChatHeader />
      </div>
      <div className=" tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-white tw-p-20 tw-text-xl">
        {showIntro && (
          <Intro setShowIntro={setShowIntro} loadedModel={loadedModel} />
        )}
        {!showIntro && loadingQuestions && <div>Loading</div>}
        {!showIntro && !loadingQuestions && (
          <Chat
            questionText={questionText}
            getQuestions={getQuestions}
            setQuestionText={setQuestionText}
            setLoadingQuestions={setLoadingQuestions}
          />
        )}
      </div>
    </>
  );
}

export default ChatArea;
