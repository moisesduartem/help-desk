import React, { createContext, useContext } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ signed: true }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}