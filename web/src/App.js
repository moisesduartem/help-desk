import React from 'react';
import { GlobalStyles } from './styles';
import Routes from './routes';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
}

export default App;
