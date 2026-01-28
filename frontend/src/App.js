import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScientificApproach from "./components/ScientificApproach";
import Technology from "./components/Technology";
import Team from "./components/Team";
import Investment from "./components/Investment";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <main>
            <Hero />
            <div id="science">
              <ScientificApproach />
            </div>
            <div id="platform">
              <Technology />
            </div>
            <div id="team">
              <Team />
            </div>
            <div id="investment">
              <Investment />
            </div>
            <div id="contact">
              <CTA />
            </div>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
