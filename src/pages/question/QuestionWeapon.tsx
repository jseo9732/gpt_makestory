import QuestionForm from "../../components/QuestionForm";
import * as style from "./style";

export default function QuestionWeapon() {
  return (
    <style.Container>
      <style.TitleBox>
        <style.QuestionSpan>미래에서 무기를 가져갈거에요.</style.QuestionSpan>
        <style.QuestionSpan>
          <style.RedSpan>무기 이름</style.RedSpan>을 알려주세요.
        </style.QuestionSpan>
      </style.TitleBox>
      <QuestionForm
        placeholder={"무기 이름(ex. 아이언맨 슈트)"}
        link={"/result"}
        text={"자! 이야기를 공개합니다!"}
      />
    </style.Container>
  );
}
