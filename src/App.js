import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode"
    } else {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"

    }
  }

 

  return (
    <>
      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <Routes>
          <Route path="/"
            element={
              <div className="container">
                <Textform showAlert={showAlert} mode={mode} />
              </div>
            }
          />
          <Route path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;




