import React, {useContext} from 'react';
import { AppBar, withStyles } from '@material-ui/core';
import TopNavContent from './TopNavContent/TopNavContent';
import {SizeContext} from './../../SizeContext/SizeContext';

const StyledTopNav = withStyles({
    root: {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
    }
})(AppBar);

const TopNav = (props) => {
    const isDesktop = useContext(SizeContext);
    return (
        isDesktop ?
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