import React from 'react';
import {Link} from 'react-router-dom';

function LinkExchangeOption(props) {
    return (
        <div>Would you like to Link your {props} Account? <Link to='/'>Click here</Link></div>
    );
}

export default LinkExchangeOption;