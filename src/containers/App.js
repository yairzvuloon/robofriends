import React, { Component } from 'react';
import Cards from '../components/Cards';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    this.setState({ robots: users });
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <Cards robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }

  onSearchChange = event => this.setState({ searchField: event.target.value });
}
