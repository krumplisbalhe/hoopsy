import React, {useState, useEffect} from 'react'
import './LoginPage.scss'
import {ReactComponent as ButtonArrow} from '../../Assets/arrow.svg'
import Toast from '../../Components/Toast/Toast'

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [feedbackMessage, setFeedbackMessage] = useState(null)

  const formValidation = () => {
    if (userEmail !== 'rita@goco.dk') {
      setFeedbackMessage('This user doesn\'t exist.')
    }
    else if (userPassword !== 'GOodCOmpany') {
      setFeedbackMessage('Wrong password. Try again!')
    }
    else {
      localStorage.setItem('userEmail', userEmail)
      setUserPassword('')
      setUserEmail('')
      setFeedbackMessage(`Hello ${localStorage.getItem('userEmail')}.`)
    }
    setTimeout(() => setFeedbackMessage(null), 3000)
  }

  const handleSubmit = e => {
    setFeedbackMessage(null)
    e.preventDefault()
    formValidation()
  }

  useEffect(() => {
    (userPassword === '' && userEmail === '' && !localStorage.getItem('userEmail')) && setFeedbackMessage(null)
  }, [userPassword, userEmail])

  return (
    <div className="loginPage" id="sectionLogin">
      {feedbackMessage && <Toast message={feedbackMessage} />}
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
