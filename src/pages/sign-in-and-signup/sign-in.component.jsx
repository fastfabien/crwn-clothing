import React, { Component, useState } from 'react'
import { CustomButton } from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';
import { useUserAuth } from "../../firebase/UserAuthContext";

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput name='email' type="email" label='Email' required handleChange={(event) => setEmail(event.target.value)} />
          <FormInput name='password' type="password" label='Password' handleChange={(event) => setPassword(event.target.value)} />
          <div className="buttons">
            <CustomButton type="submit">Signin</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Signin with Google{' '}</CustomButton>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignIn
