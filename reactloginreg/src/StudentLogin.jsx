import React from 'react'
import "./Registration.css"
const StudentLogin = () => {
  async function sendData(e) {
    e.preventDefault()
    const roll = e.target.roll.value
    const dob = e.target.dob.value
    //console.log(name,email,password)
    const response = await fetch("http://localhost:3001/studentlogin",{
      method: "POST",
      body: JSON.stringify({roll, dob }),
      headers:{'Content-Type':'application/json'}
    })
    const res = await response.json();
    alert(res.message)
  }
  return (
    <div>
      <form action="" onSubmit={sendData}>
        <h2>Student Login</h2>
        <label>Roll Number</label>
        <input type='number' name="roll" placeholder="Enter Roll Number" required/>
        <label>Date Of Birth</label>
        <input type="date" name='dob' placeholder="Enter DOB" required/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default StudentLogin