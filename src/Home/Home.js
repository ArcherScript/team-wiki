import React, { useState, useContext } from 'react';
import Fuse from 'fuse.js';
import { Paper, MenuItem } from '@material-ui/core'
import styled from 'styled-components';
import SearchBar from './SearchBar/SearchBar';
import { DataContext } from './../Contexts/DataContext/DataContext';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: [
    "title",
  ]
}

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

const Suggestion = styled(Paper)`
  width: 80%;
  max-height: 100px;
  overflow:auto;
  max-width: 500px;
`

const Home = (props) => {
  const data = useContext(DataContext);
  const { home, title } = data;

  const [autoSuggestions, setAutoSuggestions] = useState([]);

  const fuse = new Fuse(data.pages, fuseOptions);

  const searchChange = (event) => {
    setAutoSuggestions(fuse.search(event.target.value));
  }

  const navigateWiki = (pageLink) => {
    let encodedPageLink = encodeURIComponent(pageLink);
    window.location = `${window.location}Wiki?page=${encodedPageLink}`
  }

  const autoSuggestClick = (autoSuggestion) => {
    navigateWiki(autoSuggestion);
  }

  return (
    <HomeContainer>
      <Image src={home.logo} alt={"logo"} />
      <SearchBar
        autoFocus
        placeholder={`Search ${title} Wiki`}
        onChange={searchChange}
        onClick={() => navigateWiki(autoSuggestions[0].title)}
        disabled={!autoSuggestions.length}
      />
      <Suggestion elevation={2}>
        {autoSuggestions.map(result => {
          return (
            <MenuItem key={result.id} onClick={() => autoSuggestClick(result.title)}>{result.title}</MenuItem>
          );
        })
        }
      </Suggestion>
    </HomeContainer>
  );
}

export default Home;
