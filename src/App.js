import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Gestor from './components/gestor/Gestor';
import ProductoState from "./context/productos/productosState"
import UsuarioState from "./context/usuarios/usuarioState"
import VentaState from "./context/venta/ventaState"

function App() {
  return (
    <UsuarioState>
      <VentaState>
        <ProductoState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route exact path="/nueva-cuenta" component={NuevaCuenta}></Route>
              <Route exact path="/tienda" component={Gestor}></Route>
            </Switch>
          </Router>
        </ProductoState>
      </VentaState>
    </UsuarioState>

  );
}

export default App;
