import styled from "styled-components";

interface LayoutStyleProps {
  hideOverview?: boolean;
  inView?: boolean;
}
export const MainLayout = styled.div<LayoutStyleProps>`
  overflow: hidden;
  background-color: #d6dbdc;
  .content {
  overflow: scroll;
  scrollbar-width: none;
  height: 100vh;
    max-width: ${(props) =>
      props.hideOverview ? "100%" : "70%"};
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  margin: 0 auto;
  }
  .content::-webkit-scrollbar{
        display: none;
  }
`;
export const PageOverview = styled.div<LayoutStyleProps>`
  position: fixed;
  top: 120px;
  right: 0;
  width: ${(props) => (props.hideOverview ? " 0" : " 15%")};
  opacity: ${(props) => (props.hideOverview ? "0" : " 1")};
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;

  .item {
    font-size: 12px;
    margin-left: 10%;
  }
`;
