import { Component } from 'react';
import './App.css';
import './Components/CardList/CardList.component'
import { CardList } from './Components/CardList/CardList.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input type='search' placeholder='Search Monsters' onChange={e => this.setstate({ searchField: e.target.value })} />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
