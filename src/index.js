// Import
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBMuRx2uE40WhHY9anydvmGArzFwe5qP_k';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos:[] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({ videos: data });
    });

  }
  render() {
    return (<div>
      NOW WITH ARRAY
      <SearchBar></SearchBar>
      <VideoDetail video={this.state.videos[0]}/>
      <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

// Take this components generated HTML and insert it into the DOM
const c = document.querySelector('.container');
ReactDOM.render(<App></App>, c);
