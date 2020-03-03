import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({setAlert, searchUsers, showClear, clearUsers}) => {

    const [text, setText] = useState('');

    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        if (text === ''){
            setAlert('Please enter something', 'light');
        }else{
            e.preventDefault();
            searchUsers(text);
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
            {showClear &&
                <button onClick={clearUsers} className='btn btn-light btn-block'>
                Clear
                </button>
            }
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search
