import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const NuevaCuenta = () => {

    //TODO Verificar este componente

    let history = useHistory();

    const [empleado, setEmpleado] = useState({
        nombre: "",
        legajo: "",
        password: "",
        confirmar: "",
    });
    const [tipoEmpleado, setTipoEmpleado] = useState({
        tipo: ""
    })

    const { nombre, legajo, password, confirmar } = empleado;

    const onChange = (e) => {
        setEmpleado({
            ...empleado,
            [e.target.name]: e.target.value,
        });
    };

    //cuando el empleado quiere iniciar sesion
    const onSubmit = (e) => {
        e.preventDefault();

        //validar que no haya campos vacios

        //password minimo de 6 caracteres
        //igualdad de passwords
        
        //pasarlo al action
        history.push('/')
    };

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="legajo">Legajo</label>
                        <input
                            type="email"
                            name="legajo"
                            id="legajo"
                            placeholder="Tu legajo"
                            value={legajo}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            placeholder="Tu password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar"> Confirmar Password</label>
                        <input
                            type="password"
                            name="confirmar"
                            id="confirmar"
                            value={confirmar}
                            placeholder="Repite tu password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="tipo">Tipo de usuario</label>
                        <select
                            className="select-text select"
                            selected
                            onChange={(e) => {
                                setTipoEmpleado(e.target.value)
                            }}
                            value={tipoEmpleado}>
                            <option value="vendedor" >Vendedor</option>
                            <option value="administrador" >Administrador</option>
                        </select>
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link to={"/"} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    );
};

export default NuevaCuenta;
