import React, { useState, Fragment } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore, Book } from '@material-ui/icons';
import PageTabs from './PageTabs/PageTabs'

const CategoryTabs = (props) => {
    const { categories, pages } = props;

    const [categoryOpen, setCategory] = useState(props.pages[0].id);

    return (
        categories.map(category => {
            const categoryPages = pages.filter(page => page.category === category.id);
            const tabOpen = categoryOpen === category.id;
            return (
                <Fragment key={category.id}>
                    <ListItem button onClick={() => setCategory(category.id)}>
                        <ListItemIcon><Book /></ListItemIcon>
                        <ListItemText>{category.name}</ListItemText>
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