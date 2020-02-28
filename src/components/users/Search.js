import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    };

    onChange = e => this.setState({ [e.target.name] : e.target.value });

    onSubmit = e => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type='text' name='text' onChange={this.onChange}
                    value={this.state.text} placeholder='Search Users...' />
                    <input type='submit' value='Search' className='btn btn-dark btn-block' />
                </form>
            </div>
        )
    }
}

export default Search
