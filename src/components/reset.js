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
    box-sizing: border-box;
    overflow-x: hidden;
    line-height: 1.3;
}`