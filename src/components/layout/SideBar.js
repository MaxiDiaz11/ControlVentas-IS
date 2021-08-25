import React from "react";
import ListadoOpciones from "../gestor/ListadoOpciones";

const SideBar = () => {
    return (
        <aside>
            <h1>
                TIENDA<span>IS</span>
            </h1>
            <div className="proyectos">
                <h2>Gestión de tienda</h2>
                <ListadoOpciones></ListadoOpciones>
            </div>
        </aside>
    );
};

export default SideBar;