import { Link } from "react-router-dom";
import styled from "styled-components";

export const ResultContainer = styled.main`
  background: #f5f5f7 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

  width: 374px;
  height: 546px;
  margin: 55px 0 30px 0;
export const ContentBox = styled.article`
  padding: 30px 19px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;

  /* font-family: "SHSN-B"; */
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.7px;
  color: #000000;
`;

export const LinkBox = styled(Link)`
  margin-bottom: 20px;
`;
