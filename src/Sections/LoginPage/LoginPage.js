import React, {useState, useEffect} from 'react'
import './LoginPage.scss'
import {ReactComponent as ButtonArrow} from '../../Assets/arrow.svg'

const LoginPage = themeColors => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const formValidation = () => {
    if (userEmail !== 'rita@goco.dk') {
      setErrorMessage('This user doesn\t exist')
    }
    else if (userPassword !== 'GOodCOmpany') {
      setErrorMessage('Wrong password. Try again!')
    }
    else {
      setErrorMessage(null)
      localStorage.setItem('userEmail', userEmail)
      setUserPassword('')
      setUserEmail('')
    }
  }

  const handleSubmit = e => {
    setErrorMessage(null)
    e.preventDefault()
    formValidation()
  }

  useEffect(() => {
    (userPassword === '' && userEmail === '') && setErrorMessage(null)
  }, [userPassword, userEmail])

  return (
    <div className="loginPage" id="sectionLogin">
      {errorMessage && <p>{errorMessage}</p>}
      <form className="loginFormContainer" onSubmit={handleSubmit}>
        <div className="inputWrapper">
          <input type="input" className="styledInput" placeholder="Email" name="email" value={userEmail} onChange={e=>setUserEmail(e.target.value)} required />
          <label htmlFor="email" className="inputLabel">Email</label>
        </div>
        <div className="inputWrapper">
          <input type="password" className="styledInput" placeholder="Password" name="password" value={userPassword} onChange={e=>setUserPassword(e.target.value)} required />
          <label htmlFor="password" className="inputLabel">Password</label>
        </div>
        <button>
          Enter
          <ButtonArrow />
        </button>
        <div className="forgotPassword">Forgot password? <span>Reset</span></div>
      </form>
    </div>
  )
}

export default LoginPage
