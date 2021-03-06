import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext
    const [text, setText] = useState('');

    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        if (text === ''){
            setAlert('Please enter something', 'light');
        }else{
            e.preventDefault();
            githubContext.searchUsers(text);
            setText('');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className='form-text'>
                <input type='text' name='text' onChange={onChange}
                value={text} placeholder='Search Users...' />
                <input type='submit' value='Search' className='btn btn-dark btn-block' />
            </form>
            {githubContext.users.length > 0 &&
                <button onClick={githubContext.clearUsers} className='btn btn-light btn-block'>
                Clear
                </button>
            }
        </div>
    )
}

export default Search
