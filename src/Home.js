import React, { Component } from 'react';
import { Paper, InputBase, IconButton, Divider } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import styled from 'styled-components';
import data from './data.json';

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 500px;
`

const StyledInput = styled(InputBase)`
  margin-left: 8px;
  flex: 1;
`

const StyledDivider = styled(Divider)`
  width: 1px;
  height: 28px;
  margin: 4px;
  color: black;
`
const Icon = styled(IconButton)`
  padding: 10px;
`

class Home extends Component {
  render() {
    const { home } = data
    console.log(home);
    return (
      <HomeContainer>
        <Container elevation={1}>
          <StyledInput placeholder={`Search ${data.title} Wiki`} />
          <StyledDivider />
          <Icon aria-label="Search">
            <Search />
          </Icon>
        </Container>
      </HomeContainer>
    );
  }
}

export default Home;
