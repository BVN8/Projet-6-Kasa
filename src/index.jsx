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

  body {
    margin: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
        <Route path='/logement' element={<Logement />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);