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
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Section principale avec le compteur */}
        <main className="flex-grow pt-16 pb-16 px-8 text-left">
          {/*<h1 className="text-3xl font-bold">Bienvenue sur mon site !</h1>
          <p className="text-gray-600 mt-2">Explorez les différentes pages :</p>
          <div className="mt-4">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Compteur : {count}
            </button>
          </div>*/}

          {/* Routes de l'application */}
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
