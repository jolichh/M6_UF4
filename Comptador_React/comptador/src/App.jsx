import { useState } from 'react'
import './App.css'
import Boton from './components/Boton'

function App() {
  const [count, setCount] = useState(0)

  const reiniciarNum = ()=>{
      setCount(0)
  }
  const incrementNum = ()=>{
    setCount((count) => count + 1)
  }
  return (
    <>
      <h1>Comptador</h1>
      <p>{count}</p>
      <Boton text='Click' onClick={incrementNum} esClick={true}></Boton>
      <Boton text='Reiniciar' onClick={reiniciarNum} esClick={false}></Boton>
    </>
  )
}

export default App
