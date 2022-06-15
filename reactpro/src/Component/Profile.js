import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./From.css";
function Example() {
  const [user, setuser] = useState({});
  const [data, setdata] = useState([]);
  
  
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    if (items) {
      setdata(items);
    }
    console.log("666", items);
  }, []);

  const handleChange = (event) => {
    setuser({
      ...user,
      [event.target.name]: event.target.value,
    });
    console.log(6666, user);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var item = JSON.parse(localStorage.getItem("data"));
    item = item ? item : [];
    item.push({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
    localStorage.setItem("data", JSON.stringify(item));
    setdata(item);
  
  };
  const handleDelete = (id) => {
    var item = JSON.parse(localStorage.getItem("data"));
    item.splice(id, 1);
    localStorage.setItem("data", JSON.stringify(item));
    setdata(item);
  };
  const handleEdit=(id)=>{
    var item =JSON.parse(localStorage.getItem("data"));
    var obj =item[id]
    setuser({
      name:obj.name,
      email:obj.email,
      phone:obj.phone
    })
    console.log("999",obj)
  
   }
  return (
    <div>
    <div className="formDiv">
      <h1>Regitration From</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="UserName">Name </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter User Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter Email Id"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone </label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
          />
        </div>
        <div>
          <label htmlFor="code">Code</label>
          <input 
          type="text"
          name="phone"
          value={user.code}
          onChange={handleChange}
          placeholder="Enter your Code"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
      <table border="1">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <Button onClick={() => handleDelete(id)}>Delete</Button>
                </td>
                <td>
                  <button onClick={() => handleEdit(id)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Example;
