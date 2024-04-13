import React from "react";
import { useState } from "react";

const FormulariTasques = ({onSubmit})=> {
    const [tarea, setTarea] = useState("");
    const controlarSubmit = (e) =>{
        e.preventDefault();
        
        onSubmit(tarea);
        setTarea("");
    }
    return (
        <>
            <form className="agregarTarea" onSubmit={controlarSubmit}>
                <input type="text" value={tarea} placeholder="Nueva tarea" onChange={(e)=>setTarea(e.target.value)}></input>
                <button type="submit">añadir</button>
            </form>
        </>
    )
}

export default FormulariTasques