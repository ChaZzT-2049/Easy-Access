import React from 'react';
import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

import Estudiante from "./Estudiante";
import Profesor from "./Profesor";
import Servicios from "./Servicios";
import Proveedor from "./Proveedor";
import Directivo from "./Directivo";
import General from "./General";

import Administrador from "./Administrador";

export default function Usuarios() {
    const [usuario, setUsuario] = useState("EligeUsuario");

    const [estudianteContentVisible, setEstudianteContentVisible] = useState(false);
    const [profesorContentVisible, setProfesorContentVisible] = useState(false);
    const [serviciosContentVisible, setServiciosContentVisible] = useState(false);
    const [proveedorContentVisible, setProveedorContentVisible] = useState(false);
    const [directivoContentVisible, setDirectivoContentVisible] = useState(false);
    const [generalContentVisible, setGeneralContentVisible] = useState(false);

    const [administradorContentVisible, setAdministradorContentVisible] = useState(false);

    useEffect(() => {
        usuario === "Estudiante" ? setEstudianteContentVisible(true) : setEstudianteContentVisible(false);
        usuario === "Profesor" ? setProfesorContentVisible(true) : setProfesorContentVisible(false);
        usuario === "Servicios" ? setServiciosContentVisible(true) : setServiciosContentVisible(false);
        usuario === "Proveedor" ? setProveedorContentVisible(true) : setProveedorContentVisible(false);
        usuario === "Directivo" ? setDirectivoContentVisible(true) : setDirectivoContentVisible(false);
        usuario === "General" ? setGeneralContentVisible(true) : setGeneralContentVisible(false);
        usuario === "Administrador"
            ? setAdministradorContentVisible(true)
            : setAdministradorContentVisible(false);
    }, [usuario]);

    const handleOnChange = (e) => {
        setUsuario(e.target.value);
    };

    const makeFirstLetterCapital = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const renderResult = () => {
        let result;
        usuario === "EligeUsuario"
            ? (result = "Selecciona el tipo de usuario")
            : (result = makeFirstLetterCapital(usuario));
        return result;
    };

    return (
        <div className='container'>
            <div className='row mb-3'>
                <label htmlFor="tipos" className="col-md-4 col-form-label text-md-end">Tipo de Usuario</label>
                <p className="col-md-6 col-form-label text-center">Bienvenido, {renderResult()}</p>
                <div className='col-md-4 text-md-end'>*campo obligatorio</div>
                <div className='col-md-6 text-center'>
                    <select id="tipos" type="text" className="form-select" value={usuario} onChange={handleOnChange}>
                        <option value="EligeUsuario">selecciona el tipo de usuario</option>
                        <option value="Estudiante">Estudiante</option>
                        <option value="Profesor">Profesor</option>
                        <option value="Servicios">Servicios</option>
                        <option value="Proveedor">Proveedor</option>
                        <option value="Directivo">Directivo</option>
                        <option value="General">General</option>
                        <option value="Administrador">Administrador</option>
                    </select>
                    {estudianteContentVisible && <Estudiante />}
                    {profesorContentVisible && <Profesor />}
                    {serviciosContentVisible && <Servicios />}
                    {proveedorContentVisible && <Proveedor />}
                    {directivoContentVisible && <Directivo />}
                    {generalContentVisible && <General />}
                    {administradorContentVisible && <Administrador />}
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('tipo')) {
    ReactDOM.render(<Usuarios />, document.getElementById('tipo'));
}