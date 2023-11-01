import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font.css";

const GlobalStyle = createGlobalStyle`
${reset}


:root {
    /* 색 */
    --color-mainColor: #56b778;
    --color-dark-mainColor: #4b9f68;
    --color-navy: #132644;
    --color-lime: #E1FF67;
    --color-blue: #1643DB;
    --color-steelblue: #5472A1;
    --color-maingrey: #C4C4C4;
    --color-darkgrey: #767676;
    --color-lightgrey: #DBDBDB;
    --color-red: #EB5757;
    --color-bg: #F2F2F2;
}

body {
    font-family: 'Pretendard', sans-serif;
    overflow: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
}

input {
    border : none;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    border: 0;
    background: none;
}

button:enabled {
    cursor: pointer;
}

.a11y-hidden {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }



`;

export default GlobalStyle;
