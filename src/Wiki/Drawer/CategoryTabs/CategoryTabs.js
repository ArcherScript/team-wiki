import React, { useState, Fragment } from 'react';
import { List, ListItem, ListItemIcon, Collapse, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore, Book } from '@material-ui/icons';
import styled from 'styled-components';
import PageTabs from './PageTabs/PageTabs'

const CategoryTab = styled(ListItem)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const TabTitle = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`


const CategoryTabs = (props) => {
    const { categories, pages } = props;
    const [categoryOpen, setCategory] = useState(props.categories[0].id);

    return (
        categories.map(category => {
            const categoryPages = pages.filter(page => page.category === category.id);
            const tabOpen = categoryOpen === category.id;
            return (
                <Fragment key={category.id}>
                    <ListItem button onClick={() => setCategory(category.id)}>
                        <TabTitle>
                            <ListItemIcon><Book fontSize="small" /></ListItemIcon>
                            <Typography variant="subtitle1">{category.name}</Typography>
                        </TabTitle>
                        {tabOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={tabOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <PageTabs pages={categoryPages} />
                        </List>
                    </Collapse>
                </Fragment>
            )
        })
    );
};

export default CategoryTabs;