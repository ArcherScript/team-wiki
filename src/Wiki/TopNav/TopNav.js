import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, withStyles } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
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

class TopNav extends Component {
    render() {
        return (
                <StyledTopNav position="static">
                    <StyledToolbar>
                        <StyledLeftBar>
                            <Typography variant="h6" color="inherit" noWrap>
                                <DataContext.Consumer>
                                    {data => data.pages[0].title}
                                </DataContext.Consumer>
                            </Typography>
                        </StyledLeftBar>
                        <StyledRightBar>
                            <NavSearch />
                            <IconButton color="inherit">
                                <AccountCircle />
                            </IconButton>
                        </StyledRightBar>
                    </StyledToolbar>
                </StyledTopNav>
        );
    }
}

export default TopNav;