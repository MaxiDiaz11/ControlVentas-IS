import React, { useReducer } from "react";
import productoContext from "./productosContext";
import ProductoReducer from "./productosReducer";
import {
  ALTA_PRODUCTO,
  GESTOR_PRODUCTOS,
  BAJA_PRODUCTOS,
  MODIFICACION_PRODUCTOS,
  CREAR_PRODUCTO,
  SET_MARCAS,
  SET_RUBROS
} from "../../types"

const ProductoState = (props) => {
  const initialState = {
    gestorProductos: false,
    productoNuevo: false,
    modificacion: false,
    baja: false,
    producto: {},
    marcas: [],
    rubros: [],
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

  const crearProducto = (producto) => {
    dispatch({
      type: CREAR_PRODUCTO,
      payload: producto
    })
  }

  const setMarcas = (marcas) => {
    dispatch({
      type: SET_MARCAS,
      payload: marcas
    })
  }
  const setRubros = (rubros) => {
    dispatch({
      type: SET_RUBROS,
      payload: rubros
    })
  }
  
  return (
    <productoContext.Provider
      value={{
        gestorProductos: state.gestorProductos,
        productoNuevo: state.productoNuevo,
        modificacion: state.modificacion,
        baja: state.baja,
        producto: state.producto,
        marcas: state.marcas,
        rubros: state.rubros,
        mostrarGestorProductos,
        mostrarAltaProducto,
        mostrarBajaProducto,
        mostrarModificacionProducto,
        crearProducto,
        setRubros,
        setMarcas
      }}
    >
      {props.children}
    </productoContext.Provider>
  );
};

export default ProductoState;
