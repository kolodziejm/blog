import styled from 'styled-components';

export default styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;

    @media only screen and (min-width: 48em) {
        margin-bottom: 2rem;
    }
`;