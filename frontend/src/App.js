import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import BiotechBackground from "./components/BiotechBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Science from "./pages/Science";
import Programme from "./pages/Programme";
import AboutUs from "./pages/AboutUs";
import News from "./pages/News";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BiotechBackground />
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/science" element={<Science />} />
              <Route path="/programme" element={<Programme />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
