import React from 'react';
import OpcionProductos from './OpcionProductos';

const GestorProductos = () => {
    return (
        <div className="formulario">
            <OpcionProductos opcion="Alta producto"></OpcionProductos>
            <OpcionProductos opcion="Baja producto"></OpcionProductos>
            <OpcionProductos opcion="Modificacion producto"></OpcionProductos>
        </div>
    );
}

export default GestorProductos;