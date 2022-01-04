import React, { useState, useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import Hatspage from "./pages/hatspage/hatspage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from './firebase/firebase.utils'


function App() {
  const [user, setUser] = useState(null)

useEffect(() => {
  auth.onAuthStateChanged((user) => {
    setUser(user);
    // console.log(user.email);
    // console.log(user.displayName);
  }); 
}, []);

  return (
    <div>
      <Header currentUser={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signIn" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
