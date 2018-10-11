import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    padding: 1.8rem 0;
    background-color: #8338ec;
`;

const Legal = styled.p`
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #fff;
    text-align: center;
`;

const Policy = styled.a`
    font-size: 1.4rem;
    display: block;
    text-align: center;
    text-decoration: none;
    color: #ABFF4F;
    cursor: pointer;
`;

export default (props) => (
    <Container>
        <Legal>Copyright &copy; Marcin Kołodziej 2018</Legal>
        <Policy href="https://privacypolicies.com/privacy/view/eadf5ceec1f9b671511e3ac25d5472aa" target="_blank">Privacy policy</Policy>
    </Container>
);

