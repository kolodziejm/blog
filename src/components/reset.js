import { injectGlobal } from 'styled-components'

injectGlobal`
*,
*:after,
*:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html, body, #___gatsby, #___gatsby > div {
  height: 100%
}
 
html {
    font-size: 62.5%; // 1 rem = 10px;

    @media only screen and (min-width: 48em) {
        font-size: 67.5%;
    }

    @media only screen and (min-width: 64em) {
        font-size: 72.5%;
    }

    /* @media only screen and (min-width: 75em) {
        font-size: 75.5%;
    } */
}
    
body {
    @import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700');
    font-family: 'Lato', sans-serif;
    background-color: #f8f8f8;
    box-sizing: border-box;
    overflow-x: hidden;
    line-height: 1.5;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
}`
