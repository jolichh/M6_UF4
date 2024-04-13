import React from "react";
import {AiOutlineDelete, AiOutlineCheck, AiOutlineUndo} from 'react-icons/ai';

const Tasca = ({completada, content, onClick, onComplete}) =>{
    const estat = completada? "tascaCompletada":"noCompletada"
    const clases = ['tasca',estat]
    
    return(
        <>
            <div className={clases.join(' ')}>
                <p>{content}</p>
                <div className="botones">
                    <button onClick={onComplete}>
                        {completada? <AiOutlineUndo/> :<AiOutlineCheck/> }
                    </button>
                    <button onClick={onClick} >
                        <AiOutlineDelete/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Tasca