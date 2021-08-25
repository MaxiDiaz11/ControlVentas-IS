import React, { useReducer } from "react";
import productoContext from "./productosContext";
import ProductoReducer from "./productosReducer";
import {
  ALTA_PRODUCTO,
  GESTOR_PRODUCTOS,
  BAJA_PRODUCTOS,
  MODIFICACION_PRODUCTOS
} from "../../types"


const ProductoState = (props) => {
  const initialState = {
    gestorProductos: false,
    productoNuevo: false,
    modificacion: false,
    baja: false
  };

  //crear dispatch
  const [state, dispatch] = useReducer(ProductoReducer, initialState);

  //CREAR LAS FUNCIONES
  const mostrarGestorProductos = () => {
    dispatch({
      type: GESTOR_PRODUCTOS
    })
  }

  const mostrarAltaProducto = () => {
    dispatch({
      type: ALTA_PRODUCTO
    })
  }

  const mostrarBajaProducto = () => {
    dispatch({
      type: BAJA_PRODUCTOS
    })
  }

  const mostrarModificacionProducto = () => {
    dispatch({
      type: MODIFICACION_PRODUCTOS
    })
  }

  return (
    <productoContext.Provider
      value={{
        gestorProductos: state.gestorProductos,
        productoNuevo: state.productoNuevo,
        modificacion: state.modificacion,
        baja: state.baja,
        mostrarGestorProductos,
        mostrarAltaProducto,
        mostrarBajaProducto,
        mostrarModificacionProducto
      }}
    >
      {props.children}
    </productoContext.Provider>
  );
};

export default ProductoState;
