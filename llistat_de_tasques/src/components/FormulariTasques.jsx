import React from "react";

const FormulariTasques = ({onSubmit})=> {

    return (
        <>
            <form className="agregarTarea" onSubmit={onSubmit}>
                <input type="text" placeholder="nueva tarea"></input>
                <button type="submit">añadir</button>
            </form>
        </>
    )
}

export default FormulariTasques