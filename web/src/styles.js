import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif !important;
        margin: 0;
        padding: 0;    
    }

    body {
        height: 100vh;
    }
`;