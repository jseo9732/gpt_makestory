import styled from "styled-components";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QuestionContext } from "../lib/context";
import axios from "axios";
import SubmitButton from "./SubmitButton";

interface IProps {
  placeholder: string;
  link: string;
  text: string;
}

export default function QuestionForm({ placeholder, link, text }: IProps) {
  const { questionObj, setQuestionObj } = useContext(QuestionContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isNameQuestion = location.pathname === "/question-name";

  const callOpenAI = async () => {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `다음 내용에 맞게 소설을 써줘.
              1. 주인공 이름은 ‘${questionObj.name}’
              2. 주인공은 시간 여행을 하는 사람이야.
              3. 주인공은 1592년 임진왜란이 일어난 시기로 시간 여행을 했어.
              4. 그곳에서 일본군을 만나.
              5. 주인공은 미래에서 가져온 ${questionObj.weapon}를 이용하여 일본군을 무찔렀어.
              6. 그렇게 주인공은 영웅이 되었고, 교과서에 등재되어 지금까지도 많은 학생들이 그를 알게되었어.`,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    setQuestionObj({
      ...questionObj,
      answer: response.data.choices[0].message.content,
    });
  };

  const onQuestionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(link);
    if (!isNameQuestion) {
      callOpenAI();
    }
  };

  const handleChange = (e: { target: { value: string } }) => {
    if (isNameQuestion) {
      setQuestionObj({ ...questionObj, name: e.target.value });
    } else {
      setQuestionObj({ ...questionObj, weapon: e.target.value });
    }
  };

  return (
    <FormContainer onSubmit={onQuestionSubmit}>
      <QuestionInput
        placeholder={placeholder}
        value={isNameQuestion ? questionObj.name : questionObj.weapon}
        onChange={handleChange}
      />
      <SubmitButton text={text} />
    </FormContainer>
  );
}

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionInput = styled.input`
  width: 100%;
  height: 57px;
  border: 0;
  border-bottom: 2px solid #c6c8cc;
  margin-bottom: 120px;
  &:focus {
    outline: none;
    border-bottom: 2px solid #4444eb;
  }

  /* font-family: "SHSN-B"; */
  text-align: center;
  font-size: 25px;
  line-height: 37px;
  letter-spacing: 1.25px;
  color: #000000;
  &::placeholder {
    color: #c6c8cc;
  }
`;
