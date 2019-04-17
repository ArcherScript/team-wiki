import React, { useContext } from 'react';
import { Drawer as MuiDrawer, withStyles, List, Divider, Typography } from '@material-ui/core';
import styled from 'styled-components';
import CategoryTabs from './CategoryTabs/CategoryTabs';
import { DataContext } from './../../DataContext/DataContext';
import { SizeContext } from './../../SizeContext/SizeContext';

const StyledDrawer = withStyles({
    paper: {
        width: 240,
    }
})(MuiDrawer);

const TitleContainer = styled.div`
    display: flex;
    height: 64px;
    width: 100%;
    padding-left: 24px;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`
const SubtitleContainer = styled.div`
    display:flex;
    flex-direction: row;
`

const formatDate = (date) => {
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
}

const Drawer = (props) => {
    const data = useContext(DataContext);
    const isDesktop = useContext(SizeContext);
    return (
        <StyledDrawer variant={isDesktop ? "permanent" : "temporary"} open={props.drawerOpen} onClose={props.toggleDrawer}>
            <TitleContainer>
                <Typography variant="h6">
                    {data.title}
                </Typography>
                <SubtitleContainer>
                    <Typography variant="subtitle2">Updated:</Typography>
                    <Typography variant="subtitle2">
                        &nbsp; {formatDate(new Date(data.modified))}
                    </Typography>
                </SubtitleContainer>
            </TitleContainer>
            <Divider />
            <List>
                <CategoryTabs categories={data.categories} pages={data.pages} />
            </List>
        </StyledDrawer>
    );
}

export default Drawer;