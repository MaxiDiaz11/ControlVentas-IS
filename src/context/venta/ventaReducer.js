import {
    MOSTRAR_VENTA
} from "../../types"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case MOSTRAR_VENTA:
            return {
                ...state,
                nuevaVenta: true
            }
        default:
            return state;
    }
}