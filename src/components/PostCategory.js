import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MdList } from 'react-icons/md';

const Wrapper = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin};
`;

const Text = styled(Link)`
    text-decoration: none;
    font-size: 1.3rem;
    margin-left: .3rem;
    color: #FF006E;
    transition: all .3s ease-in-out;

    &:hover {
        color: #cc0058;
    }
`;

export default (props) => (
    <Wrapper>
        <MdList fill="#8338EC" size="16px" />
        <Text to={props.categoryTo}>{props.category}</Text>
    </Wrapper>
); 