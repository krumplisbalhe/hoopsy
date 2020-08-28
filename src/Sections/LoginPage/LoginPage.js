import React from 'react'
import './LoginPage.scss'
import {ReactComponent as ButtonArrow} from '../../Assets/arrow.svg'

function LoginPage() {
  return (
    <div className="loginPage" id="sectionLogin">
      <div className="loginFormContainer">
        <div className="inputWrapper">
          <input type="input" className="styledInput" placeholder="Email" name="email" required />
          <label htmlFor="email" className="inputLabel">Email</label>
        </div>
        <div className="inputWrapper">
          <input type="password" className="styledInput" placeholder="Password" name="password" required />
          <label htmlFor="password" className="inputLabel">Password</label>
        </div>
        <button>
          Enter
          <ButtonArrow />
        </button>
        <div className="forgotPassword">Forgot password? <span>Reset</span></div>
      </div>
    </div>
  )
}

export default LoginPage
