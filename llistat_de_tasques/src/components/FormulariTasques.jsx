import React from "react";

const FormulariTasques = ({onSubmit})=> {

    return (
        <>
            <form className="agregarTarea" onSubmit={onSubmit}>
                <input type="text" placeholder="nueva tarea"></input>
                <button>añadir tarea</button>
            </form>
        </>
    )
}

export default FormulariTasques