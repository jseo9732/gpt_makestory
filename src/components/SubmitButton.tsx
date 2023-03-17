import styled from "styled-components";

interface IProps {
  text: string;
  marginB?: number;
}

export default function SubmitButton({ text, marginB }: IProps) {
  return <Button marginB={marginB}>{text}</Button>;
}

export const Button = styled.button<{ marginB?: number }>`
  width: 374px;
  height: 60px;
  background: #4444eb 0% 0% no-repeat padding-box;
  border: 0;
  border-radius: 20px;
  opacity: 1;
  cursor: pointer;
  margin-bottom: ${({ marginB }) => `${marginB}px`};

  /* font-family: "SHSN-B"; */
  text-align: center;
  font-size: 25px;
  line-height: 31px;
  letter-spacing: 1.25px;
  color: #ffffff;
`;
