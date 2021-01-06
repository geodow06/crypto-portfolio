import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function NavBar() {

    return (
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <Link className="navbar-brand" to="/">Crypto</Link>
            <div className='navbar-right'>
                <Link to="/">Home</Link>
            </div>
        </nav>
    );

}

export default withRouter(NavBar);