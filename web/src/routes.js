import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route path="*">
                    <h1>404</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;