import styled from "styled-components";




export const InputStyledWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 322px;
    margin-bottom: 16px;

    
`

export const LabelStyle = styled.label`
    font-size: 12px;
    color: var(--color-darkgrey);
`

export const InputStyle = styled.input`
    border-bottom: 1px solid var(--color-lightgrey);
    padding-top: 10px;
    padding-bottom: 9px;
    &:focus{
        outline: none;
        border-bottom: 1px solid var(--color-lightgrey);
    }
    &::placeholder{
        font-size: 14px;
        color: var(--color-lightgrey);
    }
`