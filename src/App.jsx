import { Topbar } from "./component/topbar/Topbar.jsx";
import "./app.scss";
import { Sidebar } from "./component/sidebar/Sidebar.jsx";
import { Home } from "./pages/home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserList } from "./pages/userList/UserList.jsx";
import { User } from "./pages/user/User.jsx";
import { NewUser } from "./pages/newUser/NewUser.jsx";

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="hero-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User/>} />
          <Route path="/newUser" element={<NewUser/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
