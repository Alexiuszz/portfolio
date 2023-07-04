import { createGlobalStyle } from "styled-components";
import { mobile } from "./style_variables";
export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  cursor: none;
  
  @media screen and (max-width: ${mobile}) {
    cursor:initial;
  }
  &::-webkit-scrollbar{
    display: none;
  }
}
  body {   
    color: ${({ theme }) => theme.secondaryFontColor};
    line-height: 1.3;
  }&::-webkit-scrollbar {
    width: 12px;
}
&::-webkit-scrollbar-thumb {
    background-color:${({ theme }) => theme.secondaryFontColor};
    border: 3px solid ${({ theme }) => theme.secondaryColor};;
    border-radius: 10px;   
}&::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.tetiaryColor};;
}
&::selection {
    background-color: ${({ theme }) => theme.secondaryFontColor};;
    color: ${({ theme }) => theme.primaryFontColor};;
}
  ul{
    list-style: none;
  }
  `;
