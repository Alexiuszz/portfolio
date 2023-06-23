import { Noto_Serif_TC } from "next/font/google";
import styled from "styled-components";

const noto = Noto_Serif_TC({
  subsets: ["latin"],
  weight: "300",
});

interface TypoProps {
  weight?: string;
  left?: string;
  size?: string;
  color?: string;
}
export const Header = styled.h2.attrs((props) => ({
  className: noto.className,
}))<TypoProps>`
  text-align: ${(props) => props.left || "center"};
  font-weight: ${(props) => props.weight || "300"};
  font-size: ${(props) => props.size || "55px"};
  color: ${(props) => props.color || "inherit"};
`;

export const Text = styled.p.attrs((props) => ({
  className: noto.className,
}))<TypoProps>`
  text-align: ${(props) => props.left || "left"};
  font-weight: ${(props) => props.weight || "400"};
  font-size: ${(props) => props.size || "16px"};
  color: ${(props) => props.color || "inherit"};
`;

export const SectionHeader = styled.h2`
  color: ${({ theme }) => theme.primaryFontColor};
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  &::after {
    content: "";
    display: inline-block;
    width: 30%;
    height: 1px;
    background-color: ${({ theme }) => theme.primaryFontColor};
  }
`;
