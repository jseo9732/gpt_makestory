import * as style from "./style";
import { useContext, useEffect } from "react";
import { QuestionContext } from "../../lib/context";
import SubmitButton from "../../components/SubmitButton";

export default function Result() {
  const { questionObj, setQuestionObj } = useContext(QuestionContext);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin);
      alert("링크를 클립보드에 복사했습니다.");
    } catch (e) {
      alert("링크 복사를 실패하였습니다. 다시 시도해주세요");
    }
  };

  useEffect(() => {
    return () => {
      setQuestionObj({
        name: "",
        weapon: "",
        answer: "chat GPT가 응답 중입니다. 잠시만 기다려주세요",
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <style.ResultContainer>
      <style.ContentBox>
        {`《시간 여행자 ${questionObj.name}》`}
        {questionObj.answer}
      </style.ContentBox>
      <style.LinkBox to={"/"}>
        <SubmitButton text={"이야기 다시 만들러가기"} theme={"white"} />
      </style.LinkBox>
      <style.BtnBox onClick={copyLink}>
        <SubmitButton text={"링크 공유하기"} icon={"/images/link icon.png"} />
      </style.BtnBox>
    </style.ResultContainer>
  );
}
