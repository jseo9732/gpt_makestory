import { Link } from "react-router-dom";
import styled from "styled-components";

export const ResultContainer = styled.main`
  width: 100%;
  background: #f5f5f7 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 28px;
`;

export const ContentBox = styled.article`
  width: 100%;
  height: calc(100vh - 200px);
  margin-bottom: 30px;
  padding: 30px 19px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  overflow: auto;

  /* font-family: "SHSN-B"; */
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.7px;
  color: #000000;
`;

export const LinkBox = styled(Link)`
  width: 100%;
  margin-bottom: 20px;
`;

export const BtnBox = styled.div`
  width: 100%;
`;
