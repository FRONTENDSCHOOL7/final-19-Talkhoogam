import styled, { keyframes } from "styled-components";

const fadeBackground = keyframes`
    0% {
    background-color: white; /* 처음에는 완전 불투명 */
    }
    100% {
        background-color: white; /* 나중에 완전 투명 */
    }
`;
export const LodingLayOut = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  /* opacity: 0.6; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  animation: ${fadeBackground} 1s linear; /* 2초 동안 애니메이션 실행 */
`;

export const LogoImgStyle = styled.img`
  width: 140px;

  @keyframes raccoonMoving {
    0% {
      transform: scale(0.5);
      opacity: 0.3;
    }

    100% {
      transform: scale(0.9);
      opacity: 1;
    }
  }

  animation: raccoonMoving 1.3s ease-in-out;
`;
