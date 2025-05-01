import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email);
    navigate("/gallery");
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Login;