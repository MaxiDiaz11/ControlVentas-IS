import { ALTA_PRODUCTO, GESTOR_PRODUCTOS, BAJA_PRODUCTOS, MODIFICACION_PRODUCTOS } from "../../types"

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
                productoNuevo: true,
                gestorProductos: false
            }
        case BAJA_PRODUCTOS:
            return {
                ...state,
                productoNuevo: false,
                gestorProductos: false,
                baja: true,
                modificacion: false
            }
        case MODIFICACION_PRODUCTOS:
            return {
                ...state,
                productoNuevo: false,
                gestorProductos: false,
                baja: false,
                modificacion: true
            }
        default:
            return state;
    }
}