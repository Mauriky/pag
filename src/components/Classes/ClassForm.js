import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as ClassesServer from './ClassesServer';


const ClassForm=()=>{
    const Swal = require('sweetalert2');
    const initialState={id:0,name:"",seccion:"",ciclo:"",codigoAcceso:""};
    const [clase, setClase] = useState(initialState);
    const navigate = useNavigate();
    const params= useParams();

    //console.log(params);

    const handleInputChange=(e)=>{
        //console.log(e.target.name);
        //console.log(e.target.value);
        setClase({...clase,[e.target.name]: e.target.value});
    };

    const mostrarAlertaAgregar=()=>{
        Swal.fire({
            icon: 'success',
            title: 'El registro ha sido guardado Exitosamente',
            showConfirmButton: false,
            timer: 2100
          })
    };

    const mostrarAlertaModificar=()=>{
        Swal.fire({
            icon: 'success',
            title: 'El registro ha sido modificado',
            showConfirmButton: false,
            timer: 2100
          })
    };


    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            let res;
            //estamos en modo de registro
            if(!params.id){
                res =  await ClassesServer.registerClass(clase);
                const data=await res.json();
                if(data.message==="Success"){
                    setClase(initialState); 
                }
                mostrarAlertaAgregar();
            }else{
                //modo update
                await ClassesServer.updateClass(params.id, clase);
                mostrarAlertaModificar();
            }
            navigate('/');
        }catch(error){
            console.log(error);
        }
    };

    const getClass=async(classId)=>{
        try{
            const res=await ClassesServer.getClass(classId);
            const data = await res.json();
            const {name, seccion, ciclo, codigoAcceso} = data.Clase;
            setClase({name,seccion,ciclo,codigoAcceso});
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        if(params.id){
            getClass(params.id);
        }
        // eslint-disable-next-line
    },[]);

    return(
        <div className="col-md-4 mx-auto card card-body m-5">
            {
                params.id?(
                    <h2 className="mb-3 text-center ">Actualizar Clase</h2>
                ):(
                    <h2 className="mb-3 text-center ">Agregar Clase</h2>
                )
            }
            
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
                {
                    //params.id es distinto de null hay que actualizar por que lleva un registro si no es uno nuevo 
                    params.id?(
                        <button type="submit" className="btn btn-primary ">Actualizar</button>
                    ):(
                        <button type="submit"  className="btn btn-success ">registrar</button>
                    )
                }
                
            </div>
        </form>
        </div>
    );

};

export default ClassForm;