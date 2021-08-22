import React, { useContext } from 'react';
import Barra from "../layout/Barra";
import SideBar from "../layout/SideBar";
import productoContext from '../../context/productos/productosContext';
import GestorProductos from './GestorProductos'

const Gestor = () => {
    const producto = useContext(productoContext)
    const { gestorProductos } = producto

    return (
        <div className="contenedor-app">
            <SideBar></SideBar>
            <div className="seccion-principal">
                <Barra></Barra>
                <main>
                    <div className="contenedor-tareas">
                        {gestorProductos ? <GestorProductos></GestorProductos> : null}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Gestor;
