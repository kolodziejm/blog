import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    padding: 1.8rem 0;
    background-color: #E8E9F3;
`;

const Legal = styled.p`
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #333;
    font-weight: 700;
    text-align: center;
`;

const Policy = styled.a`
    font-size: 1.4rem;
    display: block;
    text-align: center;
    text-decoration: none;
    color: #FF006E;
    cursor: pointer;
`;

export default (props) => (
    <Container>
        <Legal>Copyright &copy; Marcin Kołodziej 2019</Legal>
        <Policy href="https://privacypolicies.com/privacy/view/eadf5ceec1f9b671511e3ac25d5472aa" target="_blank">Privacy policy</Policy>
    </Container>
);

