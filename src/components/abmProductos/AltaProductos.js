import React from 'react';

const AltaProducto = () => {
    return (
        <div>
            <h1>Alta producto</h1>
            <form >
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