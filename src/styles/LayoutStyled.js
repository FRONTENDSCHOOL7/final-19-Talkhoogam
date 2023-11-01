import styled from "styled-components";

export const LayoutStyle = styled.section`
  max-width: 390px;
  margin: 0 auto;
  height: 100vh;
  min-height: 800px;
  /* 내부 스크롤 안보이게 처리 */
  /* overflow: scroll;
    &::-webkit-scrollbar{
        display: none;
    } */

  /* 임시 border */
  border: 1px solid #dbdbdb;
`;

export const LayoutInsideStyle = styled.div`
  padding: 20px 16px 25px 16px;
  margin-bottom: 50px;
`;
