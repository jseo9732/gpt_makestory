import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IQuestion, QuestionContext } from "../lib/context";
import Home from "../pages/home/Home";
import QuestionName from "../pages/question/QuestionName";
import QuestionWeapon from "../pages/question/QuestionWeapon";
import Result from "../pages/result/Result";

function App() {
  const [questionObj, setQuestionObj] = useState<IQuestion>({
    name: "",
    weapon: "",
    answer: "ChatGPT가 응답 중입니다. 잠시만 기다려주세요",
  });
  return (
    <QuestionContext.Provider
      value={{
        questionObj,
        setQuestionObj,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question-name" element={<QuestionName />} />
          <Route path="/weapon-question" element={<QuestionWeapon />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </QuestionContext.Provider>
  );
}

export default App;
