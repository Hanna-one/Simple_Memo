import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    border-radius: 5px;
  }
  html, body{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin: 0;
  }
  button, input, textarea, select, option {
    font-family: inherit;
    font-size: inherit;
  }
  a{
    text-decoration: none;
  }
`

export default GlobalStyle;