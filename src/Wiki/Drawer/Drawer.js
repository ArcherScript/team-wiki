import React from 'react';
import { Drawer as MuiDrawer, withStyles, List } from '@material-ui/core';
import styled from 'styled-components';
import CategoryTabs from './CategoryTabs/CategoryTabs';
import { DataContext } from './../../DataContext/DataContext';

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
    return (
        <StyledDrawer variant={props.isDesktop ? "permanent" : "temporary"} open={props.drawerOpen} onClose={props.toggleDrawer}>
            <DataContext.Consumer>
                {data =>
                    <>
                        <DrawerLogoContainer>
                            <DrawerLogo src={data.home.logo} />
                        </DrawerLogoContainer>
                        <List>
                            <CategoryTabs categories={data.categories} pages={data.pages} />
                        </List>
                    </>
                }
            </DataContext.Consumer>
        </StyledDrawer>
    );
}

export default Drawer;