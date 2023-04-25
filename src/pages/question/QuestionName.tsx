import * as style from "./style";
import QuestionForm from "../../components/QuestionForm";
import GoogleAd from "../../components/GoogleAd";

export default function QuestionName() {
  return (
    <style.Container>
      <style.TitleBox>
        <style.QuestionSpan>
          당신은 <style.BlueSpan>시간 여행자</style.BlueSpan>입니다.
        </style.QuestionSpan>
        <style.QuestionSpan>이름이 궁금해요.</style.QuestionSpan>
      </style.TitleBox>
      <QuestionForm placeholder={"이름"} text={"다음(1/2)"} />
      <GoogleAd />
    </style.Container>
  );
}
