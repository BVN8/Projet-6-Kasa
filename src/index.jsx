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

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
`;

function App() {
  return (
    <React.StrictMode>
      <Router>
        <GlobalStyle />
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apropos" element={<About />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route exact path="/locations/:locationId" element={<LocationDetails />} />
              <Route path="*" element={<Navigate to="/error" replace />} />
            </Routes>
          <Footer />
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
