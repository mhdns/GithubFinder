import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/githubContext';

const Search = ({setAlert}) => {
    const githubContext = useContext(GithubContext)
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

Search.propTypes = {
    setAlert: PropTypes.func.isRequired
};

export default Search
