import React, {useState} from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import {withRouter} from 'react-router-dom';
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

const SearchBar = (props) => {
  const [searchVal, setSearchVal] = useState('');
  return (
    <Container elevation={1}>
      <StyledInput placeholder={props.placeholder} autoComplete={"test"} onChange={(event) => setSearchVal(event.target.value)}/>
      <Icon aria-label="Search" onClick={() => props.history.push(`Wiki?page=${searchVal}`)}>
        <Search />
      </Icon>
    </Container>
  );
}

export default withRouter(SearchBar);