import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div>
      <h1>ABES Scoreboard Management System</h1>
      <h2>Welcome !</h2>
      <div className="toggleButton">
        <Link to="/studentlogin" className="customLink">
          <button>Student</button>
        </Link>
        <Link to="/adminlogin" className="customLink">
          <button>Admin</button>
        </Link>
      </div>
    </div>
    // <div>
    //   <h1>Home</h1>
    //   <ul>
    //     <li>
    //       <Link to="/login">Login</Link>
    //     </li>
    //     <li>
    //       <Link to="/register">Register</Link>
    //     </li>
    //     <li>
    //       <Link to="/studentadmin">Show Data of Students</Link>
    //     </li>
    //   </ul>
    // </div>
  )
}

export default Home