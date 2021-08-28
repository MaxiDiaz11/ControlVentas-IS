import React, { useReducer } from "react";
import ventaContext from "./ventaContext";
import VentaReducer from "./ventaReducer";
import {
    MOSTRAR_VENTA
} from "../../types"

const VentaState = (props) => {
    const initialState = {
        nuevaVenta: false
    };

    //crear dispatch
    const [state, dispatch] = useReducer(VentaReducer, initialState);

    //CREAR LAS FUNCIONES
    const mostrarVenta = () => {
        dispatch({
            type: MOSTRAR_VENTA
        })
    }

    return (
        <ventaContext.Provider
            value={{
                nuevaVenta: state.nuevaVenta,
                mostrarVenta
            }}
        >
            {props.children}
        </ventaContext.Provider>
    );
};

export default VentaState;
