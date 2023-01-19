
import { Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from "./compounds/navBar"
import RegForm from "./pages/regForm";
import Login from './pages/login';
import Choice from './pages/choice';
import Banner from './compounds/banner';
import home from './pages/home';//not done
import Home from "./pages/home";
import EmployerProfile from "./pages/EmployerProfile";
import EmprReg from './pages/emprReg';


function App() {
  return (

    <Routes>
      <Route path="/employee/register" element={
        <>
          <NavBar />
          <RegForm />
        </>
      } />
      <Route path="/employer/register" element={
        <>
          <NavBar />
          <EmprReg />
        </>
      }
       />
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
        <Home />
        </>
      } />
      <Route path='/employer/profile' element={
        <>
          <NavBar />
          <EmployerProfile />
        </> 
      }
      />
        
      
    </Routes>

  )
}

export default App
