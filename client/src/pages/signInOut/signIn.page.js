import React, { useContext, useState } from 'react';
import { AuthContext } from './../../context/auth.context';
import {Redirect} from 'react-router-dom';

function SignIn() {
    const authContext = useContext(AuthContext);
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // fetch user credentials
        const userCredentials = {
            email: event.target.email.value,
            password: event.target.password.value
        };
        authContext.signIn(userCredentials, setMessage);
    }

    return(
        <div>
            {authContext.isAuthenticated() && <Redirect to="/dashboard" /> }
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Email' name='email' />
                <input type='password' placeholder='Password' name='password' />
                <input type='submit' />
                <p> {message} </p>
            </form>
        </div>
    );
}

export default SignIn;