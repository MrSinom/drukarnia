import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

    return (
  <div className="app-layout">
    <Navbar />

    {/* LOADER */}
    <div className={`loader ${isLoading ? "show" : "hide"}`}>
      <h1>
        DRUKUJEMY <span className="gold">DLA CIEBIE</span>
      </h1>
    </div>

    {/* CONTENT */}
    <main className={`page content ${isLoading ? "hide" : "show"}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>

    <Footer />
  </div>
);
}