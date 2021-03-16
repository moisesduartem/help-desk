import React, { useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useAuth } from '../context/auth';
import AppRoutes from './app';
import AuthRoutes from './auth';

function Routes() {

    const { signed } = useAuth();

    return (
        <BrowserRouter>
            <Switch>
                { signed ? <AppRoutes /> : <AuthRoutes /> }
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;