import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AltaProducto = () => {

    const [marcas,setMarca] = useState([])
    const [rubros,setRubros] = useState([])
    const [marcaSelected,setMarcaSelected] = useState(0)
    const [rubroSelected,setRubroSelected] = useState(0)
    const [descripcion,setDescripcion] = useState('')
    const [codigo,setCodigo] = useState('')
    const [valores, setValores] = useState({
        costo: 0,
        margenGanancia: 0,
    })
    
    const [precioFinal,setPrecioFinal] = useState(0)
    const {costo,margenGanancia} = valores


    const onChange = (e) => {
       setValores({
           ...valores,
           [e.target.name] : Number(e.target.value)
       })
       let netoAgravado = costo + costo * margenGanancia
       let iva = netoAgravado * 0.21
       setPrecioFinal((netoAgravado + iva).toFixed(2))
       //329
    };


    useEffect( () => {
       getMarcas()
       getRubros()
    },[])

    const getMarcas = async () => {
        const response = await axios.get('/api/Marcas/GetMarcas')
        setMarca(response.data.marcas)
    }

    
    const getRubros = async () => {
        const response = await axios.get('/api/Rubros/GetRubros')
        setRubros(response.data.rubros)
    }

    const CrearProducto = async () => {
        let body = {
            CodigoProducto : codigo,
            Descripcion : descripcion,
            Costo: costo,
            MargenGanancia: margenGanancia,
            IdMarca: Number(marcaSelected),
            IdRubro: Number(rubroSelected)
        }
        const response = await axios.post('/api/Productos/CreateProducto',body)
        console.log(response)
    }

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
                        onChange={(e) => {
                            setCodigo(e.target.value);
                        }} 
                    />
                </div>
                <div className="select-text campo-form ">
                    <label htmlFor="nombre">Descripcion del producto</label>
                    <input
                        type="text"
                        name="descripcion"
                        id="descripcion"
                        placeholder="Ingrese la descripcion"
                        onChange={(e) => {
                            setDescripcion(e.target.value);
                            }} 
                    />
                </div>

                <div className="campo-form select-text">
                   
                    <label htmlFor="rubro" className="margenes select">Seleccione el rubro </label>
                    <select 
                    className="select-text select"
                     name="rubro"
                    onChange={(e) => {
                        setRubroSelected(e.target.value);
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
                            setMarcaSelected(e.target.value);
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

                        <label htmlFor="confirmar" /*className="margenes select"*/>Costo</label>
                        <input
                            className="input-number"
                            type="number"
                            name="costo"
                            id="costo"
                            placeholder=""
                            onChange={onChange}

                        />
                    </div>
                    <div className="input-text">
                        <label htmlFor="confirmar" /*className="margenes select"*/ >Margen de ganancia (%)</label>
                        <input
                            className="input-number"
                            type="number"
                            name="margenGanancia"
                            id="margenGanancia"
                            placeholder=""
                            onChange={onChange}

                        />
                    </div>
                    <div className="input-text">
                        <label htmlFor="confirmar"  /*className="direccion"*/>Precio de venta</label>
                        <input
                            className="input-number"
                            type="number"
                            name="precioFinal"
                            id="precioFinal"
                            placeholder=""
                            value={precioFinal}
                            disabled
                        />
                    </div>
                </div>

                <div className="campo-form">
                    <input
                        type="button"
                        className="btn btn-primario btn-block"
                        value="Registrar producto"
                        onClick={CrearProducto}
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