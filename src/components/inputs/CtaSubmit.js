import styled from 'styled-components';

export default styled.input`
    padding: 1rem 2rem;
    background-color: #FF006E;
    color: #fff;
    border: none;
    font-size: 1.6rem;
    text-align: center;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        box-shadow: 0 1rem 2rem rgba(0,0,0,.4);
        transform: translateY(-3px);
    }
`;