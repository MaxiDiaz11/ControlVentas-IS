import React, { useContext } from 'react';
import Barra from "../layout/Barra";
import SideBar from "../layout/SideBar";
import productoContext from '../../context/productos/productosContext';
import GestorProductos from './GestorProductos'
import AltaProducto from '../abmProductos/AltaProductos';
import BajaProducto from '../abmProductos/BajaProducto';
import ModificacionProducto from '../abmProductos/ModificacionProducto';

const Gestor = () => {
    const producto = useContext(productoContext)
    const { gestorProductos, productoNuevo, baja, modificacion } = producto

    const mostrarOpcion = () => {
        if (gestorProductos) return <GestorProductos></GestorProductos>
        if (productoNuevo) return <AltaProducto></AltaProducto>
        if (baja) return <BajaProducto></BajaProducto>
        if (modificacion) return <ModificacionProducto></ModificacionProducto>
    }

    return (
        <div className="contenedor-app">
            <SideBar></SideBar>
            <div className="seccion-principal">
                <Barra></Barra>
                <main>
                    <div className="contenedor-tareas">
                        {mostrarOpcion()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Gestor;
