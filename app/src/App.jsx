import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import EmployeeRegisterform from "./pages/employee/employeeRegisterform";
import Login from "./pages/login";
import Choice from "./pages/choice";
import Banner from "./components/banner";
import Home from "./pages/home";
import EmployerProfile from "./pages/employer/EmployerProfile";
import EmployerRegisterform from "./pages/employer/employerRegisterform";
import EmployeeProfile from "./pages/employee/EmployeeProfile";
import Layout from "./components/layout";
import EmployerUpdate from "./components/modals/employerUpdate";

function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route
          path="/employee/register"
          element={
            <>
              <NavBar />
              <EmployeeRegisterform />
            </>
          }
        />
        <Route
          path="/employer/register"
          element={
            <>
              <NavBar />
              <EmployerRegisterform />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <NavBar />
              <Login />
            </>
          }
        />
        <Route
          path="/choice"
          element={
            <>
              <Choice />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Banner />
              <Home />
            </>
          }
        />
        <Route
          path="/employer/profile"
          element={
            <>
              <NavBar />
              <EmployerProfile />
            </>
          }
        />
        <Route
          path="/employee/profile"
          element={
            <>
              <NavBar />
              <EmployeeProfile />
            </>
          }
        />
      <Route
          path="/employer/update"
          element={
            <>
              <NavBar />
              <EmployerUpdate />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
