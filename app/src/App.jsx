import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from "./companants/navBar";
import RegForm from "./pages/regForm";


function App() {
  
  const [count, setCount] = useState(0)

  return (
    
      <div>
        
          <NavBar />
          <RegForm />
      </div>
    
  )
}

export default App
