import * as style from "./style";
import SubmitButton from "../../components/SubmitButton";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <style.HomeContainer>
      <style.TitleBox>
        <style.HomeSpan>
          내가 조선으로 <style.BlueSpan>시간여행</style.BlueSpan>을 한다면
          <style.RedSpan>임진왜란</style.RedSpan>을 어떻게 막았을까?
        </style.HomeSpan>
      </style.TitleBox>
      <style.HomeImg src={"/images/main Image.png"} />
      <Link to={"/question-name"}>
        <SubmitButton text={"이야기 만들러가기"} marginB={20} />
      </Link>
      <style.SubSpan>지금까지 13,203명이 이야기를 만들었어요.</style.SubSpan>
    </style.HomeContainer>
  );
}
