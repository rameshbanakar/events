import { Provider } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Store from "./redux/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import About from "./Component/About";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Footer from "./Component/Footer";
function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
