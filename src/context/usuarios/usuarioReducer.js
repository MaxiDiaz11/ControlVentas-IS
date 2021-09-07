import { AUTENTICAR_USUARIO } from "../../types"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case AUTENTICAR_USUARIO:
            return ({
                ...state,
                tipo: action.payload.tipo,
                usuario: action.payload.nombre,
                autenticado: action.payload.autenticado,
                id: action.payload.id
            })
        default:
            return state;
    }
}