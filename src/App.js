
import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import Categories from "./components/categories";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/route";
import { UserStorage } from "./context/userContext";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <UserStorage>

     <BrowserRouter>
       <div className="App">
         <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
         <Categories openMenu={openMenu} />
         <div style={{ width: "100%", display: "flex" }}>
           <Menu openMenu={openMenu} />
           <div
             style={{
               width: "100%",
               padding: "50px 70px",
               boxSizing: "border-box",
             }}
           >
             <AppRoutes />
           </div>
         </div>
       </div>
     </BrowserRouter>
    
    </UserStorage>
  );
}

export default App;
