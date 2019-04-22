import React, { useContext } from 'react';
import styled from 'styled-components';
import { Typography, withTheme } from '@material-ui/core';
import { PageContext } from './../../Contexts/PageContext/PageContext';
import { SizeContext } from './../../Contexts/SizeContext/SizeContext';

const ContentContainer = styled.div`
    display: flex;
    width: ${props => props.isDesktop ? "calc(100% - 240px)" : "100%"};
    height: ${props => props.isDesktop ? "calc(100% - 64px)" : "calc(100% - 56px)"};
    margin-left: ${props => props.isDesktop ? "240px" : "0"};
    padding: 16px;
    padding-bottom: 0;
    box-sizing: border-box;
`


const Content = (props) => {
    const isDesktop = useContext(SizeContext);
    const currentPage = useContext(PageContext);

    return (
        <ContentContainer isDesktop={isDesktop}>
            <Typography variant="h2">
                {currentPage.title}
            </Typography>
        </ContentContainer>
    );
};

export default withTheme()(Content);