import React, { useReducer } from "react";
import usuarioContext from "./usuarioContext";
import UsuarioReducer from "./usuarioReducer";
import {
    CERRAR_SESION
} from "../../types"

const UsuarioState = (props) => {
    const initialState = {
        tipo: "administrador",
        usuario: "Maxi",
        autenticado: "",
    };

    //crear dispatch
    const [state, dispatch] = useReducer(UsuarioReducer, initialState);

    //CREAR LAS FUNCIONES
    const cerrarSesion = () =>{
        dispatch({
            type: CERRAR_SESION
        })
    }

    return (
        <usuarioContext.Provider
            value={{
                tipo: state.tipo,
                usuario: state.usuario,
                autenticado: state.autenticado,
                cerrarSesion
            }}
        >
            {props.children}
        </usuarioContext.Provider>
    );
};

export default UsuarioState;
