import React, { Component } from 'react';
import { Drawer as MuiDrawer, withStyles, List, ListItem, ListItemText, ListItemIcon, Collapse, withTheme } from '@material-ui/core';
import {ExpandLess, ExpandMore, Book, Bookmark} from '@material-ui/icons';
import styled from 'styled-components';
import { DataContext } from './../../DataContext/DataContext';

const StyledDrawer = withStyles({
    paper: {
        width: 240,
    }
})(MuiDrawer);

const DrawerLogo = styled.img`
    width: 100%;
    max-height: 240px;
`
const DrawerLogoContainer = styled.div`
    padding: 35px;
`
const NestedListItem = styled(ListItem)`
    padding-left: ${props => props.unit * 4}px !important;
`

class Drawer extends Component {
    constructor() {
        super();
        this.state = {
            open: true,
        }
    }

    handleClick = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <StyledDrawer variant={this.props.isDesktop ? "permanent" : "temporary"}>
                <DataContext.Consumer>
                    {data =>
                        <div>
                            <DrawerLogoContainer>
                                <DrawerLogo src={data.home.logo} />
                            </DrawerLogoContainer>
                            <List>
                                {
                                    data.categories.map(category => {
                                        return (
                                            <>
                                                <ListItem button onClick={() => this.handleClick()}>
                                                    <ListItemIcon><Book /></ListItemIcon>
                                                    <ListItemText>{category.name}</ListItemText>
                                                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                                                </ListItem>
                                                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                                                    <List component="div" disablePadding>
                                                        <NestedListItem key={"1"} unit={this.props.theme.spacing.unit} inset button>
                                                            <ListItemIcon><Bookmark /></ListItemIcon>
                                                            <ListItemText inset>Test</ListItemText>
                                                        </NestedListItem>
                                                    </List>
                                                </Collapse>
                                            </>
                                        )
                                    })
                                }
                            </List>
                        </div>
                    }
                </DataContext.Consumer>
            </StyledDrawer>
        );
    }
}

export default withTheme()(Drawer);