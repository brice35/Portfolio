import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/upload" element={<Gallery />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
