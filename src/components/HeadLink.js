import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
    font-size: 2.4rem;
    text-decoration: none;
    color: #fff;
`;

const Logo = styled.span`
    color: #ABFF4F;
`;

export default (props) => (
    <NavLink to={props.to}><Logo>&lt;/&gt;</Logo> Kolomar</NavLink>
);