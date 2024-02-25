import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Modal from "./components/Modal";
import Home from "./components/pages";
import Registration from "./components/pages/Registration";
import Anilist from "./components/pages/Anilist";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/anilist" element={<Anilist />} />
      </Routes>
    </Router>
  );
}

export default App;
