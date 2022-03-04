// import React, { useState,useEffect } from "react";
// import { Button } from "react-bootstrap";
// import "./From.css";
// function Example() {
//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [phone, setphone] = useState("");
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     const item = JSON.parse(localStorage.getItem('data'));
//     if (item) {
//       setdata(item);
//     }
//   }, []);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     var newdata = JSON.parse(localStorage.getItem("data"));
//     newdata = newdata ? newdata : [];
  
//     newdata.push({
//       name: name,
//       email: email,
//       phone: phone,
//     });
//     localStorage.setItem("data", JSON.stringify(newdata));
//    setdata(newdata);

//   };
//   return (
//     <div className="formDiv">
//       <h1>Regitration From</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="UserName">Name </label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={(event) => setname(event.target.value)}
//             placeholder="Enter User Name"
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email </label>
//           <input
//             type="text"
//             name="email"
//             value={email}
//             onChange={(event) => setemail(event.target.value)}
//             placeholder="Enter Email Id"
//           />
//         </div>
//         <div>
//           <label htmlFor="phone">Phone </label>
//           <input
//             type="text"
//             name="phone"
//             value={phone}
//             onChange={(event) => setphone(event.target.value)}
//             placeholder="Enter Phone Number"
//           />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//       <table border="1">
//         <thead className="thead-dark">
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, id) => {
//             return (
//               <tr key={id}>
//                 <td>{id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.phone}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default Example;
