import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function Header() {
    
    return (
        <Container>
            <span>Moisés Mariano</span>
            <Link to="/">App Help Desk</Link>
            <Link to="/logout">Sair</Link>
        </Container>
    );
}

export default Header;