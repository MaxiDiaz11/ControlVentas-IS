// import React, { useContext } from 'react';
import React, { useContext } from 'react';
import productoContext from '../../context/productos/productosContext';

const OpcionProductos = ({ opcion, tipo }) => {
  
  const producto = useContext(productoContext)
  const { mostrarAltaProducto, mostrarBajaProducto, mostrarModificacionProducto} = producto

  const mostrarOpcionProducto = () => {
    if(tipo === "alta") mostrarAltaProducto();  
    if(tipo === "baja") mostrarBajaProducto();  
    if(tipo === "modificacion") mostrarModificacionProducto();  
  }

  return (
    <button
      type="button"
      className="btn btn-block btn-primario"
      onClick={() => mostrarOpcionProducto()}
    >
      {opcion}
    </button>
  );
}

export default OpcionProductos;