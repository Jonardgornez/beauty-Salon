// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home"
import Services from "../pages/Services"
import Calendar from "../pages/Calendar"
import Transaction from "../pages/Transaction"
import History from "../pages/History"
import About from "../pages/About"
import Contact from "../pages/Contact"

import Login from "../pages/Login"

import MainLayout from "../layout/MainLayout";

function AppRoutes() {
  return (
    <Routes>
      {/* Login First */}
      <Route path="/login" element={<Login />} />

      {/* Layout Wrapper */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>} />
         <Route path="/home" element={<Home/>} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/transaction" element={<Transaction/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>

      {/* Default Redirect */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default AppRoutes;
