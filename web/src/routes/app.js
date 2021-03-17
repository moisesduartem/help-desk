import React from 'react';
import { Redirect, Route } from 'react-router';
import Header from '../components/Header';
import Home from '../pages/Home';
import Logout from '../pages/Logout';
import { Content, Page } from './styles';

function AppRoutes() {

    return (
        <Page>
            <Header />
            <Content>
                <Route exact path="/login">
                    <Redirect to="/" />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/logout">
                    <Logout />
                </Route>
            </Content>
        </Page>
    );
}

export default AppRoutes;