import React from 'react';
import useApi from '../../hooks/use-api';
import UserCard from '../../components/UserCard';

const UsersPage = () => {


    const [users] = useApi('users', { dependencies: [], defaultValue: [] });

    return (<div className="m-5">
        <h1> Users List </h1>

        <div className="mx-5">{users.map(user => <UserCard key={user.id}  {...user}  />) }</div>

    </div>)
}

export default UsersPage;