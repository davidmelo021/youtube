import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Inscription from "./pages/inscricao";

function App() {

  const [openMenu,setOpenMenu] = useState(false);

  return (
    <BrowserRouter>
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <div style={{width:'100%', display:'flex' }}>
        <Menu openMenu= {openMenu}/>
        <div style={{ width:'100%'}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shorts' element={<Shorts/>}/>
            <Route path='/iscricao' element={<Inscription/>}/>
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
