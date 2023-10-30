import styled from "styled-components";

export const WelcomePage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

export const LogoText = styled.p`
  color: var(--color-mainColor);
  font-size: 16px;

  strong {
    font-weight: bold;
  }
`;
