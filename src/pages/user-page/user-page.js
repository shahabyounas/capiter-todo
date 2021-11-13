import React from 'react';
import { useParams } from 'react-router';
import useApi from '../../hooks/use-api';
import './user-page.scss'

const UserPage = () => {

    const { slug  } = useParams();

    const [user] = useApi(`users?id=${slug}`, { dependencies: [], defaultValue: [] });

    return (<div className="m-5">
        <h1> User Detail </h1>

        {user && (
                  <div className="user-page p-5">
                    <div><img  src={user.avatar} alt="avatar" width="100"  height="100" /></div>
                    <div>{user.first_name}</div>
                    <div>{user.last_name}</div>
                    <div>{user.email}</div>
                </div>
        )}

    </div>)
}

export default UserPage;