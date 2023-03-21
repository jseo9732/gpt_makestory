import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import QuestionName from "../pages/question/QuestionName";
import QuestionWeapon from "../pages/question/QuestionWeapon";
import Result from "../pages/result/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question-name" element={<QuestionName />} />
        <Route path="/weapon-question" element={<QuestionWeapon />} />
        <Route path="/result/:id" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
