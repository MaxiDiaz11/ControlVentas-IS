import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
import { Enviroment } from "../../enviroment/enviroment-dev.js";

const Login = () => {
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
        history.push('/tienda')
        // //validar que no haya campos vacios
        // if (legajo.trim() === '' || password.trim === '') return Swal.fire({
        //     title: 'Error!',
        //     text: 'Debe completar los campos requeridos.',
        //     icon: 'error',
        //     confirmButtonText: 'OK'
        // })

        // //peticion
        // axios.post('', {
        //     body: {
        //         legajo: legajo,
        //         password: password
        //     }
        // }).then(r => {
        //     console.log(r)
        // }).catch(e => console.log(e))

    const guardarUsuarioActivo =  (response) => {
        // await autenticarUsuario({
        //     tipo:response.data.tipoUsuario,
        //     usuario:response.data.nombre,
        //     autenticado: response.data.estaAutenticado,
        //     id:response.data.id
        // })
        window.sessionStorage.setItem('tipo',response.data.tipoUsuario)
        window.sessionStorage.setItem('nombre',response.data.nombre)
        window.sessionStorage.setItem('autenticado',response.data.estaAutenticado)
        window.sessionStorage.setItem('id',response.data.id)
        window.location.href = Enviroment.urlFront + '/tienda'
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
                            // onClick={()=> {history.push('/tienda')}}
                        />
                    </div>
                </form>

                <Link to={"/nueva-cuenta"} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
};

export default Login;
