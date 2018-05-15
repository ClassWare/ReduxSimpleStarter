// Import
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAE0-T3jDOKTmvQmPUbQIfJHDeP41zX2RU';

const App = () => {
  return (<div>
    One
    <SearchBar></SearchBar>
    Two
    <SearchBar></SearchBar>
    </div>
  )
}

// Take this components generated HTML and insert it into the DOM
const c = document.querySelector('.container');
ReactDOM.render(<App></App>, c);
