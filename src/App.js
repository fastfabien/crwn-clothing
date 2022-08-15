import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SignInAndSignup } from './pages/sign-in-and-signup/sign-in-and-signup.component';
import { auth } from './firebase/firebase.utils'
import React from 'react';

// const HatsPage = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>HATS PAGES</h1>
//     </div>
//   )
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} /> 
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={<SignInAndSignup />} />
          {/* <Route exact path="/hats" element={<HatsPage />} /> */}
          {/* <Route exact path="/hats/:topicId" element={<HatsPage />} /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
