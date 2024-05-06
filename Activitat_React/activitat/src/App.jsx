import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'

function App() {
  const [username, setUsername] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();    
    setUsername(event.target.elements.username.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder='Introduce nombre'></input>
        <button type="submit"></button>
      </form>
      <Welcome username={username}></Welcome>
    </>
  )
}

export default App
