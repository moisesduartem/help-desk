import React, { useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useAuth } from '../context/auth';
import AuthRoutes from './auth';

function Routes() {

    const context = useAuth();
    
    useEffect(() => {
        console.log(context);
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <AuthRoutes />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;