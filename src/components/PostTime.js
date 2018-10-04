import React from 'react';
import styled from 'styled-components';
import { MdSchedule } from 'react-icons/md';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin};
`;

const Text = styled.span`
    font-size: 1.2rem;
    margin-left: .3rem;
    color: #666;
`;

export default ( props ) => (
    <Wrapper>
        <MdSchedule fill="#000" size="1.2rem"/>
        <Text>{props.time} {props.time === 1 ? 'minute' : 'minutes'}</Text>
    </Wrapper>
); 