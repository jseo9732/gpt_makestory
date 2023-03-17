import styled from "styled-components";

  margin-top: 120px;
export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

  margin: ${({ margin }) => `0 ${margin}px 179px ${margin}px`};
  text-align: center;
export const TitleBox = styled.h1`
`;

export const QuestionSpan = styled.span`
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

export const QuestionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionInput = styled.input`
  width: 374px;
  height: 57px;
  border: 0;
  border-bottom: 2px solid #c6c8cc;
  margin-bottom: 120px;
`;

export const QuestionButton = styled.button``;
