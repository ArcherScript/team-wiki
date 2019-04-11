import React, { Component, Fragment } from 'react';
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
            categoryOpen: 0,
        }
    }

    togglePage = (categoryId) => {
        this.setState({ categoryOpen: categoryId })
    }

    render() {
        return (
            <StyledDrawer variant={this.props.isDesktop ? "permanent" : "temporary"} open={this.props.drawerOpen} onClose={this.props.toggleDrawer}>
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
                                        const tabOpen = this.state.categoryOpen === category.id;
                                        return (
                                            <Fragment key={category.id}>
                                                <ListItem button onClick={() => this.togglePage(category.id)}>
                                                    <ListItemIcon><Book /></ListItemIcon>
                                                    <ListItemText>{category.name}</ListItemText>
                                                    {tabOpen ? <ExpandLess /> : <ExpandMore />}
                                                </ListItem>
                                                <Collapse in={tabOpen} timeout="auto" unmountOnExit>
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
                                            </Fragment>
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