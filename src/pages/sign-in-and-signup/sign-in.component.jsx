import React, { Component } from 'react'
import { CustomButton } from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

export default class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target;
    console.log(name);

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type="email" label='Email' value={this.state.email} required handleChange={this.handleChange} />
          <FormInput name='password' type="password" label='Password' value={this.state.password} handleChange={this.handleChange} />
          <div className="buttons">
            <CustomButton type="submit">Signin</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Signin with Google{' '}</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
