import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {      
    color: ${({ theme }) => theme.secondaryFontColor};
    line-height: 1.3;
  }
  ul{
    list-style: none;
  }
  `;
