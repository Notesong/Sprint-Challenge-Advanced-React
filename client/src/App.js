import React from 'react';
import './App.css';
import Players from './components/Players';
import AppHeader from './components/AppHeader';

class App extends React.Component {
  state = { 
    playerData: []
  }

  componentDidMount() {
    // fetch data from server after page renders
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(worldCupPlayerData => {
        this.setState({...this.state, playerData: worldCupPlayerData})
        console.log(this.state.playerData);
      })
      .catch(err => console.log("Error on fetch: ", err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader />
        </header>
        <section>
          <Players playerData={this.state.playerData} />
        </section>
      </div>
    );    
  }

}

export default App;
