import React, { Component } from 'react';
import Cards from './Cards';
import { robots } from './robots';
import SearchBox from './SearchBox';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: '',
    };
  }

  render() {
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <div className='tc'>
        <h1>RoboFriends App</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Cards robots={filteredRobots} />
      </div>
    );
  }

  onSearchChange = event => this.setState({ searchField: event.target.value });
}