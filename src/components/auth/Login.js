import React, { useContext, useState } from "react";
import usuarioContext from '../../context/usuarios/usuarioContext';
import { Link, useHistory } from "react-router-dom";
// import axios from 'axios'
import Swal from 'sweetalert2'

const Login = () => {

    const usr = useContext(usuarioContext);

    const { autenticarUsuario } = usr;

    //state de empleado
    const [empleado, setEmpleado] = useState({
        legajo: "",
        password: "",
    });

    let history = useHistory();

    //extraer de empleado
    const { legajo, password } = empleado;

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
        if (legajo.trim() === '' || password.trim === '') return Swal.fire({
            title: 'Error!',
            text: 'Debe completar los campos requeridos.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        else {
            //peticion
            // axios.post('', {
            //     body: {
            //         legajo: legajo,
            //         password: password
            //     }
            // }).then(r => {
            //     console.log(r)
            // }).catch(e => console.log(e))


            if (legajo === 'maxi' || password === '123') {
                const usuario = {
                    tipo: "vendedor",
                    nombreUsuario: "maxi",
                    autorizado: true,
                    id: 1
                }
                autenticarUsuario(usuario)
                history.push('/tienda')
            }
        }
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Inicia Sesión</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="legajo">Legajo</label>
                        <input
                            type="text"
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
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                            onClick={onSubmit}
                        />
                    </div>
                </form>

                <Link to={"/nueva-cuenta"} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;
