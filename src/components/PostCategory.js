import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MdList } from 'react-icons/md';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    margin-left: .3rem;
    color: #FF006E;
`;

export default ( props ) => (
    <Wrapper>
        <MdList fill="#000" size="1.2rem"/>
        <Text to={props.to}>{props.category}</Text>
    </Wrapper>
); 