import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router';

function AppRoutes() {

    return (
        <Fragment>
            <Route exact path="/">
                <h1>Welcome!</h1>
            </Route>
            <Route path="*">
                <h1>404</h1>
            </Route>
        </Fragment>
    );
}

export default AppRoutes;