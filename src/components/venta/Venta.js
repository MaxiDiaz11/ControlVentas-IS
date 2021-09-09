import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import axios from 'axios';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Venta = () => {

    //TODO PASAR TODO ESTO A CONTEXT

    
    const [codigo,setCodigo] = useState('')
    const [descripcion,setDescripcion] = useState('')
    const [marca,setMarca] = useState('')
    const [stockOriginal,setStockOriginal] = useState([])
    const [stockFiltrado,setStockFiltrado] = useState([])
    
    const filtrarColores = () => {
        let colores = stockOriginal.map(stock => {
            return stock.color
        })
        console.log(colores)
        let coloresSinRepeticion = colores.filter((item,index)=>{
            return colores.indexOf(item) === index;
          })
        console.log(coloresSinRepeticion)
    }

    const GetProductoByCodigo = async () => {
        let data = {
            CodigoProducto : codigo
        }
        const response = await axios.get('/api/Productos/GetProductoById',{params:data})
        let producto = response.data.producto
        setDescripcion(producto.descripcion)
        setMarca(producto.marca.descripcion)
        setStockOriginal(producto.stocks)
        setStockFiltrado(producto.stocks)
        filtrarColores()
    }
    
    const classes = useStyles();
    return (
        <div>
            <h1>Venta</h1>
            <div>
                <input
                    className="input-text-carga"
                    type="text"
                    name="Codigo"
                    id="codigo"
                    placeholder="Codigo del producto"
                    onChange={(e) => {
                        setCodigo(e.target.value);
                    }} 
                />
                <button className="btn btn-primario" onClick={GetProductoByCodigo}> Buscar </button>

            </div>
            <form >
                <div className="input-text-carga" >
                    <div className="select-text campo-form ">
                        <label htmlFor="nombre">Descripcion del producto</label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder=""
                            value={descripcion}
                        />
                    </div>
                    <div className="campo-form select-text ">
                        <label htmlFor="nombre">Marca</label>
                        <input
                            type="text"
                            name="marca"
                            id="marca"
                            placeholder=""
                            value={marca}
                        />
                    </div>
                </div>

                <div className="campo-form select-text">
                    <label htmlFor="color" className="margenes select">Seleccione el color </label>
                    <select className="select-text select" name="color" selected>
                        {stockOriginal.map(stock => {
                            return <option key={stock.color.id} value={stock.color.id}>{stock.color.descripcion}</option>
                        })}
                    </select>
                    <label htmlFor="talle" className="margenes select">Seleccione el talle </label>
                    <select className="select-text select" name="talle" selected>
                        <option value="value1" >Talle</option>
                    </select>
                    <label htmlFor="cantidad" className="margenes select">Cantidad </label>
                    <select className="select-text select" name="Cantidad" selected>
                        <option value="value1" >Cantidad</option>
                    </select>
                </div>

                <div className="campo-form select-text">
                    <div className="input-text">
                        <label htmlFor="confirmar" className="margenes"> Precio de venta</label>
                        <input
                            className="input-number"
                            type="number"
                            name="PrecioVenta"
                            id="PrecioVenta"
                            placeholder=""
                            disabled
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmar" className="margenes"> IVA</label>
                        <input
                            className="input-number"
                            type="number"
                            name="IVA"
                            id="IVA"
                            placeholder=""
                            disabled
                        />
                    </div>
                    <div className="direccion">
                        <button className="btn-tabla btn-green">
                            <AddCircleOutlineIcon fontSize="large" name="Agregar" />
                        </button>
                    </div>
                </div>

                <div className="letra-tabla">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow >
                                    <TableCell> <h3 className="letra-tabla">Codigo</h3></TableCell>
                                    <TableCell> <h3 className="letra-tabla">Marca</h3></TableCell>
                                    <TableCell ><h3 className="letra-tabla">Color</h3></TableCell>
                                    <TableCell ><h3 className="letra-tabla">Cantidad</h3></TableCell>
                                    <TableCell ><h3 className="letra-tabla">Precio</h3></TableCell>
                                    <TableCell ><h3 className="letra-tabla">Opciones</h3></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell TableCell component="th" scope="row">
                                    </TableCell>
                                    <TableCell ></TableCell>
                                    <TableCell ></TableCell>
                                    <TableCell ></TableCell>
                                    <TableCell ></TableCell>
                                    <TableCell> <button className="btn-tabla btn-danger"><DeleteIcon fontSize="large" /></button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <div className="campo-form">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Vender producto"
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

export default Venta;