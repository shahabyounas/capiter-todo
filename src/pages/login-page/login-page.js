import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useAuth } from '../../hooks/use-auth';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router';


const LoginPage = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [errMsg, setErrMsg] = useState('');
    const history = useHistory(); 

    const auth = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await auth.logIn(user);

        if (auth.user) {
            history.push('/users')
            if (errMsg) {
                setErrMsg('');
            }
        } else {
            setErrMsg('Please enter valid username or password')
        }
    };



    return (
        <Box 
            className="my-5"
            component="form"
            autoComplete="off"
            onSubmit={(e) => handleSubmit(e)}
        >

            <div>
                <TextField 
                    id="email" 
                    label="Email" 
                    variant="outlined"  
                    type="email"
                    onChange={(e) => setUser({ ...user, ...{ email: e.target.value } })}
                    value={user.email}
                    />
            </div>

            <div className="my-3">
                <TextField 
                    id="password" 
                    label="Password" 
                    variant="outlined"  
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, ...{ password: e.target.value } })}
                /> 
            </div>

            <div style={{ color: 'red' }}>{errMsg}</div>

            <div className="my-2"> 
                <Button type="submit" > Login </Button>
            </div>

        </Box>)
}

export default LoginPage;