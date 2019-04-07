import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, withStyles } from '@material-ui/core';
import { AccountCircle, Menu } from '@material-ui/icons';
import styled from 'styled-components';
import NavSearch from './NavSearch/NavSearch';
import { DataContext } from './../../DataContext/DataContext';

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
                {!props.isDesktop && <MenuContainer color="inherit"><Menu /></MenuContainer>}
                <Typography variant="h6" color="inherit" noWrap>
                    {/* <DataContext.Consumer>
                        {data => data.pages[0].title}
                    </DataContext.Consumer> */}
                </Typography>
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
                    <TopNavContent />
                </AppBar>
        );
    }
}

export default TopNav;