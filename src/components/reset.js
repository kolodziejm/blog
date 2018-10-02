import { injectGlobal } from 'styled-components';

injectGlobal`
*,
*:after,
*:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
 
html {
    font-size: 62.5%; // 1 rem = 10px;
}
    
body {
    @import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700');
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    overflow-x: hidden;
    line-height: 1.3;
}`