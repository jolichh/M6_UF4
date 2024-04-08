import React from "react";
import {AiOutlineDelete} from 'react-icons/ai';

const Tasca = ({completada}) =>{
    const estat = completada? "tascaCompletada":"noCompletada"
    const clases = ['tasca',estat]
    
    return(
        <>
            <div className={clases.join(' ')}>
                <p>Una tasca</p>
                <button>
                    <AiOutlineDelete>X</AiOutlineDelete>
                </button>

            </div>
        </>
    )
}

export default Tasca