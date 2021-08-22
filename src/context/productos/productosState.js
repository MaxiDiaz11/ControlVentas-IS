import React, { useReducer } from "react";
import productoContext from "./productosContext";
import ProductoReducer from "./productosReducer";
import {ALTA_PRODUCTO , GESTOR_PRODUCTOS} from "../../types"


const ProductoState = (props) => {
  const initialState = {
    gestorProductos: false,
    productoNuevo: false
  };

  //crear dispatch
  const [state, dispatch] = useReducer(ProductoReducer, initialState);

  //CREAR LAS FUNCIONES
  const mostrarGestorProductos = () =>{
    dispatch({
      type: GESTOR_PRODUCTOS
    })
  }

  const mostrarAlta = () =>{
    dispatch({
      type: ALTA_PRODUCTO
    })
  }
  
  return (
    <productoContext.Provider
      value={{
        gestorProductos: state.gestorProductos,
        productoNuevo: state.productoNuevo,
        mostrarGestorProductos,
        mostrarAlta
      }}
    >
      {props.children}
    </productoContext.Provider>
  );
};

export default ProductoState;
