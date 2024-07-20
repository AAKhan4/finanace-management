import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import { useState } from "react";

function App() {
  const [lightMode, setLightMode] = useState(true);
  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <Router>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
