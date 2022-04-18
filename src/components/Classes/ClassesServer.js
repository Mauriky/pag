const API_URL ='http://127.0.0.1:8000/api/classes/';

export const listClasses = async()=>{
    return await fetch(API_URL);
};

export const registerClass= async(newClass)=>{
    return await fetch(API_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "name" :String(newClass.name).trim(),
            "seccion":String(newClass.seccion).trim(),
            "ciclo":String(newClass.ciclo).trim(),
            "codigoAcceso":String(newClass.codigoAcceso).trim(),
        })
    });
};


//"seccion":parseInt(newClass.seccion) para enteros