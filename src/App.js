import React, {Component, Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
  render () {
    return(
      <Fragment>
        <div className="navbar bg-primary">
          <Navbar title='Github Finder' icon='fab fa-github' />
        </div>
        <UserItem />
      </Fragment>
    );
  }
}

export default App;
