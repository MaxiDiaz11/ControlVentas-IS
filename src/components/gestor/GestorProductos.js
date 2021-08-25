import React from 'react';
import OpcionProductos from './OpcionProductos';

const GestorProductos = () => {
    return (
        <div className="formulario">
            <OpcionProductos opcion="Alta producto" tipo="alta"></OpcionProductos>
            <OpcionProductos opcion="Modificacion producto" tipo="modificacion"></OpcionProductos>
            <OpcionProductos opcion="Baja producto" tipo="baja"></OpcionProductos>
        </div>
    );
}

export default GestorProductos;