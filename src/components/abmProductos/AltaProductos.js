import React, { useState, useContext } from 'react';
import productoContext from '../../context/productos/productosContext';

const AltaProducto = () => {

    // useEffect(() => {
    //     getMarcas()
    //     getRubros()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    const productoState = useContext(productoContext);
    let { crearProducto, marcas, rubros} = productoState;

    // //MARCAS Y RUBROS
    // const getMarcas = async () => {
    //     const response = await axios.get('/api/Marcas/GetMarcas')
    //     setMarcas(response.data.marcas)
    // }
    // const getRubros = async () => {
    //     const response = await axios.get('/api/Rubros/GetRubros')
    //     setRubros(response.data.rubros)
    // }

    const [marcaSeleccionada, setMarcaSeleccionada] = useState(0);
    const [rubroSeleccionada, setRubroSeleccionada] = useState(0);

    //VALORES DE COSTRO Y GANANCIAS
    const [valores, setValores] = useState({
        costo: 0,
        margenGanancia: 0,
    })
    const { costo, margenGanancia } = valores

    //PRODUCTO
    const [producto, setProducto] = useState({
        codigo: "",
        descripcion: "",
        precioDeVenta: 0,
        marca: "",
        rubro: ""
    })

    const onChangeProducto = (e) => {
        setValores({
            ...valores,
            [e.target.name]: Number(e.target.value)
        })

        let netoAgravado = costo + costo * margenGanancia
        let iva = netoAgravado * 0.21

        setProducto({
            ...producto,
            [e.target.name]: e.target.value,
            precioDeVenta: ((netoAgravado + iva).toFixed(2)),
            marca: marcaSeleccionada,
            rubro: rubroSeleccionada
        })
    };

    const crearNuevoProducto = () => {
        crearProducto(producto)
    }

    // const CrearProducto = async () => {
    //     let body = {
    //         CodigoProducto: codigo,
    //         Descripcion: descripcion,
    //         Costo: costo,
    //         MargenGanancia: margenGanancia,
    //         IdMarca: Number(marcaSelected),
    //         IdRubro: Number(rubroSelected)
    //     }
    //     const response = await axios.post('/api/Productos/CreateProducto', body)
    //     console.log(response)
    // }

    return (
        <div>
            <h1>Alta producto</h1>
            <form>
                <div className="select-text campo-form ">
                    <label htmlFor="codigo">Codigo del producto</label>
                    <input
                        type="text"
                        name="codigo"
                        id="codigo"
                        placeholder="Ingrese el codigo"
                        onChange={onChangeProducto}
                    />
                </div>
                <div className="select-text campo-form ">
                    <label htmlFor="nombre">Descripcion del producto</label>
                    <input
                        type="text"
                        name="descripcion"
                        id="descripcion"
                        placeholder="Ingrese la descripcion"
                        onChange={onChangeProducto}
                    />
                </div>

                <div className="campo-form select-text">

                    <label htmlFor="rubro" className="margenes select">Seleccione el rubro </label>
                    <select
                        className="select-text select"
                        name="rubro"
                        onChange={(e) => {
                            setRubroSeleccionada(e.target.value);
                        }}
                        placeholder="Rubro">
                        <option value={null}>Rubro</option>
                        {rubros.map(m => {
                            return <option value={m.id} key={m.id}>{m.descripcion}</option>
                        })}
                    </select>

                    <label htmlFor="nombre" className="margenes select">Seleccione su Marca</label>
                    <select
                        name="marca"
                        id="marca"
                        placeholder="Marca"
                        className="select-text select"
                        onChange={(e) => {
                            setMarcaSeleccionada(e.target.value);
                        }}
                    >
                        <option value={null}>Marca</option>
                        {marcas.map(m => {
                            return <option value={m.id} key={m.id}>{m.descripcion}</option>
                        })}
                    </select>
                </div>

                <div className="campo-form select-text">
                    <div className="input-text">

                        <label htmlFor="confirmar">Costo</label>
                        <input
                            className="input-number"
                            type="number"
                            name="costo"
                            id="costo"
                            placeholder=""
                            onChange={onChangeProducto}

                        />
                    </div>
                    <div className="input-text">
                        <label htmlFor="confirmar">Margen de ganancia (%)</label>
                        <input
                            className="input-number"
                            type="number"
                            name="margenGanancia"
                            id="margenGanancia"
                            placeholder=""
                            onChange={onChangeProducto}

                        />
                    </div>
                    <div className="input-text">
                        <label htmlFor="confirmar">Precio de venta</label>
                        <input
                            className="input-number"
                            type="number"
                            name="precioFinal"
                            id="precioFinal"
                            placeholder=""
                            value={producto.precioDeVenta}
                            disabled
                        />
                    </div>
                </div>

                <div className="campo-form">
                    <input
                        type="button"
                        className="btn btn-primario btn-block"
                        value="Registrar producto"
                        onClick={() => crearNuevoProducto()}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Volver"
                    />
                </div>
            </form>
        </div>

    );
}

export default AltaProducto;