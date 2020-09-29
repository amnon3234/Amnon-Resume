import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MainProvider } from './context/main.context';
import { AuthProvider } from './context/auth.context';

ReactDOM.render(
    <AuthProvider>
        <MainProvider>
            <App />
        </MainProvider>
    </AuthProvider>,
    document.getElementById('root'));
