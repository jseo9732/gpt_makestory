import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";

interface IProps {
  placeholder: string;
  link: string;
  text: string;
}

export default function QuestionForm({ placeholder, link, text }: IProps) {
  const navigate = useNavigate();
  const onQuestionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    navigate(link);
  };
  return (
    <FormContainer onSubmit={onQuestionSubmit}>
      <QuestionInput placeholder={placeholder} />
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
