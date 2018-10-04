import React from 'react';
import styled from 'styled-components';
import { MdDateRange } from 'react-icons/md';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.span`
    font-size: 1rem;
    margin-left: .3rem;
    color: #666;
`;

export default ( props ) => (
    <Wrapper>
        <MdDateRange fill="#000" size="1.2rem"/>
        <Text>{props.date}</Text>
    </Wrapper>
); 