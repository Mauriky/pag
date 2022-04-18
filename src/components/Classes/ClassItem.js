import React from 'react';

const ClassItem=({clase})=>{
    //console.log(clase);
    return (
        <div className="col-md-4 mb-4">
            <div className="card card-body">
                <h3 className="card-tittle">{clase.name}</h3>
                <p className="card-text">Sección: <strong>{clase.seccion}</strong></p>
                <p className="card-text">Ciclo: <strong>{clase.ciclo}</strong></p>
                <p className="card-text">Codigo de Acceso: <strong>{clase.codigoAcceso}</strong></p>
                <a href="www.fb.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary"> Entrar </a>
            </div>
        </div>
    );
}

export default ClassItem;