// import React from 'react';
import React, {Component} from 'react';

// ES6 equivalent using fat arrow function
class SearchBar extends Component {
  // Override default constructor
  constructor(props) {
    super(props);
    this.state = {term:'initial value'}; // Initialise search term
  }

  // Define render method
  render() {
    //                                    event is single parm into fat arrow function
    //return <span>Search <input onChange={(event) => console.log(e.target.value)} /></span>;
    //                                    because it is single the () can ne omitted
    // return <span>Search <input onChange={event => console.log("EVE:" + event.target.value)} /></span>;
    return (
      <div>
      <span>Search
        <input
          value={this.state.term}
          onChange={ event => this.setState( {term: event.target.value} ) }
        />
      </span>
      <br />Value of input: {this.state.term}
      </div>
    )
  }
}

export default SearchBar;
