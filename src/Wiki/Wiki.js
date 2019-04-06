import React, { Component } from 'react';
import styled from 'styled-components';
import { Drawer, withStyles } from '@material-ui/core';
import TopNav from './TopNav/TopNav';

const WikiContainer = styled.div`
    height: 100%;
    width: 100%;
`

const StyledDrawer = withStyles({
    paper: {
        width: 240,
    }
})(Drawer);

class Wiki extends Component {
    render() {
        return (
            <WikiContainer>
                <StyledDrawer variant="permanent">
                    :)
                </StyledDrawer>
                <TopNav />
            </WikiContainer>
        );
    }
}

export default Wiki;