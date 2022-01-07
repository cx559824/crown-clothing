import React, { useState, useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import Hatspage from "./pages/hatspage/hatspage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [user, setUser] = useState({
    currentUser: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapShot) => {
            setUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            });
          });
        } else if (!userAuth) {
          setUser({ currentUser: userAuth });
        }
      },
      [user]
    );
  }, []);

  console.log(user);

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
