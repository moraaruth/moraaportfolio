import React from 'react'

const Button = ({ text, className, id }) => {
  return (
    <a className="cta-wrapper">
      <div className="cta-group group">
        <div className="bg-circle" />
        <p className="text">See my work</p>
      <div className='arrow-wrapper'>
          <img src='./assets/public/images/arrow-down.svg' alt='arrow' />

      </div>
      </div>
    </a>
  )
}

export default Button
