import React, { Component } from 'react';
import { Drawer as MuiDrawer, withStyles, List, ListItem, ListItemText, ListItemIcon, Collapse, withTheme } from '@material-ui/core';
import { ExpandLess, ExpandMore, Book, Bookmark } from '@material-ui/icons';
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
            pageOpen: true,
            drawerOpen: false,
        }
    }

    togglePage = () => {
        this.setState({ pageOpen: !this.state.pageOpen })
    }

    toggleDrawer = () => {
        this.setState({ drawerOpen: !this.state.drawerOpen })
    }

    render() {
        return (
            <StyledDrawer variant={this.props.isDesktop ? "permanent" : "temporary"} open={this.props.isDesktop ? true : this.state.drawerOpen}>
                <DataContext.Consumer>
                    {data =>
                        <div>
                            <DrawerLogoContainer>
                                <DrawerLogo src={data.home.logo} />
                            </DrawerLogoContainer>
                            <List>
                                {
                                    data.categories.map(category => {
                                        const pages = data.pages.filter(page => page.category === category.id);
                                        return (
                                            <React.Fragment key={category.id}>
                                                <ListItem button onClick={() => this.togglePage()}>
                                                    <ListItemIcon><Book /></ListItemIcon>
                                                    <ListItemText>{category.name}</ListItemText>
                                                    {this.state.pageOpen ? <ExpandLess /> : <ExpandMore />}
                                                </ListItem>
                                                <Collapse in={this.state.pageOpen} timeout="auto" unmountOnExit>
                                                    <List component="div" disablePadding>
                                                        {pages.map(page => {
                                                            return (
                                                                <NestedListItem key={page.id} unit={this.props.theme.spacing.unit} button>
                                                                    <ListItemIcon><Bookmark /></ListItemIcon>
                                                                    <ListItemText>{page.title}</ListItemText>
                                                                </NestedListItem>
                                                            );
                                                        })
                                                        }
                                                    </List>
                                                </Collapse>
                                            </React.Fragment>
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