import React from 'react';
import { ListItem, ListItemText, ListItemIcon, withTheme } from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
import styled from 'styled-components';

const NestedListItem = styled(ListItem)`
    padding-left: ${props => props.unit * 4}px !important;
`

const PageTabs = (props) => {
    const { pages } = props;
    return (
        pages.map(page => {
            return (
                <NestedListItem key={page.id} unit={props.theme.spacing.unit} button>
                    <ListItemIcon><Bookmark /></ListItemIcon>
                    <ListItemText>{page.title}</ListItemText>
                </NestedListItem>
            );
        })

    );
};

export default withTheme()(PageTabs);