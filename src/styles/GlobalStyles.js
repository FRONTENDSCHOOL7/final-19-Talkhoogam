import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import "./font.css";

const GlobalStyle = createGlobalStyle`
:root {
    --color-mainColor: #14B069;
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

${reset};

 body,
header,
footer,
section,
div,
img,
h1,
h2,
h3,
dt,
dd,
p {
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
input,
button {
    font: inherit;
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

ul,
li {
    list-style: none;
    padding: 0;
    margin: 0;
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