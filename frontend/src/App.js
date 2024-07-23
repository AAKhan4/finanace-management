import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import Signup from "./components/User/Signup";
import Login from "./components/User/Login";
import Logout from "./components/User/Logout";
import Nav from "./components/Nav";
import Settings from "./components/Settings";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Nav />
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
