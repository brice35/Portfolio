import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Corps centré et contenu réduit */}
        <main className="flex-1 py-8 px-4 text-left max-w-4xl mx-auto min-h-[300px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
