import React from 'react';
import './user-card.scss'


const UserCard = (props) => {

    const { id, avatar, first_name, last_name, email, onClick } = props;
    
    return (
        <div className="user-card my-2" onClick={onClick}>
            <div id={id} className="d-flex justify-content-between align-items-center">
                <div><img  src={avatar} alt="avatar" width="100"  height="100" /></div>
                <div>{first_name}</div>
                <div>{last_name}</div>
                <div className="mx-2">{email}</div>
            </div>
        </div>)
}

export default UserCard;