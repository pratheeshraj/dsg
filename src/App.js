import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Register from "./pages/register/Register";
import Ordersdata from "./pages/ordersdata/Ordersdata";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/home" element={<Home />} />
            <Route index  element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              
            </Route>
            <Route path="products">
              <Route index element={<List />} />
            </Route>
            <Route path="/orders" element={<Ordersdata/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
