import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
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
