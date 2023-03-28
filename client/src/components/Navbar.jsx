import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import './Register.css'

const Navbar = () => {
  return (
    <div>
      <Router>
        <div className="nav">
          <Link to="/Register" className="dirs">
            Register
          </Link>
          <Link to="/Login" className="dirs">
            Login
          </Link>
        </div>

        <Routes>
          <Route
            path="/Register"
            className="main-page"
            element={<Register />}
          />
          <Route path="/Login" className="main-page" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Navbar
