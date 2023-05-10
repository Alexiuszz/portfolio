import styled from "styled-components";

export const LandingContainer = styled.main`
  position: relative;
  min-height: 100vh; 
`;


export const Description = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  font-family: var(--font-mono);
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  p {
    position: relative;
    margin: 0;
    padding: 1rem;
    background-color: rgba(var(--callout-rgb), 0.5);
    border: 1px solid rgba(var(--callout-border-rgb), 0.3);
    border-radius: var(--border-radius);
  }
  code {
    font-weight: 700;
    font-family: var(--font-mono);
  }
`;

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 0;

  /* &::before {
    background: var(--secondary-glow);
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
  }
  &::after {
    background: var(--primary-glow);
    width: 240px;
    height: 180px;
    z-index: -1;
  }
  &::before,
  &::after {
    content: "";
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
  } */
`;
