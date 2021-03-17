import React from 'react';
import { Link } from 'react-router-dom';
import { List } from './styles';
import { FaPen, FaSearch } from 'react-icons/fa';

function Home() {

    return (
        <List>
            <Link to="#">
                <FaPen />
                <span>Registrar Chamados</span>
                <div></div>
            </Link>
            <Link to="#">
                <FaSearch />
                <span>Consultar Chamados</span>
                <div></div>
            </Link>
        </List>
    );
}

export default Home;