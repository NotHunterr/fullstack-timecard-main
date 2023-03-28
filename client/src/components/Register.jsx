import React from 'react'

const Register = () => {
  return (
    <div className="main-page">
      <div className="form">
        <form>
          <label for="firstName">First Name</label>
          <input type="text" name="firstName" placeholder="Hunter" />
          <label for="lastName">Last Name</label>
          <input type="text" name="lastName" placeholder="Doe" />
        </form>
      </div>
    </div>
  )
}

export default Register
