import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import './App.css'; 
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // async componentDidMount () {

  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://api.github.com/users?client_id=\
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=\
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SEC}`);

  //   this.setState({ users:res.data, loading:false });
  // };

  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=\
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=\
    ${process.env.REACT_APP_GITHUB_CLIENT_SEC}`);
    
    this.setState({ users:res.data.items, loading:false });
  };

  clearUsers = () => {
    this.setState({users:[], loading:false})
  };

  setAlert = (msg, level) => {
      this.setState({alert: {msg, level}})
  };

  render () {
    return(
      <Router>
        <div className='App'>
          <Navbar title='Github Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render = {props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
                  showClear = {this.state.users.length > 0 ? true : false} 
                  setAlert={this.setAlert} />
                  <Users loading={ this.state.loading } users={ this.state.users }/>
                </Fragment>
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  };
}

export default App;
