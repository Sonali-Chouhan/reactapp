// import "./styles.css";
import React, { useState, useEffect } from "react";

export default function CheckStatus() {
  const [state, setState] = useState({ userList: [], id: 0 });

  const handleSave = (event) => {
    event.preventDefault();
    let userList = state.userList;
    userList.push({ id: state.id + 1, name: state.name, status: state.status });
    setState({
      ...state,
      userList,
      name: "",
      status: "",
      id: state.id + 1
    });
  };

  const handleStatusChange = (id) => {
    let userList = state.userList;
    userList.forEach((item) => {
      if (item.id === id) {
        item.status = item.status === "true" ? "false" : "true";
      }
    });
    setState({ ...state, userList });
  };

  return (
    <div className="App">
      <form>
        <input
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <br />
        <select
          onChange={(e) => setState({ ...state, status: e.target.value })}
        >
          <option value="">Select one</option>
          <option value={true}>active</option>
          <option value={false}>Inactive</option>
        </select>
        <br />
        <button onClick={handleSave}>Save</button>
      </form>
      {console.log(1111, state.userList)}
      <h1>active</h1>
      {state.userList
        .filter((el) => {
          return el.status === "false";
        })
        .map((user, index) => {
          return (
            <p onClick={() => handleStatusChange(user.id)} key={index}>
              {user.name} - active
            </p>
          );
        })}

      <br />
      <h1>Inactive</h1>
      {state.userList
        .filter((el) => {
          return el.status === "true";
        })
        .map((user, index) => {
          return (
            <p onClick={() => handleStatusChange(user.id)} key={index}>
              {user.name} - inactive
            </p>
          );
        })}
    </div>
  );
}
