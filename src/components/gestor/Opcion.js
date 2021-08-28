import React, { useContext } from 'react';
import productoContext from '../../context/productos/productosContext';
import ventaContext from '../../context/venta/ventaContext';

const Opcion = ({ opcion, tipo }) => {

  const venta = useContext(ventaContext)
  const { mostrarVenta } = venta

  const producto = useContext(productoContext)
  const { mostrarGestorProductos } = producto

  const mostrarGestor = () => {
    if (tipo === "gestorProducto") {
      mostrarGestorProductos()
    }
    if (tipo === "realizarVenta") {
      mostrarVenta()
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