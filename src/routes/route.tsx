import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Shorts from "../pages/shorts";
import Inscription from "../pages/inscricao";
import Login from "../pages/login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shorts" element={<Shorts />} />
      <Route path="/inscricao" element={<Inscription />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
