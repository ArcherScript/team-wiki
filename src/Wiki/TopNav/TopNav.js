import React from 'react';
import { AppBar, withStyles } from '@material-ui/core';
import TopNavContent from './TopNavContent/TopNavContent';

const StyledTopNav = withStyles({
    root: {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
    }
})(AppBar);

const TopNav = (props) => {
    return (
        props.isDesktop ?
            <StyledTopNav position="static">
                <TopNavContent isDesktop />
            </StyledTopNav>
            :
            <AppBar position="static">
                <TopNavContent toggleDrawer={props.toggleDrawer} />
            </AppBar>
    );
}

export default TopNav;