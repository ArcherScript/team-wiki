import React, {useContext} from 'react';
import styled from 'styled-components';
import {withTheme} from '@material-ui/core';
import {SizeContext} from './../../SizeContext/SizeContext';

const ContentContainer = styled.div`
    width: 100%;
    height: ${props => props.isDesktop ? "calc(100% - 64px)" : "calc(100% - 56px)"};
    background-color: pink;
    display:flex;
    flex:1;
`

const Content = (props) => {
    const isDesktop = useContext(SizeContext);
    return (
        <ContentContainer isDesktop={isDesktop}>

        </ContentContainer>
    );
};

export default withTheme()(Content);