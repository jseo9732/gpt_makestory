import SubmitButton from "../../components/SubmitButton";
import * as style from "./style";

export default function Result() {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin);
      alert("링크를 클립보드에 복사했습니다.");
    } catch (e) {
      alert("링크 복사를 실패하였습니다. 다시 시도해주세요");
    }
  };
  return (
    <style.ResultContainer>
      <style.ContentBox>
        《시간 여행자 유병현》 <br />
        <br />
        유병현은 미래에서 온 특별한 능력을 가진 시간 여행자였다. 언제나 미래를
        상상하며 살아가던 그는 어느 날, 과거로의 시간 여행을 결심하고 1592년
        임진왜란이 일어난 시기로 시간을 돌렸다. <br />
        <br />
        그곳에서 유병현은 일본군을 만났다. 그들은 싸울 준비를 갖추고 있었고,
        유병현은 이들을 막기 위해 미래에서 가져온 아이언맨 슈트를 이용했다.
        슈트는 강력한 무기와 방어력을 가지고 있었기 때문에 유병현은 일본군을
        쉽게 무찔렀다. <br />
        <br />
        이를 알게 된 조선의 군사들은 유병현을 영웅으로 추대하고, 그를 교과서에
        등재했다. 그래서 이제까지도 많은 학생들이 유병현의 업적을 알고 있다.
        하지만 유병현은 이를 영광으로 받아들이지 않았다. 그는 더 나은 미래를
        위해 계속해서 시간 여행을 하며 세상을 변화시키는 일을 계속했다. 그는
        언제나 역사를 바꿀 수 있는 가능성을 믿고, 끊임없이 노력하며 사는 삶을
        살았다. <br />
        <br />
        유병현은 이후에도 많은 모험과 위험한 상황을 겪으며, 자신의 힘과 미래의
        기술을 이용해 세상을 바꾸어 나갔다. 그는 시간 여행자로서의 자신을 믿고,
        끊임없이 노력하는 사람으로 남아 있다.
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
