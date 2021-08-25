import React, { useContext } from "react";
import { Link } from "react-router-dom";
import usuarioContext from '../../context/usuarios/usuarioContext';

const Barra = () => {
    const user = useContext(usuarioContext)
    const { usuario } = user

    return (
        <header className="app-header">
            <p className="nombre-usuario">
                Hola <span>{usuario}</span>
            </p>
            <nav className="nav-principal">
                <Link to={"/"}>
                    Cerrar Sesión
                </Link>
            </nav>
        </header>
    );
};

export default Barra;
