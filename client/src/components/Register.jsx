import React from 'react'

const Register = () => {
  return (
    <div className="main-page">
      <div className="form">
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" placeholder="Hunter..." />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" placeholder="Doe..." />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="example@gmail.com" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" />
        </form>
      </div>
    </div>
  )
}

export default Register
