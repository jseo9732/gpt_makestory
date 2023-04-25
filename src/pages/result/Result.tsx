import * as style from "./style";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SubmitButton from "../../components/SubmitButton";
import { doc, getDoc } from "firebase/firestore";
import db from "../../lib/firebase-config";
import GoogleAd from "../../components/GoogleAd";

export default function Result() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [story, setStory] = useState<string>("");

  useEffect(() => {
    const getStory = async () => {
      const docRef = doc(db, "story", id as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setName(docSnap.data().name);
        setStory(docSnap.data().story);
      } else {
        alert("경로가 잘못되었습니다. 이야기를 다시 만들어보세요!");
        navigate("/");
      }
    };

    getStory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("링크를 클립보드에 복사했습니다. 친구들과 공유해보세요.");
    } catch (e) {
      alert("링크 복사를 실패하였습니다. 다시 시도해주세요");
    }
  };

  return (
    <style.ResultContainer>
      <style.ContentBox>
        {`《시간 여행자 ${name}》`}
        {story}
      </style.ContentBox>
      <GoogleAd />
      <style.LinkBox to={"/"}>
        <SubmitButton text={"이야기 다시 만들러가기"} theme={"white"} />
      </style.LinkBox>
      <style.BtnBox onClick={copyLink}>
        <SubmitButton text={"이야기 공유하기"} icon={"/images/link_icon.png"} />
      </style.BtnBox>
      <style.emailTitle>
        문의:&nbsp;
        <style.emailSpan href="mailto:qudvkfzoqtyd1@gmail.com">
          qudvkfzoqtyd1@gmail.com
        </style.emailSpan>
      </style.emailTitle>
    </style.ResultContainer>
  );
}
