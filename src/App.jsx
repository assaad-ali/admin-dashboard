import {Topbar} from "./component/topbar/Topbar.jsx"
import "./app.scss"
import { Sidebar } from "./component/sidebar/Sidebar.jsx";

function App() {

  return (
    <div className="App">
    <Topbar/>
    <Sidebar/>
    </div>
  );
}

export default App;
