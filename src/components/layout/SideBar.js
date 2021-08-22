import React from "react";
import ListadoOpciones from "../gestor/ListadoOpciones";

const SideBar = () => {
    return (
        <aside>
            <h1>
                TIENDA<span>IS</span>
            </h1>
            {/* <NuevoProyecto></NuevoProyecto> */}
            <div className="proyectos">
                <h2>Gestión de tienda</h2>
                <ListadoOpciones></ListadoOpciones>
                {/* <ListadoProyectos></ListadoProyectos> */}
            </div>
        </aside>
    );
};

export default SideBar;