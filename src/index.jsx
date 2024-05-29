import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home/home";
import About from "./pages/About/About";
import Footer from "./Components/Footer";
import ErrorPage from "./Components/Error/Error";
import LocationDetails from "./pages/LocationDetails/LocationDetails";
import { createGlobalStyle } from "styled-components";
import "./style/app.scss";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }

  html, body, #root {
    height: 100%;
  }
`;

function App() {
  return (
    <React.StrictMode>
      <Router>
        <GlobalStyle />
        <div className="app">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apropos" element={<About />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route exact path="/locations/:locationId" element={<LocationDetails />} />
              <Route path="*" element={<Navigate to="/error" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
