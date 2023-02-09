import "./App.css";
import "antd/dist/antd.css";
// import NewTask from "./newTask/TaskComponents/NewTask";
// import Login from "./Authentication/Login";
import Routes from "./Authentication/Routes/Routes";
// import { useState } from "react";
function App() {
  
  return (
    <div className="App">
      {/* <NewTask/> */}
      {/* <Login/> */}
      <Routes/>
    </div>
  );
}

export default App;
