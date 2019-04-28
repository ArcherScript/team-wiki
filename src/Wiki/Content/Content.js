import React, { useContext } from 'react';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core';
import ContentHeader from './ContentHeader/ContentHeader';
import ContentBody from './ContentBody/ContentBody';
import { PageContext } from './../../Contexts/PageContext/PageContext';
import { SizeContext } from './../../Contexts/SizeContext/SizeContext';
import { DataContext } from './../../Contexts/DataContext/DataContext';

const ContentContainer = styled.div`
    display: flex;
    width: ${props => props.isDesktop ? "calc(100% - 240px)" : "100%"};
    height: ${props => props.isDesktop ? "calc(100% - 64px)" : "calc(100% - 56px)"};
    margin-left: ${props => props.isDesktop ? "240px" : "0"};
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 0;
    box-sizing: border-box;
    flex-direction: column;
`

const Content = (props) => {
    const isDesktop = useContext(SizeContext);
    const currentPage = useContext(PageContext);
    const data = useContext(DataContext);

    const articles = currentPage.articles.map(pageArticle => {
        return (
            data.articles.filter(article => article.id === pageArticle)[0]
        )
    }).filter(article => article !== undefined)

    return (
        <ContentContainer isDesktop={isDesktop}>
            <ContentHeader title={currentPage.title} description={currentPage.description} />
            {!!articles.length &&
            <ContentBody articles={articles} />
            }
        </ContentContainer>
    );
};

export default withTheme()(Content);