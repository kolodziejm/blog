import styled from 'styled-components';

export default styled.input`
    display: block;
    background-color: #fff;
    border: 1px solid #3A86FF;
    border-radius: 4px;
    outline: none;
    color: #333;
    width: 100%;
    margin: ${props => props.margin};
    padding: 1rem 2rem;
    font-size: 1.6rem;
    transition: all .4s;

    &:focus {
        background-color: #ABFF4F;
        color: #333;

        &::placeholder {
            color: #333;
        }
    }
`;