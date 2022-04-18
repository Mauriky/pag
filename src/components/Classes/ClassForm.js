import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ClassesServer from './ClassesServer';

const ClassForm=()=>{
const initialState={id:0,name:"",seccion:"",ciclo:"",codigoAcceso:""};
const [clase, setClase] = useState(initialState);
const navigate = useNavigate();


const handleInputChange=(e)=>{
    //console.log(e.target.name);
    //console.log(e.target.value);
    setClase({...clase,[e.target.name]: e.target.value});
};

const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        let res;
        res =  await ClassesServer.registerClass(clase);
        const data=await res.json();
        if(data.message=="Success"){
            setClase(initialState);
        }
        navigate('/');
    }catch(error){
        console.log(error);
    }
};

    return(
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center ">Nueva Clase</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label  className="form-label">Nombre de la Materia</label>
                <input type="text" name="name" value={clase.name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" required/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Sección</label>
                <input type="text" name="seccion" value={clase.seccion} onChange={handleInputChange} className="form-control" minLength="2" maxLength="10" required/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Ciclo</label>
                <input type="text" name="ciclo" value={clase.ciclo} onChange={handleInputChange} className="form-control" minLength="2" maxLength="10" required/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Código de Acceso</label>
                <input type="text" name="codigoAcceso" value={clase.codigoAcceso} onChange={handleInputChange} className="form-control" minLength="2" maxLength="10" required/>
                <div id="textlHelp">Máximo 10 caracteres, puedes utilizar numeros y letras</div>
            </div>
            <div className="d-grid gap-2"> 
                <button type="submit" className="btn btn-primary ">Agregar</button>
            </div>
        </form>
        </div>
    );

};

export default ClassForm;