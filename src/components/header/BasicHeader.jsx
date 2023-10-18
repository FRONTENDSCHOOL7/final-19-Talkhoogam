import React from 'react'
import {styled} from 'styled-components';

export default function BasicHeader() {

    return (
        <Header>
            <p className="feedname">감귤마켓 피드</p>
        </Header>

    
    )
}

const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dbdbdb;

    & img{
        margin-right: 16px;
        cursor: pointer;
    }
`
