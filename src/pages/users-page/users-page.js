import React from 'react';
import useApi from '../../hooks/use-api';
import UserCard from '../../components/UserCard';
import { useHistory } from 'react-router';

const UsersPage = () => {

    const history = useHistory();

    const [users] = useApi('users', { dependencies: [], defaultValue: [] });

    const handleCardClick = (id) => {
        history.push(`/users/${id}`)
    }

    return (<div className="m-5">
        <h1> Users List </h1>

        <div className="mx-5">{users.map(user => <UserCard key={user.id}  {...user} onClick={() => handleCardClick(user.id)}  />) }</div>

    </div>)
}

export default UsersPage;