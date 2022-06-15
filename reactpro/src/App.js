import React ,{useLayoutEffect}from "react";
//import Status from"./Component/Status"
 //import Profile from './Component/Profile'
//import Home from "./Component/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Component/About";
import Data from "./Component/Data";
import CheckStatus from "./Component/CheckStatus";
function App() {
  useLayoutEffect(() => {
   console.log("data")
  })
  return (
    <div className="App">
       <CheckStatus/>
        {/* <Status/> */}
     {/* <Home/>  */}
     {/* <Profile/>  */}
     {/* <About/> */}
     {/* <Data/> */}
    </div>
  );
}

export default App;
