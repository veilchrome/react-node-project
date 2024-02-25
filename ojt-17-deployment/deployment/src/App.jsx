import Navbar from "./components/Navbar";
import Home from "./components/pages";
import Registration from "./components/pages/Registration";
import Anilist from "./components/pages/Anilist";
import Todos from "./components/pages/Todos";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/anilist" element={<Anilist />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
