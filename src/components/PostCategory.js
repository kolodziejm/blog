import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MdList } from 'react-icons/md';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin};
`;

const Text = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    margin-left: .3rem;
    color: #FF006E;
`;

export default ( props ) => (
    <Wrapper>
        <MdList fill="#000" size="1.6rem"/>
        <Text to={props.categoryTo}>{props.category}</Text>
    </Wrapper>
); 