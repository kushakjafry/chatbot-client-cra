import React from "react";
import { useNavigate } from "react-router-dom";

function ChatHeader() {
  const navigate = useNavigate();
  const handleEndClick = () => {
    navigate("/chatbot");
  };
  return (
    <div className="tw-flex tw-flex-row tw-justify-end tw-text-white">
      <div className="tw-mr-4">Record Conversation</div> |
      <div className="tw-ml-4 tw-cursor-pointer" onClick={handleEndClick}>
        End Conversation
      </div>
    </div>
  );
}

export default ChatHeader;
