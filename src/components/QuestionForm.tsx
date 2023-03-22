import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import { collection, addDoc } from "firebase/firestore";
import db from "../lib/firebase-config";

interface IProps {
  placeholder: string;
  text: string;
  setLoading?: any;
}

export default function QuestionForm({
  placeholder,
  text,
  setLoading,
}: IProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isNameQuestion = location.pathname === "/question-name";

  const [name, setName] = useState<string>("");
  const [weapon, setWeapon] = useState<string>("");

  useEffect(() => {
    if (!isNameQuestion) {
      if (location.state !== null) {
        setName(location.state.name);
      } else {
        alert("이름이 없어요. 이야기를 다시 만들어보세요!");
        navigate("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const callOpenAI = async () => {
    await axios
      .post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `다음 내용에 맞게 소설을 써줘.
              1. 주인공 이름은 ‘${name}’
              2. 주인공은 시간 여행을 하는 사람이야.
              3. 주인공은 1592년 임진왜란이 일어난 시기로 시간 여행을 했어.
              4. 그곳에서 일본군을 만나.
              5. 주인공은 미래에서 가져온 ${weapon}를 이용하여 일본군을 무찔렀어.
              6. 그렇게 주인공은 영웅이 되었고, 교과서에 등재되어 지금까지도 많은 학생들이 그를 알게되었어.`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(async (res) => {
        try {
          const docRef = await addDoc(collection(db, "story"), {
            name,
            weapon,
            story: res.data.choices[0].message.content,
          });
          navigate(`/result/${docRef.id}`, { replace: true });
          setLoading(false);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  };

  const handleChange = (e: { target: { value: string } }) => {
    if (isNameQuestion) {
      setName(e.target.value);
    } else {
      setWeapon(e.target.value);
    }
  };

  const onQuestionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isNameQuestion) {
      if (name !== "") {
        navigate("/question-weapon", {
          state: {
            name,
          },
          replace: true,
        });
      } else {
        alert("이름을 입력해주세요.");
      }
    } else {
      if (name !== "" && weapon !== "") {
        setLoading(true);
        callOpenAI();
      } else {
        alert("원하는 무기를 입력해주세요.");
      }
    }
  };

  return (
    <FormContainer onSubmit={onQuestionSubmit}>
      <QuestionInput
        autoFocus
        placeholder={placeholder}
        value={isNameQuestion ? name : weapon}
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
