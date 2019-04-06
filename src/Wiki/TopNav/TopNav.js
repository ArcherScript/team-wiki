import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Icon, withStyles } from '@material-ui/core';
import { Menu, Search } from '@material-ui/icons';
import styled from 'styled-components';

const StyledInput = withStyles({
    root: {
        color: "inherit",
    }
})(InputBase);

const AppSearchContainer = styled.div`
    background-color: ${props => props.theme.palette.primary.light};
    border-radius: ${props => props.theme.shape.borderRadius}px;
    display: flex;
    align-items: center;
    flex-direction: row;
`

const StyledIcon = styled(Icon)`
    padding: 0 12px;
`

class TopNav extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Title goes here
                    </Typography>
                    <AppSearchContainer theme={this.props.theme}>
                        <StyledIcon aria-label="Search">
                            <Search />
                        </StyledIcon>
                        <StyledInput placeholder="Search..." />
                    </AppSearchContainer>
                </Toolbar>
            </AppBar>
        );
    }
}

export default TopNav;