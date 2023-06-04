import { Noto_Serif_TC } from "next/font/google";
import styled from "styled-components";

const noto = Noto_Serif_TC({
  subsets: ["latin"],
  weight: "300",
});

export const Header = styled.h1.attrs((props) => ({
  className: noto.className,
}))`
  text-align: center;
  font-weight: ${(props) => props.weight || "300"};
  font-size: ${(props) => props.size || "55px"};
`;

export const Text = styled.p`
  text-align: ${(props) => props.left || "center"};
  font-weight: ${(props) => props.weight || "400"};
  font-size: ${(props) => props.size || "16px"};
`;
