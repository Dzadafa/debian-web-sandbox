import { Routes, Route } from "react-router-dom";
import Sandbox from "./Sandbox.jsx";
import PublicPortfolio from "./components/PublicPortfolio.jsx";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sandbox />} />
      <Route path="/result/:slug" element={<PublicPortfolio />} />
    </Routes>
  );
}

export default App;
