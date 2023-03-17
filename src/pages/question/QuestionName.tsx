import QuestionForm from "../../components/QuestionForm";
import * as style from "./style";

export default function QuestionName() {
  return (
    <style.Container>
      <style.TitleBox margin={71}>
        <style.QuestionSpan>
          당신은 <style.BlueSpan>시간 여행자</style.BlueSpan>입니다. 이름이
          궁금해요.
        </style.QuestionSpan>
      </style.TitleBox>
      <QuestionForm
        placeholder={"이름"}
        link={"/weapon-question"}
        text={"다음(1/2)"}
      />
    </style.Container>
  );
}
