
import { Route, Routes } from "react-router-dom";
import './App.css'
import NavBar from "./components/navBar"
import EmployeeRegisterform from "./pages/employeeRegisterform";
import Login from './pages/login';
import Choice from './pages/choice';
import Banner from './components/banner';
import Home from "./pages/home";
import EmployerProfile from "./pages/EmployerProfile";
import EmployerRegisterform from './pages/employerRegisterform';
import EmployeeProfile from "./pages/employeeProfile";

function App() {
  return (
    <Routes>
      <Route path="/employee/register" element={
        <>
          <NavBar />
          <EmployeeRegisterform />
        </>
      } />
      <Route path="/employer/register" element={
        <>
          <NavBar />
          <EmployerRegisterform />
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
