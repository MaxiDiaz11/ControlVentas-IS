import { AUTENTICAR_USUARIO, CERRAR_SESION } from "../../types"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case AUTENTICAR_USUARIO:
            return ({
                ...state,
                tipo: action.payload.tipo,
                nombreUsuario: action.payload.nombreUsuario,
                autorizado: action.payload.autorizado,
                id: action.payload.id
            })
        case CERRAR_SESION:
            return ({
                ...state,
                tipo: "",
                nombreUsuario: "",
                autorizado: false,
                id: null
            })
        default:
            return state;
    }
}
