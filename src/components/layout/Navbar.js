import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={props.icon} />{props.title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link> {/* Using Link instead of 'a' tag preserves the state so that the searched items won't change if you come back to the page */}
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
