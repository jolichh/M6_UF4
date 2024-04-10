import React, { useSyncExternalStore } from 'react'
import Tasca from './Tasca'
import FormulariTasques from './FormulariTasques'
import { useState } from 'react'

const LlistatTasques = () => {
  const[tasques, setTareas] = useState([{"id":"1","content":"PRUEa"}]);
  
  const afegirTasca = (tascaNova)=>{
    nova = {"id": tasques.length,
            "content": tascaNova.value,
          }
    const tasquesActuals = [...tasques, nova];
    setTareas(tasquesActuals);
console.log("sholas")
  }
  const eliminarTasca = id =>{
    const tasquesRestants = [];
console.log("asdfadas")
    setTareas(tasquesRestants);
  }

  return (
    <>
        <div className='containerTarea'>
            <h1>Mis tareas</h1>
            <div className='contentTarea'>
            <FormulariTasques onSubmit={afegirTasca}></FormulariTasques>
            {tasques.map((tasca) =>(
              <Tasca key={tasca.id} id={tasca.id} content={tasca.content} completada={false} onClick={()=>eliminarTasca(tasca.id)}></Tasca>
            ))}
            </div>
        </div>
    </>
  )
}

export default LlistatTasques