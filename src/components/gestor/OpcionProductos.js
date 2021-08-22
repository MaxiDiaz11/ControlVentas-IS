// import React, { useContext } from 'react';
import React, {useContext} from 'react';
import productoContext from '../../context/productos/productosContext';

const OpcionProductos = ({ opcion }) => {
  const producto = useContext(productoContext)
  const { gestorProductos } = producto

  const mostrarGestorProductos = () => {
    gestorProductos()
  }
  return (
    <button
      type="button"
      className="btn btn-block btn-primario"
      onClick={()=>mostrarGestorProductos()}
    >
      {opcion}
    </button>
  );
}

export default OpcionProductos;