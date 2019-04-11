import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, withStyles } from '@material-ui/core';
import { AccountCircle, Menu } from '@material-ui/icons';
import styled from 'styled-components';
import NavSearch from './NavSearch/NavSearch';

const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledLeftBar = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`

const StyledRightBar = styled.div`
    display: flex;
    align-items: center;
`

const StyledTopNav = withStyles({
    root: {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
    }
})(AppBar);

const MenuContainer = withStyles({
    root: {
        marginRight: 12 
    }
})(IconButton)

/*
    Without using the @material styles package which is in alpha
    This is our only choice unfortunately
*/

const TopNavContent = (props) => {
    return (
        <StyledToolbar>
            <StyledLeftBar>
                {!props.isDesktop && <MenuContainer onClick={props.toggleDrawer} color="inherit"><Menu /></MenuContainer>}
            </StyledLeftBar>
            <StyledRightBar>
                <NavSearch isDesktop={props.isDesktop}/>
                {props.isDesktop && <IconButton color="inherit"><AccountCircle /></IconButton>}
            </StyledRightBar>
        </StyledToolbar>
    );
};

class TopNav extends Component {
    render() {
        return (
            this.props.isDesktop ?
                <StyledTopNav position="static">
                    <TopNavContent isDesktop />
                </StyledTopNav>
                :
                <AppBar position="static">
                    <TopNavContent toggleDrawer={this.props.toggleDrawer}/>
                </AppBar>
        );
    }
}

export default TopNav;