import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
