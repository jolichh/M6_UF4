import React from "react";

const FormulariTasques = ({onSubmit})=> {
    const controlarSubmit = (e) =>{
        e.preventDefault();
        const tarea = e.target.elements.value;
        onSubmit(tarea);
    }
    return (
        <>
            <form className="agregarTarea" onSubmit={controlarSubmit}>
                <input type="text" placeholder="nueva tarea"></input>
                <button type="submit">añadir</button>
            </form>
        </>
    )
}

export default FormulariTasques