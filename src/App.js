import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header  from './components/header/header.component';
import { SignInAndSignup } from './pages/sign-in-and-signup/sign-in-and-signup.component';
import { auth, createUserProfilDocument, db } from './firebase/firebase.utils'
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { UserAuthContextProvider } from "./firebase/UserAuthContext";
import { useDispatch } from 'react-redux';
import { login } from './redux/user/user.reducer';

const App = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        createUserProfilDocument(user)
      }
      dispatch(login(user))
      return navigate('/')
    })
  
    return () => {
      unsubscribe()
    }
  }, [])
  

  return (
    <div>
        <UserAuthContextProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/shop" element={<ShopPage />} />
            <Route exact path="/signin" element={<SignInAndSignup />} />
            {/* <Route exact path="/hats" element={<HatsPage />} /> */}
            {/* <Route exact path="/hats/:topicId" element={<HatsPage />} /> */}
          </Routes>
        </UserAuthContextProvider>
      </div>
  )
}

export default App;
