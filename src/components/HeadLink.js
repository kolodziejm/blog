import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
    font-size: 2.4rem;
    text-decoration: none;
    color: #fff;
    padding: ${props => props.padding};
`;

const Logo = styled.span`
    color: #ABFF4F;
`;

export default (props) => (
    <NavLink to="/" padding={props.padding}><Logo>&lt;/&gt;</Logo> Kolomar</NavLink>
);