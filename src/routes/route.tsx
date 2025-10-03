import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Shorts from "../pages/shorts";
import Inscription from "../pages/inscricao";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shorts" element={<Shorts />} />
      <Route path="/inscricao" element={<Inscription />} />
    </Routes>
  );
}

export default AppRoutes;
