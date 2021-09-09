import React, { useContext } from "react";
import usuarioContext from '../../context/usuarios/usuarioContext';
import Opcion from './Opcion';
import axios from 'axios'
import productoContext from '../../context/productos/productosContext';

const ListadoOpciones = () => {

    const user = useContext(usuarioContext)
    const { tipo } = user
    const productoState = useContext(productoContext);
    const { setMarcas, setRubros } = productoState;

    // useEffect(() => {
    //     getMarcas()
    //     getRubros()
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    //MARCAS Y RUBROS
    const getMarcas = async () => {
        const response = await axios.get('/api/Marcas/GetMarcas')
        setMarcas(response.data.marcas)
    }
    const getRubros = async () => {
        const response = await axios.get('/api/Rubros/GetRubros')
        setRubros(response.data.rubros)
    }

    const mostrarMenu = () => {
        getMarcas();
        getRubros();
        if (tipo === "vendedor") return <Opcion opcion="Realizar venta" tipo="realizarVenta"></Opcion>
        if (tipo === "administrativo") return <Opcion opcion="Gestionar producto" tipo="gestorProducto"></Opcion>
    }

    return (
        <div>
            {mostrarMenu()}
        </div>
    );
}

export default ListadoOpciones;