import React from 'react';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';

const Button = styled.button`
    font-size: 3.4rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 48em) {
        display: none;
    }    
`;

export default (props) => (
<Button onClick={props.clicked}>{props.active ? <MdClose fill="#fff"/> : <MdMenu fill="#fff"/>}</Button>
);

