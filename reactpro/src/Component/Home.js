import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./From.css";
function Example() {
  const [data, setdata] = useState([]);
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    setuser({
      ...user,
      [event.target.name]: event.target.value,
    });
    console.log(6666, user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    data.push({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
    setdata(data);
  };
  return (
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
        <input type="submit" value="Submit" />
      </form>
      <table border="1">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Example;
