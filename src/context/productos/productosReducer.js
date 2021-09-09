import {
    ALTA_PRODUCTO,
    GESTOR_PRODUCTOS,
    BAJA_PRODUCTOS,
    MODIFICACION_PRODUCTOS,
    SET_MARCAS,
    SET_RUBROS
} from "../../types"

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
        case SET_MARCAS:
            return {
                ...state,
                marcas: action.payload
            }
        case SET_RUBROS: {
            return {
                ...state,
                rubros: action.payload
            }
        }
        default:
            return state;
    }
}