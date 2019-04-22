import React, { useContext } from 'react';
import { ListItem, Typography, withTheme } from '@material-ui/core';
import styled from 'styled-components';
import { PageContext } from './../../../../Contexts/PageContext/PageContext';

const NestedListItem = styled(ListItem)`
    padding-left: 32px !important;
`

const NestedListItemText = styled(Typography)`
    font-style: ${props => props.currentPage ? 'italic' : ''};
`

const redirectUser = (pageTitle) => {
    window.location = `${window.location.origin}/Wiki?page=${pageTitle}`
}

const PageTabs = (props) => {
    const currentPage = useContext(PageContext);
    const { pages } = props;
    return (
        pages.map(page => {
            const isCurrentPage = currentPage.id === page.id;
            return (
                <NestedListItem
                    key={page.id}
                    onClick={() => redirectUser(page.title)}
                    dense
                    unit={props.theme.spacing.unit}
                    button
                >
                    <NestedListItemText
                        variant={isCurrentPage ? 'subtitle2' : 'body2'}
                        currentPage={isCurrentPage}
                    >
                        {page.title}
                    </NestedListItemText>
                </NestedListItem>
            );
        })

    );
};

export default withTheme()(PageTabs);