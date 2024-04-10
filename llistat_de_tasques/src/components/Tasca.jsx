import React from "react";
import {AiOutlineDelete} from 'react-icons/ai';

const Tasca = ({completada, content, onClick}) =>{
    const estat = completada? "tascaCompletada":"noCompletada"
    const clases = ['tasca',estat]
    
    return(
        <>
            <div className={clases.join(' ')}>
                <p>{content}</p>
                <button onClick={onClick}>
                    <AiOutlineDelete>X</AiOutlineDelete>
                </button>

            </div>
        </>
    )
}

export default Tasca