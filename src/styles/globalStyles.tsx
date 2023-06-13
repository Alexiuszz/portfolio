import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.primaryFontColor};
  }
  `;
