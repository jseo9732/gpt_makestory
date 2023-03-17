import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    width: 430px;
    margin: 0 auto;
    height: 100%;
  }
  #root{
    height: 100%;
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 430px) {
    body {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
