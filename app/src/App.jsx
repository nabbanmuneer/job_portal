import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from "./companants/navBar";
import RegForm from "./pages/regForm";


function App() {

  return (

    <Routes>
      <Route path="/employee/register" element={
        <>
          <RegForm />
          <NavBar />
        </>
      } />
      <Route path='/login' element={
        <NavBar />
      }
      />
    </Routes>

  )
}

export default App
