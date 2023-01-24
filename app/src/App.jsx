
import { Route, Routes } from "react-router-dom";
import './App.css'
import NavBar from "./components/navBar"
import RegForm from "./pages/regForm";
import Login from './pages/login';
import Choice from './pages/choice';
import Banner from './components/banner';
import Home from "./pages/home";
import EmployerProfile from "./pages/EmployerProfile";
import EmprReg from './pages/emprReg';
import EmployeeProfile from "./pages/employeeProfile";

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
        <Route path='/employee/profile' element={
        <>
          <NavBar />
          <EmployeeProfile />
        </> 
      }
      />
      
    </Routes>

  )
}

export default App
