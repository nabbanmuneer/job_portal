
import { Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from "./compounds/navBar"
import RegForm from "./pages/regForm";
import Login from './pages/login';
import Choice from './pages/choice';
import Banner from './compounds/banner';

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
      <Route path='/' element={
        <>
        <NavBar />
        <Banner />
        </>
      } />
    </Routes>

  )
}

export default App
