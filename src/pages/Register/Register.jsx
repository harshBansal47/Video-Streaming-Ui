import React from 'react'
import './Register.scss'
import logo from  '../../assets/logo.png'
const Register = () => {
  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
          <img className='logo' src = {logo} alt = ""/>
          <button className='login-button'>Sign in</button>
        </div>
      </div>
      <div className='container'>
      <h1>Unlimited movies, TV shows and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className='input'>
        <input type='text' placeholder='Email Address' />
        <button className='register-button'>Get Started</button>
      </div>
      </div>
    </div>
  )
}

export default Register