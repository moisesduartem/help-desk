import React from 'react';
import { Redirect } from 'react-router';
import { api } from '../../services/api';

function Logout() {

    localStorage.clear();
    api.defaults.headers.Authorization = '';
    window.location.reload();

    return <Redirect to="/login" />;
}

export default Logout;