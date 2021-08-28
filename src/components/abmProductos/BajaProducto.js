import React from 'react';
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

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const BajaProducto = () => {
    const classes = useStyles();
    return (
        <div>
            <h1>Venta</h1>
            {/* <form >
                <div className="campo-form">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Tu nombre"


                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="legajo">Legajo</label>
                    <input
                        type="email"
                        name="legajo"
                        id="legajo"
                        placeholder="Tu legajo"


                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"

                        placeholder="Tu password"

                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="confirmar"> Confirmar Password</label>
                    <input
                        type="password"
                        name="confirmar"
                        id="confirmar"

                        placeholder="Repite tu password"

                    />
                </div>
                <div className="campo-form">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Registrar producto"
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Volver"
                    />
                </div>
            </form> */}
            <div>
                <input 
                    className="input-text-carga"
                    type="text"
                    name="Codigo"
                    id="codigo"
                    placeholder="Codigo del producto"
                />
                <button className="btn btn-primario"> Buscar </button>
                
            </div>
            <form >
                <div className="input-text-carga" >
                    <div className="select-text campo-form ">
                    <label htmlFor="nombre">Nombre del producto</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder=""
                        />
                    </div>
                    <div className="campo-form select-text ">
                    <label htmlFor="nombre">Marca</label>
                    <input
                        type="text"
                        name="marca"
                        id="marca"
                        placeholder=""
                    />
                </div>
                </div>
                
                <div className="campo-form select-text">
                    <label htmlFor="color" className="margenes select">Seleccione el color </label>
                    <select className="select-text select" name="color" selected>
                        <option value="value1" >Color</option>
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
                        
                        />
                        </div>
                        <div className="direccion">
                         <button className="btn-tabla btn-green"> 
                            <AddCircleOutlineIcon fontSize="large" name="Agregar"/>
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
                        <TableCell > <button className="btn-tabla btn-danger"><DeleteIcon fontSize="large"/></button></TableCell>
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
        // <div className="formulario">
        //     <h2 className="text-center mb-4" ><b>ALTA PRODUCTO</b></h2>
        //     <div className="formulario form">
        //         <div className="campo-form">
        //             <label className="campo-form label"><b>CODIGO</b></label>
        //             <input className="input-text"
        //                 type="text"
        //                 placeholder="Codigo del producto"
        //                 name="NombreRig"
        //                 required
        //             />
        //         </div>

        //         <div className="campo-form">
        //             <label className="campo-form label"><b>COSTO</b></label>
        //             <input className="input-text"
        //                 type="text"
        //                 placeholder="Costo del producto"
        //                 name="NombreRig"
        //                 required
        //             />
        //         </div>

        //         <div className="campo-form">
        //             <label className="campo-form label"><b>MARGEN DE GANANCIA</b></label>
        //             <input className="input-text"
        //                 type="text"
        //                 placeholder="Margen de ganancia del producto"
        //                 name="NombreRig"
        //                 required
        //             />
        //         </div>

        //         <div className="campo-form">
        //             <label className="campo-form label"><b>DESCRIPCION</b></label>
        //             <input className="input-text"
        //                 type="text"
        //                 placeholder="Descripcion del producto"
        //                 name="NombreRig"
        //                 required
        //             />
        //         </div>


        //         <div className="campo-form">
        //             <label className="campo-form label"><b>TALLE</b></label>
        //             <select
        //                 className="form-select"
        //                 aria-label="Default select example"
        //                 required
        //             >
        //                 <option key="0" value="0" >
        //                     Seleccione un talle
        //                 </option>
        //                 <option key="1" value="1" >
        //                     S
        //                 </option>
        //                 <option key="2" value="2" >
        //                     M
        //                 </option>
        //                 <option key="3" value="3" >
        //                     L
        //                 </option>
        //             </select>
        //         </div>

        //         <div className="campo-form">
        //             <label className="campo-form label"><b>MARCA</b></label>
        //             <select
        //                 className="form-select"
        //                 aria-label="Default select example"
        //                 required
        //             >
        //                 <option key="0" value="0" >
        //                     Seleccione una marca
        //                 </option>
        //                 <option key="1" value="1" >
        //                     Adidas
        //                 </option>
        //                 <option key="2" value="2" >
        //                     Nike
        //                 </option>
        //                 <option key="3" value="3" >
        //                     Puma
        //                 </option>
        //             </select>
        //         </div>

        //         <div className="campo-form">
        //             <label className="campo-form label"><b>COLOR</b></label>
        //             <select
        //                 className="form-select"
        //                 aria-label="Default select example"
        //                 required
        //             >
        //                 <option key="0" value="0" >
        //                     Seleccione un color
        //                 </option>
        //                 <option key="1" value="1" >
        //                     rojo
        //                 </option>
        //                 <option key="2" value="2" >
        //                     azul
        //                 </option>
        //                 <option key="3" value="3" >
        //                     gris
        //                 </option>
        //             </select>
        //         </div>
        //     </div>
        // </div>
    );
}

export default BajaProducto;