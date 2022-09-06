import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';


const Header = () => {
  const currentUser = useSelector((state) => state.user.value);
  const cart = useSelector((state) => state.cart.value)
  
  return (
    <div className='header'>
      <Link className='logo-container' to="/" >
        <Logo className='logo' />
      </Link>
      <div className="options">
        <Link className='option' to="/shop">SHOP</Link>
        <Link className='option' to="/contact">CONTACT</Link>
        {
          currentUser ?
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link to="/signin" className='option'>SIGN IN</Link>
        }
        { console.log(cart) }
        <CartIcon />
      </div>
      {
        !cart && <CartDropDown />
      }
    </div>
  )
}

export default Header