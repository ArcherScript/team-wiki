import React, {useContext} from 'react';
import { Drawer as MuiDrawer, withStyles, List } from '@material-ui/core';
import styled from 'styled-components';
import CategoryTabs from './CategoryTabs/CategoryTabs';
import { DataContext } from './../../DataContext/DataContext';
import {SizeContext} from './../../SizeContext/SizeContext';

const StyledDrawer = withStyles({
    paper: {
        width: 240,
    }
})(MuiDrawer);

const DrawerLogo = styled.img`
    width: 100%;
    max-height: 240px;
`
const DrawerLogoContainer = styled.div`
    padding: 35px;
`

const Drawer = (props) => {
    const data = useContext(DataContext);
    const isDesktop = useContext(SizeContext);
    return (
        <StyledDrawer variant={isDesktop ? "permanent" : "temporary"} open={props.drawerOpen} onClose={props.toggleDrawer}>
            <List>
                <DrawerLogoContainer>
                    <DrawerLogo src={data.home.logo} />
                </DrawerLogoContainer>
                <CategoryTabs categories={data.categories} pages={data.pages} />
            </List>
        </StyledDrawer>
    );
}

export default Drawer;