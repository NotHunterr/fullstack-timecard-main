import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <Router>
          <Link to="/Register" className="dirs">
            Register
          </Link>
          <Link to="/Login" className="dirs">
            Login
          </Link>
        </Router>
      </div>
      <Router>
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
