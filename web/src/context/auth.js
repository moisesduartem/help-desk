import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem('help_desk:user');
        const storagedToken = localStorage.getItem('help_desk:token');
    
        if (!!storagedUser && !!storagedToken) {
            setUser(JSON.parse(storagedUser));
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
    
    }, []);

    async function signIn(email, password) {
        
        const response = await api.post('/login', {
            email,
            password,
        });

        setUser(response.data.user);

        localStorage.setItem('help_desk:user', JSON.stringify(response.data.user));
        localStorage.setItem('help_desk:token', response.data.token);

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), signIn, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}