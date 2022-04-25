import React, { useEffect, useState } from 'react';
//components
import ClassItem from './ClassItem';
import * as ClassesServer from './ClassesServer';

const ClassesList =()=>{

    const [clases,setClasses] = useState([]);

    const listClasses= async()=>{
       
        try{
            const res = await ClassesServer.listClasses();
            const data=await res.json();
            //console.log(data);
            setClasses(data.classes);
            
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        listClasses();
    },[]);

    return (
        <div className="row">
            {clases.map(clase=>(
                <ClassItem key={clase.id} clase={clase} listClasses={listClasses}/>
            ))}
        </div>
    );
};


export default ClassesList;