import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "component/layout/Footer";

import Providers from "Providers";

import { Container } from "style/MyStyle";

function App() {
  return (
    <div className='App'>
      <Container>
        <Router>
          <Providers />
        </Router>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
