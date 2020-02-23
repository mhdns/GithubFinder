import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render () {
    const name = 'Muhammad Anas';
    const foo = () => 'Welcome to React!';
    const loading = true;
    const testing = true;

    return(
      <div className="App">
      <h1> Hello {name}</h1>
      <h2> {foo()} </h2>
      {loading ? <h4>Using a conditionals! It is true</h4> : <h4>Using a conditionals! It is false</h4>  }
      {testing && <h4>Second type of conditional!</h4>}
      </div>
    );
  }
}

export default App;
