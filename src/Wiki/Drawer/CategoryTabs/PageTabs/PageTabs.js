import React from 'react';
import { ListItem, ListItemText, withTheme } from '@material-ui/core';
import styled from 'styled-components';

const NestedListItem = styled(ListItem)`
    padding-left: 32px !important;
`

const redirectUser = (pageTitle) => {
    window.location = `${window.location.origin}/Wiki?page=${pageTitle}`
}

const PageTabs = (props) => {
    const { pages } = props;
    return (
        pages.map(page => {
            return (
                <NestedListItem key={page.id} onClick={() => redirectUser(page.title)} dense unit={props.theme.spacing.unit} button>
                    <ListItemText>{page.title}</ListItemText>
                </NestedListItem>
            );
        })

    );
};

export default withTheme()(PageTabs);