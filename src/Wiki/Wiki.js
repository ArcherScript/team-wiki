import React, { Component } from 'react';
import styled from 'styled-components';
import TopNav from './TopNav/TopNav';

const WikiContainer = styled.div`
    height: 100%;
    width: 100%;
`


class Wiki extends Component {
    render() {
        return (
            <WikiContainer>
                <TopNav />
            </WikiContainer>
        );
    }
}

export default Wiki;