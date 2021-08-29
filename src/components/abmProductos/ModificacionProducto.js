import React from 'react';

const ModificacionProducto = () => {
    return (
        <div>
            <h1>ModificacionProducto</h1>
            <form >
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

                 <div className="campo-form formulario-nuevo-proyecto">
                    <label htmlFor="nombre">Descripcion</label>
                    <input
                        type="text"
                        name="descripcion"
                        id="descripcion"
                        placeholder=""
                    />
                </div>

                <div className="campo-form formulario-nuevo-proyecto">
                    <label htmlFor="nombre">Marca</label>
                    <input
                        type="text"
                        name="Marca"
                        id="Marca"
                        placeholder=""
                    />
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
    );
}

export default ModificacionProducto;