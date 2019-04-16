import React from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled(Paper)`
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

const SearchBar = (props) => {
  return (
    <Container elevation={1}>
      <StyledInput placeholder={props.placeholder} onChange={(event) => props.onChange(event)}/>
      <Icon aria-label="Search" onClick={() => props.onClick()} disabled={props.disabled}>
        <Search />
      </Icon>
    </Container>
  );
}

export default SearchBar;