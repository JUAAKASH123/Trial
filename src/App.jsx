import Navbar from "./navbar"
import Home from './home'
import Product_list from "./Product_list";
import Product from "./Product";
import Login from "./login";
import Signup from "./signup";
import Nav2 from "./nav2";
import Profile from "./profile";
import Hero from "./hero";
import Custome_Hook from "./custom_hook";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserContext, web_info } from "./UseContext";
import { useState } from "react";

function App() {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("Signup Data"))
  );

  


  return (
    <UserContext.Provider value={{ user, setUser, web_info }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:categoryName" element={<Product_list />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Nav2" element={<Nav2 />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/Custome_Hook" element={<Custome_Hook/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
