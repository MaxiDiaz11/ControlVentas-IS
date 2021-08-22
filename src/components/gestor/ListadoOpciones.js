import React from 'react';
import Opcion from './Opcion';

const ListadoOpciones = () => {
    return (
        <div className="mt-1">
            <Opcion opcion="Gestionar producto"></Opcion>
            <Opcion opcion="Realizar venta"></Opcion>
        </div>
    );
}

export default ListadoOpciones;