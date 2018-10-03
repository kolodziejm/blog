import styled from 'styled-components';

export default styled.nav`
    background-color: #8338ec;
    padding: 1.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #999;

    @media only screen and (min-width: 48em) {
        padding: 1.5rem 4rem 1.5rem 1.5rem;
    }
`;