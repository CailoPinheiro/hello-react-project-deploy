import React from "react";
import ReactDOM from "react-dom/client";
import logoImage from "./pages/Home/assets/logo.svg";
import { Home } from "./pages/Home/index.jsx";
import { NavBar } from "./components/NavBar/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contato } from "./pages/Contato";
import { Sobre } from "./pages/Sobre";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <>
        <div className="containerRouter">
          <NavBar
            logo={logoImage}
            pagina1={"Home"}
            pagina2={"Contato"}
            pagina3={"Sobre"}
          />
        </div>

        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </>
    </React.StrictMode>
  </BrowserRouter>
);
