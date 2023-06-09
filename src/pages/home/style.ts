import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.main`
  width: 100%;
  margin: auto 0;
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.h1`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeSpan = styled.span`
  /* font-family: "SHSN-B"; */
  text-align: center;
  font-size: 25px;
  line-height: 37px;
  letter-spacing: 1.25px;
  color: #000000;
`;

export const BlueSpan = styled.strong`
  color: #3f7ae2;
`;

export const RedSpan = styled.strong`
  color: #ed706b;
`;

export const HomeImg = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const LinkBox = styled(Link)`
  width: 100%;
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
