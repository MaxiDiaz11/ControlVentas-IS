import React, { useContext } from 'react';
import productoContext from '../../context/productos/productosContext';

const Opcion = ({ opcion, tipo }) => {
  const producto = useContext(productoContext)
  const { mostrarGestorProductos } = producto

  const mostrarGestor = () => {
    if(tipo ==="gestorProducto"){
      mostrarGestorProductos()
    }
  }
  
  return (
    <button
      type="button"
      className="btn btn-block btn-primario"
      onClick={() => mostrarGestor()}
    >
      {opcion}
    </button>
  );
}

export default Opcion;