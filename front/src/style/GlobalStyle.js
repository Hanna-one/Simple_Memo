import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  body{
    height: 100vh;
  }
  button, input, textarea, select, option {
    padding: 10px;
    font-family: inherit;
    font-size: inherit;
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
  }
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`

export default GlobalStyle;