import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail"; // <-- IMPORT ICI

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router basename="/Portfolio"> {/* <-- BASE NAME POUR GITHUB PAGES */}
      <div className="flex flex-col min-h-screen bg-[#fff7ed] text-[#1e1e1e]">
        <Navbar />

        <main className="flex-1 py-8 px-4 text-left max-w-900 mx-auto min-h-[300px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projets/:projectId" element={<ProjectDetail />} /> {/* <-- ROUTE DYNAMIQUE */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
