import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import './App.css'; 
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: []
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

  getUser = async username => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=\
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=\
    ${process.env.REACT_APP_GITHUB_CLIENT_SEC}`);
    
    this.setState({ user:res.data, loading:false });
  };

  getRepos = async username => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc/client_id=\
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=\
    ${process.env.REACT_APP_GITHUB_CLIENT_SEC}`);
    
    this.setState({ repos:res.data, loading:false });
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
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User {...props} 
                getUser={this.getUser}
                getRepos={this.getRepos} 
                repos={this.state.repos}
                user={this.state.user} 
                loading={this.state.loading} />
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  };
}

export default App;
