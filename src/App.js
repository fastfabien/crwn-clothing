import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SignInAndSignup } from './pages/sign-in-and-signup/sign-in-and-signup.component';
import { auth, createUserProfilDocument, db } from './firebase/firebase.utils'
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { UserAuthContextProvider } from "./firebase/UserAuthContext";
import { doc } from 'firebase/firestore';

// const HatsPage = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>HATS PAGES</h1>
//     </div>
//   )
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       currentUser: null
//     }
//   }

//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     this.unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const userRef = createUserProfilDocument(user)
//         this.setState({ currentUser: user })
//         console.log(this.state)
//       }
//     })
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
      
//     );
//   }


const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        createUserProfilDocument(user)
      }
      setCurrentUser(user)
      return navigate('/')
    })
  
    return () => {
      unsubscribe()
    }
  }, [])
  

  return (
    <div>
        <UserAuthContextProvider>
          <Header currentUser={currentUser} />
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

export default App
