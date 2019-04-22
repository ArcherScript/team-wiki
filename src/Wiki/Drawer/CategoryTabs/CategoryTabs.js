import React, { useState, Fragment, useContext } from 'react';
import { List, ListItem, Collapse, Typography } from '@material-ui/core';
import styled from 'styled-components';
import PageTabs from './PageTabs/PageTabs'
import { PageContext } from './../../../Contexts/PageContext/PageContext';

const CategoryTab = styled(ListItem)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 24px !important;
`

const CategoryTabs = (props) => {
    const { categories, pages } = props;
    const currentPage = useContext(PageContext);
    const [categoryOpen, setCategory] = useState(currentPage.category);

    return (
        categories.map(category => {
            const categoryPages = pages.filter(page => page.category === category.id);
            const tabOpen = categoryOpen === category.id;
            return (
                <Fragment key={category.id}>
                    <CategoryTab dense button onClick={() => setCategory(category.id)}>
                        <Typography variant="subtitle2">{category.name}</Typography>
                    </CategoryTab>
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