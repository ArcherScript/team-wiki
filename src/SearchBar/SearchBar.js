import React, { Component } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 500px;
`

const StyledInput = styled(InputBase)`
  margin-left: 8px;
  flex: 1;
`
const Icon = styled(IconButton)`
  padding: 10px;
`

class SearchBar extends Component {
    render() {
        return (
            <Container elevation={1}>
                <StyledInput {...this.props} />
                <Icon aria-label="Search">
                    <Search />
                </Icon>
            </Container>
        );
    }
}

export default SearchBar;