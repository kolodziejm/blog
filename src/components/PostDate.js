import React from 'react';
import styled from 'styled-components';
import { MdDateRange } from 'react-icons/md';

const Wrapper = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin};
`;

const Text = styled.span`
    font-size: 1.3rem;
    margin-left: .3rem;
    color: #666;
`;

export default (props) => (
    <Wrapper>
        <MdDateRange fill="#8338EC" size="12px" />
        <Text>{props.date}</Text>
    </Wrapper>
); 