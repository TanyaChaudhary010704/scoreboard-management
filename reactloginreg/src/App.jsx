import React from 'react'
import StudentLogin from './StudentLogin'
import AdminLogin from './AdminLogin'
import Home from './Home'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import StudentAdmin from './StudentAdmin'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/studentadmin" element={<StudentAdmin />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App