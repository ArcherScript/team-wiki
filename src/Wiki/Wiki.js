import React, { Component, useContext } from 'react';
import styled from 'styled-components';
import Drawer from './Drawer/Drawer';
import TopNav from './TopNav/TopNav';
import { SizeContext } from './../SizeContext/SizeContext';

const WikiContainer = styled.div`
    height: 100%;
    width: 100%;
`

const Wiki = () => {
    const isDesktop = useContext(SizeContext);
    return (
        <WikiContainer>
            <Drawer isDesktop={isDesktop} />
            <TopNav isDesktop={isDesktop} />
        </WikiContainer>
    );
}

export default Wiki;