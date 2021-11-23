import "./App.css";
import Login from "./Login";
import Register from "./Register";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <Router>
      <div>
        <Link className="App-link" to="/">
          Login
        </Link>
        <Link className="App-link" to="/register">
          Register
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default Home;
