import React, { useContext } from "react";
import usuarioContext from '../../context/usuarios/usuarioContext';
import Opcion from './Opcion';

const ListadoOpciones = () => {
    const user = useContext(usuarioContext)
    const { tipo } = user

    const mostrarMenu = () => {
        if (window.sessionStorage.getItem('tipo') === "vendedor") return <Opcion opcion="Realizar venta" tipo="realizarVenta"></Opcion>
        if (window.sessionStorage.getItem('tipo')  === "administrativo") return <Opcion opcion="Gestionar producto" tipo="gestorProducto"></Opcion>
    }
    
    return (
        <div>
            {mostrarMenu()}
        </div>
    );
}

export default ListadoOpciones;