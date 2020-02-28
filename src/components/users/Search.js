import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    };

    onChange = e => this.setState({ [e.target.name] : e.target.value });

    onSubmit = e => {
        if (this.state.text === ''){
            this.props.setAlert('Please enter something', 'light');
        }else{
            e.preventDefault();
            this.props.searchUsers(this.state.text);
            this.setState({text: ''});
        }
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    render() {
        const {showClear, clearUsers} = this.props

        return (
            <div>
                <form onSubmit={this.onSubmit} className='form-text'>
                    <input type='text' name='text' onChange={this.onChange}
                    value={this.state.text} placeholder='Search Users...' />
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
}

export default Search
