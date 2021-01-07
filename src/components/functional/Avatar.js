import React from 'react';

function Avatar(props) {
    return(
        <img className="Avatar" src={props.avatarUrl} alt="..loading avatar"/>
    );
}

export default Avatar