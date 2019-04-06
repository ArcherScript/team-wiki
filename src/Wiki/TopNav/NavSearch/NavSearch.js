import React, { Component } from 'react';
import { InputBase, Icon, withStyles, withTheme } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import styled from 'styled-components';

// .-.
const StyledInput = withStyles({
    root: {
        color: "inherit",
    }
})(InputBase);

const NavSearchContainer = styled.div`
    background-color: ${props => props.theme.palette.primary.light};
    border-radius: ${props => props.theme.shape.borderRadius}px;
    margin-left: 12px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
`

const StyledIcon = styled(Icon)`
    padding: 0 12px;
`

class NavSearch extends Component {
    render() {
        return (
            <NavSearchContainer theme={this.props.theme}>
                <StyledIcon aria-label="Search">
                    <Search />
                </StyledIcon>
                <StyledInput placeholder="Search..." />
            </NavSearchContainer>
        );
    }
}

export default withTheme()(NavSearch);