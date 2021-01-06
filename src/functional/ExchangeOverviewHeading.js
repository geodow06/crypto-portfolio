import React from 'react';
import {Link} from 'react-router-dom';
function ExchangeOverviewHeading(props) {
    return(
        // Could add route property to exchangeInformation
       <Link to={`/${props.path}/exchange-overview`}>{props.name}</Link>
    );
}

export default ExchangeOverviewHeading;