import React from 'react';
import * as ClassesServer from "./ClassesServer";
import { useNavigate } from 'react-router-dom';

const ClassItem=({clase, listClasses})=>{
    const navigate = useNavigate();
    //console.log(clase);
    const handleDelete=async(claseId)=>{
        //console.log(claseId);
        await ClassesServer.deleteClass(claseId);
        listClasses();
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card card-body">
                <h3 className="card-tittle">
                    {clase.name}
                    <button onClick={()=>navigate(`/updateClass/${clase.id}`)} 
                    className="btn btn-sm btn-info ms-5">
                        Actualizar  
                    </button>
                </h3>
                <p className="card-text">Sección: <strong>{clase.seccion}</strong></p>
                <p className="card-text">Ciclo: <strong>{clase.ciclo}</strong></p>
                <p className="card-text">Codigo de Acceso: <strong>{clase.codigoAcceso}</strong></p>
                <a href="www.fb.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary "> Entrar </a>
                <button onClick={()=>clase.id && handleDelete(clase.id)} className='btn btn-danger my-2 '>Eliminar Clase</button>
            </div>
        </div>
    );
}

export default ClassItem;