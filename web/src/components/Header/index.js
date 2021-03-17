import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useAuth } from '../../context/auth';

function Header() {

    const { user } = useAuth();

    return (
        <Container>
            <span>{user.name}</span>
            <Link to="/">App Help Desk</Link>
            <Link to="/logout">Sair</Link>
        </Container>
    );
}

export default Header;