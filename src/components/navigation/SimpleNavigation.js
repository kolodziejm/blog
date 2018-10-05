import React from 'react';
import styled from 'styled-components';

import HeadLink from '../HeadLink';
import Container from './NavbarContainer';

const SimpleContainer = styled(Container)`
    text-align: center;
`;

export default (props) => (
    <SimpleContainer>
        <HeadLink/>
    </SimpleContainer>
);