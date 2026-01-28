import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScientificMoat from "./components/ScientificMoat";
import DrugDiscovery from "./components/DrugDiscovery";
import Team from "./components/Team";
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
              <ScientificMoat />
            </div>
            <div id="platform">
              <DrugDiscovery />
            </div>
            <div id="team">
              <Team />
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
