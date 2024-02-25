import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Layout";
import NewsPage from "./components/Layout/NewsPage";
import OpinionPage from "./components/Layout/OpinionPage";
import SportPage from "./components/Layout/SportPage";
import CulturePage from "./components/Layout/CulturePage";
import LifestylePage from "./components/Layout/LifestylePage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/opinion" element={<OpinionPage />} />
          <Route path="/sport" element={<SportPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/lifestyle" element={<LifestylePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
