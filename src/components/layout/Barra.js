import React, { useContext } from "react";
import usuarioContext from "../../context/usuarios/usuarioContext";
import { Link } from "react-router-dom";

const Barra = () => {
    const user = useContext(usuarioContext)
    const { nombreUsuario, cerrarSesion } = user

    return (
        <header className="app-header">
            <p className="nombre-usuario">
                Hola <span>{nombreUsuario}</span>
            </p>
            <nav className="nav-principal">
                <Link to={"/"} onClick={() => cerrarSesion()}>
                    Cerrar Sesión
                </Link>
            </nav>
        </header>
    );
};

export default Barra;
