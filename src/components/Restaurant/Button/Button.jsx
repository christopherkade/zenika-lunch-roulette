import React from 'react'
import PropTypes from 'prop-types';

import iconFork from './fork.svg'

import './Button.css'

function Button(props) {
  return (
    <button className="button-stop" onClick={props.handleClick}>
      <img className="button-icon" src={iconFork} alt="forkIcon" />
    </button>
  )
}

Button.propTypes = {
  isRunning: PropTypes.bool,
  handleClick: PropTypes.func
}

export default Button
