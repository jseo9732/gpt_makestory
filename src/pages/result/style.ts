import { Link } from "react-router-dom";
import styled from "styled-components";

export const ResultContainer = styled.main`
  width: 100%;
  height: 100vh;
  background: #f5f5f7 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 28px;
`;

export const ContentBox = styled.article`
  width: 100%;
  height: 500px;
  margin-bottom: 30px;
  padding: 30px 19px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  overflow: auto;
  white-space: pre-line;

  /* font-family: "SHSN-B"; */
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.7px;
  color: #000000;
  @media (max-width: 430px) {
    height: calc(100vh - 250px);
  }
`;

export const LinkBox = styled(Link)`
  width: 100%;
  margin-bottom: 20px;
`;

export const BtnBox = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const emailTitle = styled.span`
  /* font-family: "SHSN-B"; */
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.7px;
  color: #000000;
`;

export const emailSpan = styled.a`
  /* font-family: "SHSN-B"; */
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.7px;
  color: #000000;
  &:hover {
    text-decoration: underline;
  }
`;
