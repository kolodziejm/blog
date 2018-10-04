import React from 'react';
import styled from 'styled-components';
import Container from './NavbarContainer';
import Hamburger from './Hamburger';
import HeadLink from '../HeadLink';

import { Link } from 'gatsby';

const MobileList = styled.ul`
    width: 100%;
    list-style: none;
    display: ${props => props.showMobileNav ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media only screen and (min-width: 48em) {
        display: none;
    }    
`;

const MobileItem = styled.li`
    padding: 1.7rem;
    width: 100%;
    background-color: ${props => props.active ? '#FF006E' : '#8338ec'}; 

    &:not(:last-child) {
        border-bottom: 1px solid #fff;
    }
`;

const MobileLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
`;

const DesktopList = styled.ul`
    list-style: none;
    display: none;

    @media only screen and (min-width: 48em) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`;

const DesktopItem = styled.li`

    &:not(:last-child) {
        padding-right: 3.5rem;
    }
`;

const DesktopLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.active ? '#FF006E' : '#fff'};
    font-size: 1.5rem;
`;

// WPROWADZIĆ CONTENT LIMITER, MAX WIDTH 1200px

export default (props) => (
    <React.Fragment>
        <Container>
            <HeadLink />
            <Hamburger clicked={props.hamburgerClicked} />
            <DesktopList>
                <DesktopItem>
                    <DesktopLink active={props.homeActive} to="/">Home</DesktopLink>
                </DesktopItem>
                <DesktopItem>
                    <DesktopLink active={props.categoriesActive} to="/categories">Categories</DesktopLink>
                </DesktopItem>
                <DesktopItem>
                    <DesktopLink active={props.aboutActive} to="/about">About me</DesktopLink>
                </DesktopItem>
            </DesktopList>
        </Container>
        <MobileList showMobileNav={props.showMobileNav}>
            <MobileItem active={props.homeActive}>
                <MobileLink to="/">Home</MobileLink>
            </MobileItem>
            <MobileItem active={props.categoriesActive}>
                <MobileLink to="/categories">Categories</MobileLink>
            </MobileItem>
            <MobileItem active={props.aboutActive}>
                <MobileLink to="/about">About me</MobileLink>
            </MobileItem>
        </MobileList>
    </React.Fragment>
);