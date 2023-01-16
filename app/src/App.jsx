
import { Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from "./companants/navBar";
import RegForm from "./pages/regForm";
import Login from './pages/login';
import Choice from './pages/choice'

function App() {

  return (

    <Routes>
      <Route path="/employee/register" element={
        <>
          <NavBar />
          <RegForm />
        </>
      } />
      <Route path='/login' element={
        <>
          <NavBar />
          <Login />
        </>
      }
      />
      <Route path='/choice' element={
        <>
          <Choice />
        </>
      } />
    </Routes>

  )
}

export default App
