import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
        --dark: #161616;
        --lighter-info: #1e6669;
        --darker-info: #184647;
        --info-hover: #fcffff;
        --gray: #c5c5c5;
        --light: #ededed;
        --white: #ffffff;
        --blue: #2177ff;
    }

    * {
        font-family: 'Montserrat', sans-serif !important;
        margin: 0;
        padding: 0;    
    }

    &, body, html, #root {
        height: 100%;
    }
`;

export const Button = styled.button`
    height: 2.3rem;
    width: 100%;
    font-weight: 500;
    margin: ${props => props?.margin};
    color: white;
    background-color: var(--lighter-info);
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        transition: all .3s ease-in-out;
        background-color: var(--darker-info);
    }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 0.5rem;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 10px;
    font-weight: 500;
    border-radius: 2px;
    border: none;
    outline: none;
`;