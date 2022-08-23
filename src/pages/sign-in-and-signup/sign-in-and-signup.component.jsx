import React from 'react'
import SignIn from './sign-in.component'
import SignUp from './sign-up.component'
import './sign-in-and-signup.styles.scss'

export const SignInAndSignup = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}
