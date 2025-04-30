import React from 'react'
import "./Registration.css"
const AdminLogin = () => {
  async function sendData(e) {
    e.preventDefault()
    const id = e.target.adminId.value
    const password = e.target.password.value
    //console.log(name,email,password)
    const response = await fetch("http://localhost:3001/adminlogin",{
      method: "POST",
      body: JSON.stringify({id, password }),
      headers:{'Content-Type':'application/json'}
    })
    const res = await response.json();
    alert(res.message)
  }
  return (
    <div>
      <form action="" onSubmit={sendData}>
        <h2>Admin Login</h2>
        <label>Admin Id</label>
        <input type='number' name="adminId" placeholder="Enter Admin Id" required/>
        <label>Password</label>
        <input type="password" name='password' placeholder="Enter Password" required/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AdminLogin