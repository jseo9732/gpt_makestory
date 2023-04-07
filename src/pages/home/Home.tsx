import * as style from "./style";
// import { useEffect, useState } from "react";
// import { numberComma } from "../../lib/numberFomat";
import SubmitButton from "../../components/SubmitButton";
// import { collection, getCountFromServer } from "firebase/firestore";
// import db from "../../lib/firebase-config";

export default function Home() {
  // const [storyCount, setStoryCount] = useState<number>(0);
  // useEffect(() => {
  //   const getStory = async () => {
  //     const snapshot = await getCountFromServer(collection(db, "story"));
  //     setStoryCount(snapshot.data().count + 13000);
  //   };

  //   getStory();
  // }, []);

  return (
    <style.HomeContainer>
      <style.TitleBox>
        <style.HomeSpan>
          내가 조선으로 <style.BlueSpan>시간여행</style.BlueSpan>을 한다면
        </style.HomeSpan>
        <style.HomeSpan>
          <style.RedSpan> 임진왜란</style.RedSpan>을 어떻게 막았을까?
        </style.HomeSpan>
      </style.TitleBox>
      <style.HomeImg src={"/images/joseon.png"} />
      <style.LinkBox to={"/question-name"}>
        <SubmitButton text={"이야기 만들러가기"} />
      </style.LinkBox>
      {/* <style.SubSpan>
        지금까지 {numberComma(storyCount)}명이 이야기를 만들었어요.
      </style.SubSpan> */}
    </style.HomeContainer>
  );
}
