import React from 'react';

const AltaProducto = () => {
    return (
        <div>
            <h1>Alta producto</h1>
            <form>
                <div className="select-text campo-form ">
                    <label htmlFor="nombre">Descripcion del producto</label>
                    <input
                        type="text"
                        name="descripcion"
                        id="descripcion"
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

                        <label htmlFor="confirmar" className="margenes select">Costo</label>
                        <input
                            className="input-number"
                            type="number"
                            name="Costo"
                            id="Costo"
                            placeholder=""
                        />
                    </div>
                    <div >
                        <label htmlFor="confirmar" className="margenes select">Margen de ganancia</label>
                        <input
                            className="input-number"
                            type="number"
                            name="Margen de ganancia"
                            id="Margen de ganancia"
                            placeholder=""

                        />
                    </div>
                    <div>
                        <label htmlFor="confirmar"  className="direccion">Precio de venta</label>
                        <input
                            style={{margin: '5px'}}
                            className="input-number"
                            type="number"
                            name="PrecioDeVenta"
                            id="PrecioDeVenta"
                            placeholder=""

                        />
                    </div>
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

export default AltaProducto;