import { Route, Routes } from "react-router-dom";
import ChatbotPanel from "./components/Chatbot/ChatbotPanel";
import ChatbotConfiguration from "./components/ChatbotConfiguration/ChatbotConfiguration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatbotConfiguration />} />
      <Route path="chatbot" element={<ChatbotPanel />} />
    </Routes>
  );
}

export default App;
