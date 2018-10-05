import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    padding: 1.8rem 0;
    background-color: #8338ec;
    text-align: center;
`;

const Legal = styled.p`
    font-size: 1.8rem;
    color: #fff;
`;

export default ( props ) => (
    <Container>
        <Legal>Copyright &copy; Marcin Kołodziej 2018</Legal>
    </Container>
);

