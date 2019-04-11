import React, { useContext, useState } from 'react';
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
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <WikiContainer>
            <Drawer isDesktop={isDesktop} drawerOpen={drawerOpen} toggleDrawer={() => setDrawerOpen(!drawerOpen)}/>
            <TopNav isDesktop={isDesktop} toggleDrawer={() => setDrawerOpen(!drawerOpen)} />
        </WikiContainer>
    );
}

export default Wiki;