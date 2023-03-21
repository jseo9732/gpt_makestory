import * as style from "./style";
import { useState } from "react";
import QuestionForm from "../../components/QuestionForm";
import CircularProgress from "@mui/material/CircularProgress";

export default function QuestionWeapon() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <style.Container>
      {loading ? (
        <>
          <CircularProgress />
          <style.LoadingSpan>
            ChatGPT가 이야기를 만드는 중입니다.
            <br />
            잠시만 기다려주세요!
          </style.LoadingSpan>
        </>
      ) : (
        <>
          <style.TitleBox>
            <style.QuestionSpan>
              미래에서 무기를 가져갈거에요.
            </style.QuestionSpan>
            <style.QuestionSpan>
              <style.RedSpan>무기 이름</style.RedSpan>을 알려주세요.
            </style.QuestionSpan>
          </style.TitleBox>
          <QuestionForm
            placeholder={"무기 이름(ex. 아이언맨 슈트)"}
            text={"자! 이야기를 공개합니다!"}
            setLoading={setLoading}
          />
        </>
      )}
    </style.Container>
  );
}
