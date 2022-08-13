import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SignInAndSignup } from './pages/sign-in-and-signup/sign-in-and-signup.component';

// const HatsPage = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>HATS PAGES</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <Header /> 
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

export default App;
