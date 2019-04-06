import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import styled from 'styled-components';
import data from './data.json';

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Image = styled.img`
  margin-bottom: 25px;
`

class Home extends Component {
  render() {
    const { home } = data
    console.log(home);
    return (
      <HomeContainer>
        <Image src={home.logo} alt={"logo"} />
        <SearchBar placeholder={`Search ${data.title} Wiki`} autoFocus />
      </HomeContainer>
    );
  }
}

export default Home;
