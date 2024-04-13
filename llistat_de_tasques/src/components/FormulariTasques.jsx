import React from "react";
import { useState } from "react";

const FormulariTasques = ({onSubmit})=> {
    const [textTarea, setTarea] = useState("");
    const controlarSubmit = (e) =>{
        e.preventDefault();        
        onSubmit(textTarea);
        setTarea("");
    }
    return (
        <>
            <form className="agregarTarea" onSubmit={controlarSubmit}>
                <input type="text" value={textTarea} placeholder="Nueva tarea" onChange={(e)=>setTarea(e.target.value)}></input>
                <button type="submit">añadir</button>
            </form>
        </>
    )
}

export default FormulariTasques