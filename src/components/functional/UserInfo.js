import React from 'react';
import Avatar from './Avatar';

function UserInfo(props) {
    return(
        <div className="UserInfo">
            <Avatar avatarUrl={props.user.avatar_url}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

export default UserInfo;