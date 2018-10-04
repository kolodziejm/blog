import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Header from '../typography/MediumHeader';
import Thumbnail from './Thumbnail';

import PostDate from '../PostDate';
import PostTime from '../PostTime';
import PostCategory from '../PostCategory';

const Container = styled.li`
    border: none;
    list-style: none;
    /* padding: 0 1.5rem;  zrobić ul container i tam dać padding*/ 
    
    &:not(:last-child) {
        margin-bottom: 2.5rem;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1rem;
`;

const CardHeader = styled(Header)`
    text-align: center;
    margin-bottom: 1.5rem;
`;

const CardDescription = styled.p`
    font-size: 1.6rem;
    color: #666;
    margin-bottom: 1.5rem;
`;

const ReadMoreBtn = styled(Link)`
    text-decoration: none;
    display: block;
    padding: .5rem 0;
    text-align: center;
    color: #fff;
    background-color: #FF006E;
    font-size: 1.6rem;
`;

export default ( props ) => (
    <Container>
        <Thumbnail src={props.src} srcSet={props.srcSet} sizes={props.sizes}/>
        <CardHeader>{props.title}</CardHeader>
        <InfoContainer>
            <PostDate date={props.date}/>
            <PostCategory categoryTo={props.categoryTo} category={props.category}/>
            <PostTime time={props.time}/>
        </InfoContainer>
        <CardDescription>{props.description}</CardDescription>
        <ReadMoreBtn to={props.postTo}>Read more</ReadMoreBtn>
    </Container>
);