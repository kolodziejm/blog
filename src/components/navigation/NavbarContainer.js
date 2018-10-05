import styled from 'styled-components';

export default styled.nav`
    background-color: #8338ec;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1.5rem;
    width: 100%;
    z-index: 9999;
    border-bottom: 2px solid #999;

    @media only screen and (min-width: 48em) {
        padding: 1.5rem 4rem 1.5rem 1.5rem;
    }
`;