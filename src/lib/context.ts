import { createContext } from "react";

export interface IQuestion {
  name: string;
  weapon: string;
  answer: string;
}

interface IQuestionContext {
  questionObj: IQuestion;
  setQuestionObj: React.Dispatch<React.SetStateAction<IQuestion>>;
}

const QuestionContextState: IQuestionContext = {
  questionObj: { name: "", weapon: "", answer: "" },
  setQuestionObj: () => {},
};

export const QuestionContext = createContext(QuestionContextState);
