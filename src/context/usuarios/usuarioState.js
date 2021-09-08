import React, { useReducer } from "react";
import usuarioContext from "./usuarioContext";
import UsuarioReducer from "./usuarioReducer";
import {
    CERRAR_SESION,
    AUTENTICAR_USUARIO
} from "../../types"

const UsuarioState = (props) => {
    const initialState = {
        id: null,
        tipo: "",
        nombreUsuario: "",
        autorizado: false,
    };

    //crear dispatch
    const [state, dispatch] = useReducer(UsuarioReducer, initialState);

    //CREAR LAS FUNCIONES
    const cerrarSesion = () =>{
        dispatch({
            type: CERRAR_SESION
        })
    }

    //autenticar
    const autenticarUsuario = (usuario) =>{
        dispatch({
            type: AUTENTICAR_USUARIO,
            payload: usuario
        })
    }

    return (
        <usuarioContext.Provider
            value={{
                tipo: state.tipo,
                nombreUsuario: state.nombreUsuario,
                autorizado: state.autorizado,
                cerrarSesion,
                autenticarUsuario
            }}
        >
            {props.children}
        </usuarioContext.Provider>
    );
};

export default UsuarioState;
