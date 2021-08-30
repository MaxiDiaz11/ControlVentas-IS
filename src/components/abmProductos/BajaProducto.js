import React from 'react';

const BajaProducto = () => {
    return (
        <div>
            <h1>Baja producto</h1>
            <form >
                <div>
                    <input
                        className="input-text-carga"
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Tu nombre"
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
                <div className="campo-form">
                    <label htmlFor="legajo">Marca</label>
                    <input
                        type="email"
                        name="marca"
                        id="marca"
                        placeholder=""


                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="password">Precio</label>
                    <input
                        type="number"
                        name="precio"
                        id="precio"

                        placeholder=""

                    />
                </div>
                <div className="campo-form">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Baja de producto"
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

export default BajaProducto;