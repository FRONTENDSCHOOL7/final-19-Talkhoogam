import styled from "styled-components";

export const LayoutStyle = styled.section`
    max-width: 390px;
    max-height: 820px;
    margin: 0 auto;
    position: relative;
    /* overflow-x: auto; */
    overflow: scroll;
    
    &::-webkit-scrollbar{
        display: none;
    }
    /* 임시 border */
    border: 1px solid #dbdbdb;
`

export const LayoutInsideStyle = styled.div`
    padding: 20px 16px 25px 16px;
    height: 100%;
    /* overflow: auto; */
    /* margin-bottom: 60px; */
`