const API_URL ='http://127.0.0.1:8000/api/classes/';

export const listClasses = async()=>{
    return await fetch(API_URL);
};

export const getClass = async(classId)=>{
    return await fetch(`${API_URL}${classId}`);
}

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

export const updateClass= async(claseId, updateClass)=>{
    return await fetch(`${API_URL}${claseId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "name" :String(updateClass.name).trim(),
            "seccion":String(updateClass.seccion).trim(),
            "ciclo":String(updateClass.ciclo).trim(),
            "codigoAcceso":String(updateClass.codigoAcceso).trim(),
        })
    });
};

export const deleteClass= async(claseId)=>{
    return await fetch(`${API_URL}${claseId}`,{
        method: 'DELETE'
    });
};

//"seccion":parseInt(newClass.seccion) para enteros