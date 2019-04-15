import React from 'react';
import { AccountCircle, Menu } from '@material-ui/icons';
import {Toolbar, IconButton, withStyles} from '@material-ui/core';
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

const MenuContainer = withStyles({
    root: {
        marginRight: 12 
    }
})(IconButton)


const TopNavContent = (props) => {
    return (
        <StyledToolbar>
            <StyledLeftBar>
                {!props.isDesktop && <MenuContainer onClick={props.toggleDrawer} color="inherit"><Menu /></MenuContainer>}
            </StyledLeftBar>
            <StyledRightBar>
                <NavSearch isDesktop={props.isDesktop} />
                {props.isDesktop && <IconButton color="inherit"><AccountCircle /></IconButton>}
            </StyledRightBar>
        </StyledToolbar>
    );
};

export default TopNavContent;