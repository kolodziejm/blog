import React from 'react';
import styled from 'styled-components';

import Header from '../typography/MediumHeader';
import Thumbnail from './Thumbnail';

import PostDate from '../PostDate';
import PostTime from '../PostTime';
import PostCategory from '../PostCategory';

const Container = styled.li`
    border: none;
    list-style: none;
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CardHeader = styled(Header)`
    text-align: center;
`;

export default ( props ) => (
    <Container>
        <Thumbnail src={props.src} srcSet={props.srcSet}/>
        <CardHeader>{props.title}</CardHeader>
        <InfoContainer>
            <PostDate date="28 September, 2018"/>
            <PostCategory to="/react" category="React"/>
            <PostTime time="4"/>
        </InfoContainer>
    </Container>
);