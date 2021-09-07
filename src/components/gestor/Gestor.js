import React, { useContext } from 'react';
import Barra from "../layout/Barra";
import SideBar from "../layout/SideBar";
import productoContext from '../../context/productos/productosContext';
import ventaContext from '../../context/venta/ventaContext';
import GestorProductos from './GestorProductos'
import AltaProducto from '../abmProductos/AltaProductos';
import BajaProducto from '../abmProductos/BajaProducto';
import ModificacionProducto from '../abmProductos/ModificacionProducto';
import Venta from '../venta/Venta';

import { Redirect } from "react-router-dom";

const Gestor = ({ authorized }) => {
    const producto = useContext(productoContext)
    const { gestorProductos, productoNuevo, baja, modificacion } = producto

    const venta = useContext(ventaContext)
    const { nuevaVenta } = venta

    const mostrarOpcion = () => {
        if (gestorProductos) return <GestorProductos></GestorProductos>
        if (productoNuevo) return <AltaProducto></AltaProducto>
        if (baja) return <BajaProducto></BajaProducto>
        if (modificacion) return <ModificacionProducto></ModificacionProducto>
        if (nuevaVenta) return <Venta></Venta>
    }

    if(!authorized){
        return <Redirect to='/'></Redirect>
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
