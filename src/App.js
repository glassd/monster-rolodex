import { Component } from 'react';
import './App.css';
import './Components/CardList/CardList.component'
import { CardList } from './Components/CardList/CardList.component';
import { SearchBox } from './Components/SearchBox/SearchBox.component';

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

  handleChange = (e) => (
    this.setState({ searchField: e.target.value })
  )

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeHolder='Search monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
