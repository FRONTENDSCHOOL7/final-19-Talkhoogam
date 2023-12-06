import styled from "styled-components";

export const LayoutStyle = styled.section`
  min-width: 390px;
  /* height: 100vh; */
  margin: 0 auto;
  min-height: 800px;
  /* 내부 스크롤 안보이게 처리 */
  /* overflow: scroll;
    &::-webkit-scrollbar{
        display: none;
    } */

  /* 임시 border */
  /* border: 1px solid #dbdbdb; */
`;

export const LayoutInsideStyle = styled.div`
  padding: 20px 16px 25px 16px;
  /* 내부 콘텐츠가 높이가 작을 때  */
  margin-bottom: 50px;
  /* height: 100%; */
`;
