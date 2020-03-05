// All you actions are done here
import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_REPOS,
    GET_USER,
    SET_LOADING,
    CLEAR_USERS,
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [ state, dispatch ] = useReducer(githubReducer, initialState)

    // Search Users
    const searchUsers = async text => {
        setLoading();
    
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=\
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=\
        ${process.env.REACT_APP_GITHUB_CLIENT_SEC}`);
    
        dispatch({
            type:SEARCH_USERS,
            payload: res.data.items 
        });
      };
    // Get Users

    // Get Repos

    // Clear Users

    // Set Loading
      const setLoading = () => dispatch({type: SET_LOADING});

    return <githubContext.Provider
    value={{ 
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers
    }}
    >
        { props.children }
    </githubContext.Provider>
}

export default GithubState;