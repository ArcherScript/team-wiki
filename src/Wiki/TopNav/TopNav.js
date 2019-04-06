import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';
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

const MenuContainer = styled(IconButton)`
    margin-right: 16px !important;
`

class TopNav extends Component {
    render() {
        return (
            <AppBar position="static">
                <StyledToolbar>
                    <StyledLeftBar>
                        <MenuContainer color="inherit">
                            <Menu />
                        </MenuContainer>
                        <Typography variant="h6" color="inherit" noWrap>
                            Title goes here
                        </Typography>
                    </StyledLeftBar>
                    <StyledRightBar>
                        <NavSearch />
                        <IconButton color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </StyledRightBar>
                </StyledToolbar>
            </AppBar>
        );
    }
}

export default TopNav;