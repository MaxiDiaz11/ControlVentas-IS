import React from "react";
import { Link } from "react-router-dom";

const Barra = () => {
    // const user = useContext(usuarioContext)
    // const { usuario } = user
    
    return (
        <header className="app-header">
            <p className="nombre-usuario">
                Hola <span>{window.sessionStorage.getItem('nombre')}</span>
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
