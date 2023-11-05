import styled, { css, keyframes } from "styled-components";

const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
`;

export const ModalLayout = styled.div`
  width: 390px;
  border: 1px solid var(--color-lightgrey);
  position: fixed;
  bottom: 0;
  border-radius: 10px 10px 0 0;
  background-color: white;
  z-index: 200;
  /* @keyframes fadeInUp {
        0%{
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        to{
            opacity: 1;
            transform: translateZ(0);
        }
    } */
  animation: ${fadeInUp} 0.6s;

  ${(props) =>
    props.isOpen &&
    css`
      animation: ${fadeInUp} 1s;
    `};
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & div {
    width: 50px;
    height: 4px;
    border-radius: 5px;
    background: var(--color-lightgrey);
  }

  & img {
    position: absolute;
    right: 10px;
    width: 18px;
    cursor: pointer;
  }
`;

export const ModalInsideLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ModalButton = styled.button`
  border-top: 1px solid var(--color-lightgrey);
  width: 100%;
  height: 46px;
  font: inherit;
  font-weight: 500;

  &:hover {
    transition: border-color 0.5s, background-color 0.5s, color 0.5s;
    background-color: var(--color-trans-grey);
  }
`;
