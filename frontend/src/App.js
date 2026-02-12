import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import BiotechBackground from "./components/BiotechBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BiotechBackground />
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
