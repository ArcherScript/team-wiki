import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import styled from 'styled-components';
import data from './../data.json';

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Image = styled.img`
  margin-bottom: 50px;
  width: 300px;
  max-height: 300px;
`

const Home = () => {
  const { home } = data
  return (
    <HomeContainer>
      <Image src={home.logo} alt={"logo"} />
      <SearchBar placeholder={`Search ${data.title} Wiki`} autoFocus />
    </HomeContainer>
  );
}

export default Home;
