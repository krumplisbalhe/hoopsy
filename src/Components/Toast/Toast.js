import React from 'react'
import './Toast.scss'

const Toast = ({message}) => (
  <div className="toast">
    {message}
  </div>
)

export default Toast
