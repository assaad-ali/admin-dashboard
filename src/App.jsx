import {Topbar} from "./component/topbar/Topbar.jsx"
import "./app.scss"
import { Sidebar } from "./component/sidebar/Sidebar.jsx";
import { Home } from "./pages/home/Home.jsx";

function App() {

  return (
    <div className="App">
    <Topbar/>
    <div className="hero-container">
      <Sidebar/>
      <Home/>
    </div>
    
    </div>
  );
}

export default App;
