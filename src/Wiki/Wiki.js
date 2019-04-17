import React, { useState } from 'react';
import styled from 'styled-components';
import Drawer from './Drawer/Drawer';
import TopNav from './TopNav/TopNav';
import Content from './Content/Content';

const WikiContainer = styled.div`
    height: 100%;
    width: 100%;
`

const Wiki = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <WikiContainer>
            <TopNav toggleDrawer={() => setDrawerOpen(!drawerOpen)} />
            <Drawer drawerOpen={drawerOpen} toggleDrawer={() => setDrawerOpen(!drawerOpen)}/>
            <Content />
        </WikiContainer>
    );
}

export default Wiki;