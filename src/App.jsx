import {Topbar} from "./component/topbar/Topbar.jsx"
import "./app.scss"
import { Sidebar } from "./component/sidebar/Sidebar.jsx";

function App() {

  return (
    <div className="App">
    <Topbar/>
    <div className="hero-container">
      <Sidebar/>
      <div className="info-container">
        Info Container
      </div>
    </div>
    
    </div>
  );
}

export default App;
