import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Apropos from "./Components/Apropos";
import Footer from "./Components/Footer"
import Error from "./Components/Error"
import { createGlobalStyle } from "styled-components";
import Logement from "./Components/Logement"

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .MainContent {
    flex: 1;
  }
`;

function App() {
  return (
    <React.StrictMode>
      <Router>
        <GlobalStyle />
        <Header />
        <div className="MainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Error />} />
            <Route path='/logement/' element={<Logement />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));