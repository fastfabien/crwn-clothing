import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { toggleHidden } from '../../redux/cart/cart.reducer';

const CartIcon = () => {
  const cart = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()
  return (
    <div className='cart-icon' onClick={() => dispatch(toggleHidden(!cart))} >
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon