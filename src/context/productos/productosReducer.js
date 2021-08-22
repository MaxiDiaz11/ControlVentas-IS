import { ALTA_PRODUCTO, GESTOR_PRODUCTOS } from "../../types"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case GESTOR_PRODUCTOS:
            return {
                ...state,
                gestorProductos: true
            }
        case ALTA_PRODUCTO:
            return {
                ...state,
                productoNuevo: true
            }
        default:
            return state;
    }
}