import styled from "styled-components";

export const HomeContainer = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.span`
  margin: 0 35px 30px 35px;
  text-align: center;
`;

export const HomeSpan = styled.span`
  /* font-family: "SHSN-B"; */
  text-align: center;
  font-size: 25px;
  line-height: 37px;
  letter-spacing: 1.25px;
  color: #000000;
`;

export const BlueSpan = styled(HomeSpan)`
  color: #3f7ae2;
`;

export const RedSpan = styled(HomeSpan)`
  color: #ed706b;
`;

export const HomeImg = styled.img`
  width: 374px;
  height: 374px;
  margin-bottom: 20px;
`;

export const HomeButton = styled.button`
  width: 374px;
  height: 60px;
  background: #4444eb 0% 0% no-repeat padding-box;
  border: 0;
  border-radius: 20px;
  opacity: 1;
  margin-bottom: 20px;
  cursor: pointer;

  /* font-family: "SHSN-B"; */
  text-align: center;
  font-size: 25px;
  line-height: 31px;
  letter-spacing: 1.25px;
  color: #ffffff;
`;

export const SubSpan = styled(HomeSpan)`
  /* font-family: "SHSN-B"; */
  text-align: center;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.75px;
`;
