import React, { useState } from "react";
import "./From.css";
function Example() {
  const [data, setdata] = useState([]);
  const [user, setuser] = useState({
    name: "",
    email: "",
    status: "",
  });
  const handleValue = (event) => {
    setuser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    data.push({
      name: user.name,
      email: user.email,
      status: user.status,
    });
    setdata(data);
    setuser({
      ...user,
      name: "",
      email: "",
      status: "",
    });
  };
  const goActive = (id) => {
    data[id].status = data[id].status === "inactive" ? "active" : "inactive";
    setdata(data);
    console.log("active",data)
  };
  
  const goInactive = (id) => {
    data[id].status = data[id].status === "active" ? "inactive" : "active";
    setdata(data);
    console.log("Inactive",data)
  };

  return (
    <div className="Example">
      <div className="formDiv">
        <h1 style={{ textAlign: "center", color: "#cc0066" }}>
          Regitration From
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="User Name"
              onChange={handleValue}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="User Email"
              onChange={handleValue}
            />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select name="status" value={user.status} onChange={handleValue}>
              <option>Open Status </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="tableDiv">
        <h1 style={{ textAlign: "center", color: "#800000" }}>Active User</h1>
        <table className="table">
          <thead className="thead">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {data.map((item, id) => {
              return (
                <tr key={id}>
                  {item.status === "active" ? <td>{id}</td> : ""}
                  {item.status === "active" ? <td>{item.name}</td> : ""}
                  {item.status === "active" ? <td>{item.email}</td> : ""}
                  {item.status === "active" ? <td>{item.status}</td> : ""}
                  {item.status === "active" ? (
                    <td>
                      <button onClick={() =>goInactive(id)}>
                        GoInactive
                      </button>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="tableDiv">
        <h1 style={{ textAlign: "center", color: "#800000" }}>Inactive User</h1>
        <table className="table">
          <thead className="thead">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {data.map((item, id) => {
              return (
                <tr key={id}>
                  {item.status === "inactive" ? <td>{id}</td> : ""}
                  {item.status === "inactive" ? <td>{item.name}</td> : ""}
                  {item.status === "inactive" ? <td>{item.email}</td> : ""}
                  {item.status === "inactive" ? <td>{item.status}</td> : ""}
                  {item.status === "inactive" ? (
                    <td>
                      <button onClick={() => goActive(id)}>
                        GoActive
                      </button>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Example;
