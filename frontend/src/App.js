import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import { useState } from "react";
import Signup from "./components/User/Signup";
import Login from "./components/User/Login";

function App() {
  const [lightMode, setLightMode] = useState(true);
  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
