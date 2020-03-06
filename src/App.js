import React, {Fragment, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import './App.css'; 
import axios from 'axios';
import GithubState from './context/GithubState';

const App = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert2] = useState(null);
  const [repos, setRepos] = useState([]);

  const getUser = async username => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=\
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=\
    ${process.env.REACT_APP_GITHUB_CLIENT_SEC}`);
    
    setUser(res.data);
    setLoading(false);
  };

  const getRepos = async username => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc/client_id=\
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=\
    ${process.env.REACT_APP_GITHUB_CLIENT_SEC}`);
    
    setRepos(res.data);
    setLoading(false);
  };

  const setAlert = (msg, level) => {
    setAlert2({msg, level});
  };

  return(
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar title='Github Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render = {props => (
                <Fragment>
                  <Search setAlert={setAlert} />
                  <Users />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User {...props} 
                getUser={getUser}
                getRepos={getRepos} 
                repos={repos}
                user={user} 
                loading={loading} />
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
