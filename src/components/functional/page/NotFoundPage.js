import React from 'react';
import PageNotFound from '../../../assets/images/PageNotFound.jpg';
import {Link} from 'react-router-dom';
function NotFoundPage() {
    return (
        <div>
            <img src={PageNotFound} alt='...Loading' />
            <p style={{textAlign:"center"}}>
                <Link to="/">Go to Home </Link>
            </p>
        </div>
    );
}

export default NotFoundPage;