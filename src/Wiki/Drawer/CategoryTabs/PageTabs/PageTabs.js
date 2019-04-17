import React from 'react';
import { ListItem, ListItemText, withTheme } from '@material-ui/core';
import styled from 'styled-components';

const NestedListItem = styled(ListItem)`
`

const PageTabs = (props) => {
    const { pages } = props;
    return (
        pages.map(page => {
            return (
                <NestedListItem key={page.id} dense unit={props.theme.spacing.unit} button>
                    <ListItemText>{page.title}</ListItemText>
                </NestedListItem>
            );
        })

    );
};

export default withTheme()(PageTabs);