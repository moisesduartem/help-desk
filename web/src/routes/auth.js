import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router';
import Login from '../pages/Login';

function AuthRoutes() {

    return (
        <Fragment>
            <Route exact path="*">
                <Redirect to="/login" />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
        </Fragment>
    );
}

export default AuthRoutes;