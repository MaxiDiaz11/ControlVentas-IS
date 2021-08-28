import React from 'react';

const BajaProducto = () => {
    return (
        <div>
            <h1>Baja producto</h1>
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
    );
}

export default BajaProducto;