import styled, { keyframes } from "styled-components";

const fadeBackground = keyframes`
    0% {
    background-color: #fef6eb; /* 처음에는 완전 불투명 */
    }
    100% {
        background-color: #fef6eb; /* 나중에 완전 투명 */
    }
` 
export const LodingLayOut = styled.div`
    position: absolute;
    position: fixed;
    top: 0;
    left: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: "#fef6eb";
    /* opacity: 0.6; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 500;
    animation: ${fadeBackground} 1s linear; /* 2초 동안 애니메이션 실행 */
`



export const LogoImgStyle = styled.img`
    width: 170px;

    @keyframes raccoonMoving {
        0% {
            transform: scale(0.9);
            opacity: 1; /* 완전 불투명 */
        }
/* 
        25% {
            transform:   scale(0.9);
        } */

        50% {
            transform:   scale(1);
            opacity: 0.9;
        }

        80% {
            transform:   scale(1.1);
            opacity: 0.8;
        }

        to {
            transform:  scale(1);
            opacity: 0.5; /* 완전 투명, 사라짐 */
        }
    }


    animation: raccoonMoving 1.3s ease-in-out ; /* 4초 동안 좌우로 이동, 무한 반복 */
`
