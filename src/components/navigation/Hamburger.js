import React from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';

const Button = styled.button`
    font-size: 3.4rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

export default (props) => (
    <Button onClick={props.clicked}><MdMenu fill="#fff"/></Button>
);

