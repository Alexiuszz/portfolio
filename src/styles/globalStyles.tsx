import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.primaryFontColor};
  }
  a {
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.hoverFontColor},
    ${({ theme }) => theme.hoverFontColor} 50%,
    ${({ theme }) => theme.primaryFontColor} 50%
  );
  font-weight: 500;
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  position: relative;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  cursor: none;
}

a:before {
  content: "";
  background: ${({ theme }) => theme.hoverFontColor};
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}

a:hover {
  background-position: 0;
}

a:hover::before {
  width: 100%;
}
  `;
