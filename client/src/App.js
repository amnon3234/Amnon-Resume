import React, { useEffect } from 'react';
import Dashboard from './pages/dashboard/dashboard.page';
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import SignIn from './pages/signInOut/signIn.page';
import { FetchCSRF } from './APIConnection/mainAPI.connection';
import { AuthenticatedRoute } from './context/auth.context';
import './App.css';

function AppRoutes() {
  return(
    <Switch className='no-padding'>
      <Route path='/' exact component={SignIn} />
      <AuthenticatedRoute path='/dashboard'>
        <Dashboard />
      </AuthenticatedRoute>
    </Switch>
  );
}

function App() {
  
  useEffect(() => {
    FetchCSRF();
  },[]);

  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
