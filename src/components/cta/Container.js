import React from 'react';
import styled from 'styled-components';
import image from '../../assets/cta-image.jpeg';

export default styled.header`
    display: block;
    text-align: center;
    padding: 6rem 1rem 1rem 1rem;
    width: 100%;
    height: 55rem;
    @media only screen and (min-width: 48em) {
        height: 45rem;
    }

    background-image: linear-gradient(rgba(131,56,236,.9), rgba(131,56,236,.9)), url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;