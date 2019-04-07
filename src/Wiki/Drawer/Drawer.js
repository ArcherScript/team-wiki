import React, { Component } from 'react';
import { Drawer as MuiDrawer, withStyles } from '@material-ui/core';

const StyledDrawer = withStyles({
    paper: {
        width: 240,
    }
})(MuiDrawer);

class Drawer extends Component {
    render() {
        return (
            <StyledDrawer variant={this.props.isDesktop ? "permanent" : "temporary"}>
                :)
            </StyledDrawer>
        );
    }
}

export default Drawer;