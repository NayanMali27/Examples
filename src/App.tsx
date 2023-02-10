import "./App.css";
import "antd/dist/antd.css";
// import NewTask from "./newTask/TaskComponents/NewTask";
import Routes from "./Authentication/Routes/Routes";
function App() {
  
  return (
    <div className="App">
      {/* <NewTask/> */}
      <Routes/>
    </div>
  );
}

export default App;
