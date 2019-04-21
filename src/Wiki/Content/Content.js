import React, { useContext } from 'react';
import styled from 'styled-components';
import { Typography, withTheme } from '@material-ui/core';
import queryString from 'query-string';
import { SizeContext } from './../../SizeContext/SizeContext';
import { DataContext } from './../../DataContext/DataContext';

const ContentContainer = styled.div`
    display: flex;
    width: ${props => props.isDesktop ? "calc(100% - 240px)" : "100%"};
    height: ${props => props.isDesktop ? "calc(100% - 64px)" : "calc(100% - 56px)"};
    margin-left: ${props => props.isDesktop ? "240px" : "0"};
    padding: 16px;
    padding-bottom: 0;
    box-sizing: border-box;
`

const queryPage = queryString.parse(window.location.search);

const Content = (props) => {
    const isDesktop = useContext(SizeContext);
    const data = useContext(DataContext);
    const currentPage = data.pages.filter(page => page.title === queryPage.page)[0];

    return (
        <ContentContainer isDesktop={isDesktop}>
            <Typography variant="h2">
                {currentPage.title}
            </Typography>
        </ContentContainer>
    );
};

export default withTheme()(Content);