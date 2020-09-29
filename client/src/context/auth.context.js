import React, {createContext, useContext, useEffect, useState} from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import {Authenticate, SignUpAndAuthenticate} from './../APIConnection/mainAPI.connection';

const AuthContext = createContext();
const { Provider } = AuthContext;

function AuthProvider({children}) {
    const history = useHistory();
    const expiredAt = localStorage.getItem('expiredAt');
    const userInformation = localStorage.getItem('userInformation');     
    const authenticated = new Date().getTime() / 1000 < expiredAt;
    const [user, setUser] = useState({ authenticated, message:'', expiredAt, userInformation });
        
    //handle authentication
    const handleAuthentication = () => {
        if(!user.userInformation && user.authenticated === true){
            localStorage.setItem('expiredAt', user.expiredAt);
            localStorage.setItem('userInformation', JSON.stringify(user.information));
        }
    };
    
    //sign-up
    const signUp = ( userInformation) => {
        SignUpAndAuthenticate(userInformation, setUser);
    };

    // sign-in
    const signIn = (userCredentials) => {
        Authenticate(userCredentials, setUser);
    };

    useEffect( () => handleAuthentication() ,[user]);

    // sign-out
    const signOut = () => {
        localStorage.removeItem('expiredAt');
        localStorage.removeItem('userInformation');
        setUser({});
        history.push('/sign-in');
    };

    // Check from admin privileges
    const isAdmin = () => JSON.parse(user.userInformation).role === 'ADMIN';

    // Check if authenticated
    const isAuthenticated = () => user.expiredAt && new Date().getTime() / 1000 < user.expiredAt;

    return(
        <Provider value={
            {
                user:[user, setUser],
                signUp:signUp,
                signIn:signIn,
                signOut:signOut,
                isAdmin:isAdmin,
                isAuthenticated:isAuthenticated
            }
        }>
            {children}
        </Provider>
    );
}

// users only routes
function AuthenticatedRoute({ children, ...rest }) {
    const authContext = useContext(AuthContext);
    return (
        <Route {...rest} render={ () =>
            authContext.isAuthenticated() ?
                children : <Redirect to='/' /> 
        } />
    );
}

// admin only routes
function AdminRoute({ children, ...rest }) {
    const authContext = useContext(AuthContext);
    console.log(authContext.isAdmin());
    console.log(authContext.isAuthenticated());
    return (
        <Route {...rest} render={ () => 
            authContext.isAuthenticated() && authContext.isAdmin() ?
                children : <Redirect to='/' />
        } />
    );
}

export { AuthContext, AuthProvider, AuthenticatedRoute, AdminRoute};