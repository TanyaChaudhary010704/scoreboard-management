import React, { useState } from "react";
import "./StudentAdmin.css";
function StudentAdmin() {
  const [allData,setAllData] = useState([])
  async function getData(e) {
    e.preventDefault();
    const sid = e.target.sid.value;
    // alert(sid);
    if (sid === "*") {
      const response = await fetch("http://localhost:3001/admin/show");
      const res = await response.json();
      setAllData(res.message);
    } 
    else{
      const response = await fetch(`http://localhost:3001/admin/searchbyemail/${sid}`);
      const res = await response.json();
      setAllData(Array.isArray(res.message) ? res.message : [res.message]);
    } 
  }
  return (
    <div className="showDataPage">
      <h1>StudentAdmin</h1>
      <form onSubmit={getData}>
        <div>
          <input
            type="text"
            name="sid"
            placeholder="enter * or student email id"
          />
        </div>
        <div>
          <button>Show Data</button>
        </div>
      </form>
      <div>
        <h1>Output</h1>
        <div>
          {
            allData && allData.length > 0 ? 
              <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                  <tr><th>Name</th> <th>Email</th></tr>
                </thead>
                <tbody>
                  {allData.map((item,index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
            </table>:<h2>No data found</h2>
          }
      </div>
      </div>
    </div>
  );
}

export default StudentAdmin;
