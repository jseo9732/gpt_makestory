import styled from "styled-components";

interface IProps {
  text: string;
  theme?: string;
  icon?: string;
}

export default function SubmitButton({ text, theme, icon }: IProps) {
  return (
    <Button theme={theme}>
      {text}
      {icon && <LinkIcon src={icon} />}
    </Button>
  );
}

export const Button = styled.button<{ theme?: string }>`
  width: 100%;
  min-height: 60px;
  padding: 12px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) =>
    `${theme === "white" ? "#ffffff" : "#4444eb"} 0% 0% no-repeat padding-box`};
  border: ${({ theme }) => (theme === "white" ? "1px solid #4444eb" : "0")};
  border-radius: 20px;
  opacity: 1;
  cursor: pointer;

  /* font-family: "SHSN-B"; */
  text-align: center;
  font-size: 25px;
  line-height: 31px;
  letter-spacing: 1.25px;
  color: ${({ theme }) => (theme === "white" ? "#4444eb" : "#ffffff")};
`;

export const LinkIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-left: 15px;
`;
